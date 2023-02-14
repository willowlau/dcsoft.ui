import { Component, Injector } from '@angular/core';
import { EditComponentBase } from '@dcsoft/util';

import { ModuleViewModel } from './model/module-view-model';

/**
 * 模块详情页
 */
@Component({
  selector: 'app-module-detail',
  templateUrl: './html/detail.component.html'
})
export class ModuleDetailComponent extends EditComponentBase<ModuleViewModel> {
  /**
   * 初始化模块详情页
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
    return 'systems/module';
  }
}
