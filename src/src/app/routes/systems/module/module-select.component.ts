import { Component, Injector, Input } from '@angular/core';
import { TreeTableQueryComponentBase } from '@dcsoft/util';

import { ModuleQuery } from './model/module-query';
import { ModuleViewModel } from './model/module-view-model';

/**
 * 模块选择页
 */
@Component({
  selector: 'app-module-select',
  templateUrl: './html/select.component.html'
})
export class ModuleSelectComponent extends TreeTableQueryComponentBase<ModuleViewModel, ModuleQuery> {
  /**
   * 应用程序标识
   */
  @Input() applicationId: any;
  /**
   * 初始化模块列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建查询参数
   */
  override createQuery(): ModuleQuery {
    const result = new ModuleQuery();
    result.applicationId = this.applicationId;
    return result;
  }
}
