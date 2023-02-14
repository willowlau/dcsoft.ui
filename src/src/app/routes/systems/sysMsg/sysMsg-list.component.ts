import { Component, Injector } from '@angular/core';
import { TableEditComponentBase } from '@dcsoft/util';

import { SysMsgQuery } from './model/sysMsg-query';
import { SysMsgViewModel } from './model/sysMsg-view-model';

/**
 * 系统消息列表页
 */
@Component({
  selector: 'app-sysMsg-list',
  templateUrl: './html/index.component.html'
})
export class SysMsgListComponent extends TableEditComponentBase<SysMsgViewModel, SysMsgQuery> {
  /**
   * 初始化系统消息列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建查询参数
   */
  override createQuery(): SysMsgQuery {
    const result = new SysMsgQuery();
    return result;
  }
}
