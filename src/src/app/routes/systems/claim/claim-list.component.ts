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
  override getCreateTitle() {
    return `${this.util.i18n.get('util.create')}${this.util.i18n.get('app.systems.claim.title')}`;
  }
  /**
   * 设置编辑窗口标题
   */
  override getEditTitle() {
    return `${this.util.i18n.get('util.update')}${this.util.i18n.get('app.systems.claim.title')}`;
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailTitle() {
    return `${this.util.i18n.get('util.detail')}${this.util.i18n.get('app.systems.claim.title')}`;
  }
  /**
   * 获取创建抽屉框组件
   */
  override getCreateComponent(): any {
    return ClaimEditComponent;
  }
  /**
   * 获取更新抽屉框组件
   */
  override getEditComponent(): any {
    return ClaimEditComponent;
  }
  /**
   * 获取详情抽屉框组伯
   */
  override getDetailComponent(): any {
    return ClaimDetailComponent;
  }
  /**
   * 获取抽屉框宽度
   */
  override getWidth(): string {
    return '500px';
  }
}
