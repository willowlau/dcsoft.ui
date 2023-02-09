import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartupService } from '@core';
import { ComponentBase } from '@dcsoft/util';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { SettingsService } from '@delon/theme';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'layout-pro-user',
  templateUrl: 'user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutProWidgetUserComponent extends ComponentBase implements OnInit {
  constructor(
    injector: Injector,
    public settings: SettingsService, 
    public modalSrv: NzModalService,
    private startupSrv: StartupService,
    private router: Router, 
    private cdr: ChangeDetectorRef,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {
      super(injector);
    }

  ngOnInit(): void {
    this.startupSrv.loadAppData('systems/user/app-data').subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  logout(): void {
    let loading = false;
    this.modalSrv.confirm({
      nzTitle: '询问?',
      nzContent: '你确定要退出系统吗?',
      nzOkLoading: loading,
      nzOnOk: () => {
        loading = true;
        this.util.webapi.get('systems/auth/logout').handle({
          ok: resp => {
            this.tokenService.clear();
            this.router.navigateByUrl(this.tokenService.login_url!);
          },
          complete: () => {
            loading = false;
          }
        });
      }
    });
  }
}
