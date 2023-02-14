import { Component, Injector } from '@angular/core';
import { DrawerEditComponentBase } from '@dcsoft/util';

import { ApplicationViewModel } from './model/application-view-model';

/**
 * 应用程序详情页
 */
@Component({
  selector: 'app-application-detail',
  templateUrl: './html/detail.component.html'
})
export class ApplicationDetailComponent extends DrawerEditComponentBase<ApplicationViewModel> {
  /**
   * 初始化应用程序详情页
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
    return 'systems/application';
  }
}
