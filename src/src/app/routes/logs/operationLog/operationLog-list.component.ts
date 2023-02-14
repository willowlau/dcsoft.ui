import { Component, Injector } from '@angular/core';
import { TableQueryComponentBase } from '@dcsoft/util';

import { OperationLogQuery } from './model/operationLog-query';
import { OperationLogViewModel } from './model/operationLog-view-model';
import { OperationLogDetailComponent } from './operationLog-detail.component';

/**
 * 操作日志列表页
 */
@Component({
  selector: 'app-operationLog-list',
  templateUrl: './html/index.component.html',
})
export class OperationLogListComponent extends TableQueryComponentBase<OperationLogViewModel, OperationLogQuery> {
  /**
   * 操作时间
   */
  operatorTime = [];
  /**
   * 初始化操作日志列表页
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建查询参数
   */
  protected override createQuery(): OperationLogQuery {
    const result = new OperationLogQuery();
    return result;
  }
  /**
   * 查询
   * @param button 按钮
   */
  override query(button: any): void {
    if (this.operatorTime.length > 0) {
      this.queryParam.beginCreationTime = this.util.helper.formatDate(this.operatorTime[0], 'YYYY-MM-DD');
      this.queryParam.endCreationTime = this.util.helper.formatDate(this.operatorTime[1], 'YYYY-MM-DD');
    } else {
      this.queryParam.beginCreationTime = null;
      this.queryParam.endCreationTime = null;
    }
    super.query(button);
  }
  /**
   * 获取创建弹出框组件
   */
  override getCreateDialogComponent(): any {
    return OperationLogDetailComponent;
  }
  /**
   * 获取详情弹出框组件
   */
  override getDetailDialogComponent(): any {
    return OperationLogDetailComponent;
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailDialogTitle() {
    return '日志详情';
  }
  /**
   * 获取创建弹出层宽度
   */
  override getDetailDialogWidth(): string {
    return '900px';
  }
}
