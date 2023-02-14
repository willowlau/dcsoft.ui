import { Component, Injector } from '@angular/core';
import { DrawerEditComponentBase } from '@dcsoft/util';

import { IdentityResourceViewModel } from './model/identity-resource-view-model';

/**
 * 身份资源详情页
 */
@Component({
  selector: 'app-identity-resource-detail',
  templateUrl: './html/detail.component.html'
})
export class IdentityResourceDetailComponent extends DrawerEditComponentBase<IdentityResourceViewModel> {
  /**
   * 初始化身份资源详情页
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
    return 'systems/identity-resource';
  }
}
