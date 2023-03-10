import { Component, Injector } from '@angular/core';
import { EditComponentBase } from '@dcsoft/util';

import { ApiResourceViewModel } from './model/api-resource-view-model';

/**
 * Api资源详情页
 */
@Component({
  selector: 'app-api-resource-detail',
  templateUrl: './html/detail.component.html'
})
export class ApiResourceDetailComponent extends EditComponentBase<ApiResourceViewModel> {
  /**
   * 初始化Api资源详情页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 获取基地址
   */
  protected getBaseUrl(): string {
    return 'systems/api-resource';
  }
}
