import { Component, Injector, Input, OnInit } from '@angular/core';
import { TreeEditComponentBase } from '@dcsoft/util';

import { DepartmentViewModel } from './model/department-view-model';

/**
 * 模块编辑页
 */
@Component({
  selector: 'app-department-edit',
  templateUrl: './html/edit.component.html'
})
export class DepartmentEditComponent extends TreeEditComponentBase<DepartmentViewModel> implements OnInit {
  /**
   * 初始化模块编辑页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 初始化
   */
  override ngOnInit(): void {
    super.ngOnInit();
  }
  /**
   * 创建模型
   */
  override createModel(): DepartmentViewModel {
    const result = new DepartmentViewModel();
    result.enabled = true;
    return result;
  }
  /**
   * 获取基地址
   */
  protected getBaseUrl(): string {
    return 'commons/department';
  }
}
