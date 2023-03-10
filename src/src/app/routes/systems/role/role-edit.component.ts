import { Component, Injector } from '@angular/core';
import { EditComponentBase } from '@dcsoft/util';

import { RoleViewModel } from './model/role-view-model';

/**
 * 角色编辑页
 */
@Component({
  selector: 'role-edit',
  templateUrl: './html/edit.component.html'
})
export class RoleEditComponent extends EditComponentBase<RoleViewModel> {
  /**
   * 初始化角色编辑页
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
  /**
   * 创建模型
   */
  override createModel(): RoleViewModel {
    const result = new RoleViewModel();
    result.enabled = true;
    return result;
  }
}
