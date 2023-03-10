import { Component, Injector } from '@angular/core';
import { EditComponentBase } from '@dcsoft/util';

import { ClaimViewModel } from './model/claim-view-model';

/**
 * 声明编辑页
 */
@Component({
  selector: 'app-claim-edit',
  templateUrl: './html/edit.component.html'
})
export class ClaimEditComponent extends EditComponentBase<ClaimViewModel> {
  /**
   * 初始化声明编辑页
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
