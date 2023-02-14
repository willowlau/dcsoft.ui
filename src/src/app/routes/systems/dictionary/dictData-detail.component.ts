import { Component, Injector } from '@angular/core';
import { DialogEditComponentBase } from '@dcsoft/util';

import { DictDataViewModel } from './model/dictData-view-model';

/**
 * 字典数据详情页
 */
@Component({
  selector: 'app-dictionary-data-detail',
  templateUrl: './html/dictData-detail.component.html'
})
export class DictDataDetailComponent extends DialogEditComponentBase<DictDataViewModel> {
  /**
   * 初始化字典数据详情页
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
    return 'commons/dict/data';
  }
}
