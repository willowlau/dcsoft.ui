import { Component, Injector } from '@angular/core';
import { TableQueryComponentBase } from '@dcsoft/util';

import { ClaimDetailComponent } from './claim-detail.component';
import { ClaimEditComponent } from './claim-edit.component';
import { ClaimQuery } from './model/claim-query';
import { ClaimViewModel } from './model/claim-view-model';

/**
 * 声明列表页
 */
@Component({
  selector: 'app-claim-list',
  templateUrl: './html/index.component.html'
})
export class ClaimListComponent extends TableQueryComponentBase<ClaimViewModel, ClaimQuery> {
  /**
   * 初始化声明列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建查询参数
   */
  override createQuery(): ClaimQuery {
    this.queryParam = new ClaimQuery();
    return this.queryParam;
  }
  /**
   * 设置创建窗口标题
   */
  override getCreateDrawerTitle() {
    return '创建声明';
  }
  /**
   * 设置编辑窗口标题
   */
  override getEditDrawerTitle() {
    return '编辑声明';
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailDrawerTitle() {
    return '声明详情';
  }
  /**
   * 获取创建抽屉框组件
   */
  override getCreateDrawerComponent(): any {
    return ClaimEditComponent;
  }
  /**
   * 获取更新抽屉框组件
   */
  override getEditDrawerComponent(): any {
    return ClaimEditComponent;
  }
  /**
   * 获取详情抽屉框组伯
   */
  override getDetailDrawerComponent(): any {
    return ClaimDetailComponent;
  }
  /**
   * 获取抽屉框宽度
   */
  override getDrawerWidth(): string {
    return '500px';
  }
}
