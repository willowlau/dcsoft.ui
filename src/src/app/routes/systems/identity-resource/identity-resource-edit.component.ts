import { Component, Injector } from '@angular/core';
import { EditComponentBase } from '@dcsoft/util';

import { IdentityResourceViewModel } from './model/identity-resource-view-model';

/**
 * 身份资源编辑页
 */
@Component({
  selector: 'app-identity-resource-edit',
  templateUrl: './html/edit.component.html'
})
export class IdentityResourceEditComponent extends EditComponentBase<IdentityResourceViewModel> {
  /**
   * 初始化身份资源编辑页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建模型
   */
  override createModel(): IdentityResourceViewModel {
    const result = new IdentityResourceViewModel();
    result.enabled = true;
    return result;
  }
  /**
   * 获取基地址
   */
  getBaseUrl(): string {
    return 'systems/identity-resource';
  }
}
