import { Component, Injector } from '@angular/core';
import { DrawerEditComponentBase } from '@dcsoft/util';

import { ApiResourceViewModel } from './model/api-resource-view-model';

/**
 * Api资源编辑页
 */
@Component({
  selector: 'app-api-resource-edit',
  templateUrl: './html/edit.component.html'
})
export class ApiResourceEditComponent extends DrawerEditComponentBase<ApiResourceViewModel> {
  /**
   * 初始化Api资源编辑页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建模型
   */
  override createModel(): any {
    const result = new ApiResourceViewModel();
    result.enabled = true;
    return result;
  }
  /**
   * 获取基地址
   */
  getBaseUrl(): string {
    return 'systems/api-resource';
  }
}
