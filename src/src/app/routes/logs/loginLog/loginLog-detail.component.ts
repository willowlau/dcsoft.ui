import { Component, Injector } from '@angular/core';
import { EditComponentBase } from '@dcsoft/util';

import { LoginLogViewModel } from './model/loginLog-view-model';

/**
 * 登录日志详情页
 */
@Component({
  selector: 'app-loginLog-detail',
  templateUrl: './html/detail.component.html'
})
export class LoginLogDetailComponent extends EditComponentBase<LoginLogViewModel> {
  /**
   * 初始化登录日志详情页
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * 获取基地址
   */
  protected getBaseUrl(): string {
    return 'logs/login-log';
  }
}
