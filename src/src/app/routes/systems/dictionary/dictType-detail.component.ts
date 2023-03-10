import { Component, Injector } from '@angular/core';
import { EditComponentBase } from '@dcsoft/util';

import { DictTypeViewModel } from './model/dictType-view-model';

/**
 * 字典详情页
 */
@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './html/dictType-detail.component.html'
})
export class DictTypeDetailComponent extends EditComponentBase<DictTypeViewModel> {
  /**
   * 初始化字典详情页
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
    return 'commons/dict/type';
  }
}
