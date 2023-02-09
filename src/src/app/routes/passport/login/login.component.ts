import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Injector, OnDestroy, OnInit, Optional } from "@angular/core";
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { StartupService } from "@core";
import { ComponentBase } from "@dcsoft/util";
import { ReuseTabService } from "@delon/abc/reuse-tab";
import { ALLOW_ANONYMOUS, DA_SERVICE_TOKEN, ITokenService, SocialOpenType, SocialService } from "@delon/auth";
import { SettingsService, _HttpClient } from "@delon/theme";
import { environment } from "@env/environment";
import { NzTabChangeEvent } from "ng-zorro-antd/tabs";
import { finalize } from "rxjs";

@Component({
  selector: "passport-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
  providers: [SocialService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoginComponent extends ComponentBase implements OnInit, OnDestroy {
  /**
   * 验证码图片
   */
  captchaImg!: string;
  /**
   * 错误信息
   */
  error = "";
  /**
   * 验证码KeyKey
   */
  lastKey!: string;
  /**
   * 密码密钥
   */
  encrypt!: string;
  /**
   * 密码密钥KeyKey
   */
  encryptKey!: string;
  /**
   * 构造函数
   */
  constructor(
    injector: Injector,
    private fb: FormBuilder,
    private router: Router,
    private settingsService: SettingsService,
    private socialService: SocialService,
    @Optional()
    @Inject(ReuseTabService)
    private reuseTabService: ReuseTabService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private startupSrv: StartupService,
    private cdr: ChangeDetectorRef
  ) {
    super(injector);
    this.captchaImg = "";
  }
  /**
   * 表单定义
   */
  form = this.fb.nonNullable.group({
    //用户名正则，4到16位（字母，数字，下划线，减号）
    userName: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]{3,16}$/)]],
    //密码正则，4到16位（字母，数字，下划线，减号）
    password: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]{3,16}$/)]],
    captcha: ["", [Validators.required]],
    remember: [true]
  });
  /**
   * 页面加载
   */
  ngOnInit(): void {
    this.lastKey = "";
    this.loadCaptcha();
    this.loadPasswordKey();
    this.form.controls.remember.setValue(!!this.util.store.get("login_remember"));

    if (this.form.value.remember) {
      this.form.controls.userName.setValue(this.util.store.get("login_username"));
    }
  }
  /**
   * 内容加载后
   */
  ngAfterContentInit(): void {
    setTimeout(() => {
      $("#userName").focus();
      if ($("#userName").val() !== "") {
        $("#password").focus();
      }
    }, 500);
  }
  /**
   * 加载验证码
   */
  loadCaptcha(): void {
    this.util.webapi.get<any>(`systems/auth/verifyCode?lastKey=${this.lastKey}`).handle({
      ok: resp => {
        this.lastKey = resp.key;
        this.captchaImg = resp.img;
        this.cdr.detectChanges();
      }
    });
  }
  /**
   * 加载密码密钥
   */
  loadPasswordKey(): void {
    this.util.webapi.get<any>(`systems/auth/encryptKey`).handle({
      ok: resp => {
        this.encrypt = resp.encryptKey;
        this.encryptKey = resp.key;
        this.cdr.detectChanges();
      }
    });
  }

  submit(form?: NgForm, button?: any): void {
    this.error = "";
    this.cdr.detectChanges();
    if (!this.form.valid) {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    this.util.webapi
      .post<any>("systems/auth/login", {
        ClientId: "dcsoft-ui",
        UserName: this.form.value.userName,
        Password: this.util.helper.desEncrypt(this.form.value.password, this.encrypt!),
        PasswordKey: this.encryptKey,
        VerifyCode: this.form.value.captcha,
        VerifyCodeKey: this.lastKey
      })
      .button(button)
      .handle({
        ok: resp => {
          if (this.form.value.remember) {
            this.util.store.set("login_remember", "true");
            this.util.store.set("login_username", this.form.value.userName);
            // this.util.store.set('login_password', this.password);
          } else {
            this.util.store.remove("login_remember");
            this.util.store.remove("login_username");
            // this.util.store.remove('login_password');
          }
          // 清空路由复用信息
          this.reuseTabService.clear();
          // 设置用户Token信息
          this.tokenService.set({
            token: resp.accessToken,
            expired: resp.accessTokenUtcExpires,
            refresh_token: resp.refreshToken
          });
          let url = this.tokenService.referrer!.url || "/";
          if (url.includes("/passport")) {
            url = "/";
          }
          this.router.navigateByUrl(url);
        },
        fail: resp => {
          this.loadCaptcha();
          this.loadPasswordKey();
          this.error = resp.message!;
        },
        complete: () => {
          this.cdr.detectChanges();
        }
      });
    // this.util.form.submit({
    //   url: `systems/auth/login`,
    //   data: {
    //     ClientId: 'drone-admin',
    //     UserName: this.form.value.userName,
    //     Password: this.util.helper.desEncrypt(this.form.value.password, this.encrypt!),
    //     PasswordKey: this.encryptKey,
    //     VerifyCode: this.form.value.captcha,
    //     VerifyCodeKey: this.lastKey
    //   },
    //   showMessage: false,
    //   button,
    //   ok: resp => {
    //     if (this.form.value.remember) {
    //       this.util.store.set('login_remember', 'true');
    //       this.util.store.set('login_username', this.form.value.userName);
    //       // this.util.store.set('login_password', this.password);
    //     } else {
    //       this.util.store.remove('login_remember');
    //       this.util.store.remove('login_username');
    //       // this.util.store.remove('login_password');
    //     }
    //     // 清空路由复用信息
    //     this.reuseTabService.clear();
    //     // 设置用户Token信息
    //     this.tokenService.set({
    //       token: resp.accessToken,
    //       expired: resp.accessTokenUtcExpires,
    //       refresh_token: resp.refreshToken
    //     });
    //     // 重新获取 StartupService 内容，我们始终认为应用信息一般都会受当前用户授权范围而影响
    //     this.startupSrv.loadAppData(`/systems/user/app-data`).subscribe(() => {
    //       let url = this.tokenService.referrer!.url || '/';
    //       if (url.includes('/passport')) {
    //         url = '/';
    //       }
    //       this.router.navigateByUrl(url);
    //     });
    //   },
    //   fail: resp => {
    //     this.loadCaptcha();
    //     this.loadPasswordKey();
    //     this.error = resp.message!;
    //   },
    //   complete: () => {
    //     this.cdr.detectChanges();
    //   }
    // });
  }

  ngOnDestroy(): void {}
}
