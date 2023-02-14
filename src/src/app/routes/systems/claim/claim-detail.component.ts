import { Component, Injector } from '@angular/core';
import { DrawerEditComponentBase } from '@dcsoft/util';

import { ClaimViewModel } from './model/claim-view-model';

/**
 * 声明详情页
 */
@Component({
  selector: 'app-claim-detail',
  templateUrl: './html/detail.component.html'
})
export class ClaimDetailComponent extends DrawerEditComponentBase<ClaimViewModel> {
  /**
   * 初始化声明详情页
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
    return 'systems/claim';
  }
}
