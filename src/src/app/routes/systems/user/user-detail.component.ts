import { Component, Injector } from '@angular/core';
import { DrawerEditComponentBase } from '@dcsoft/util';

import { UserViewModel } from './model/user-view-model';

/**
 * 用户详情页
 */
@Component({
  selector: 'app-user-detail',
  templateUrl: './html/detail.component.html'
})
export class UserDetailComponent extends DrawerEditComponentBase<UserViewModel> {
  /**
   * 初始化用户详情页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 获取基地址
   */
  getBaseUrl(): string {
    return 'systems/user';
  }
}
