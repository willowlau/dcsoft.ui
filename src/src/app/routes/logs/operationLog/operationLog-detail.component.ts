import { Component, Injector } from '@angular/core';
import { EditComponentBase } from '@dcsoft/util';

import { OperationLogViewModel } from './model/operationLog-view-model';

/**
 * 操作日志详情页
 */
@Component({
  selector: 'app-operationLog-detail',
  templateUrl: './html/detail.component.html'
})
export class OperationLogDetailComponent extends EditComponentBase<OperationLogViewModel> {
  /**
   * 初始化操作日志详情页
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * 获取基地址
   */
  protected getBaseUrl(): string {
    return 'logs/operate-log';
  }
}
