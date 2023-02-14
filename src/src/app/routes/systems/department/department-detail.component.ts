import { Component, Injector } from '@angular/core';
import { EditComponentBase } from '@dcsoft/util';

import { DepartmentViewModel } from './model/department-view-model';

/**
 * 模块详情页
 */
@Component({
  selector: 'app-department-detail',
  templateUrl: './html/detail.component.html'
})
export class DepartmentDetailComponent extends EditComponentBase<DepartmentViewModel> {
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
  getBaseUrl(): string {
    return 'systems/department';
  }
}
