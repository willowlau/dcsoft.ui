import { Component, Injector } from '@angular/core';
import { EditComponentBase } from '@dcsoft/util';

import { RoleViewModel } from './model/role-view-model';

/**
 * 角色详情页
 */
@Component({
  selector: 'app-role-detail',
  templateUrl: './html/detail.component.html'
})
export class RoleDetailComponent extends EditComponentBase<RoleViewModel> {
  /**
   * 初始化角色详情页
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
    return 'systems/role';
  }
}
