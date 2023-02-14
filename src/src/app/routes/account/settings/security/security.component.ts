import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector } from '@angular/core';
import { ComponentBase, HttpMethod } from '@dcsoft/util';

@Component({
  selector: 'app-account-setting-security',
  templateUrl: './html/index.component.html',
  styleUrls: ['./security.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountSettingsSecurityComponent extends ComponentBase {
  /**
   * 加载中
   */
  loading = false;
  /**
   * 安全设置
   */
  data = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  /**
   * 初始化声明列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector, private cdr: ChangeDetectorRef) {
    super(injector);
  }
  /**
   * 更新用户密码
   *
   * @param button 提交按键
   */
  submit(form: any, button: any): void {
    if (this.data.newPassword !== this.data.confirmPassword) {
      this.util.message.warn('两次密码不一至');
      return;
    }
    this.util.form.submit({
      url: `systems/user/pwd`,
      httpMethod: HttpMethod.Post,
      data: this.data,
      form,
      button,
      showMessage: true,
      before: data => {
        this.loading = true;
        return true;
      },
      ok: resp => {
        this.data = {
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        };
      },
      complete: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
