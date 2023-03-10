import { Component, Injector } from '@angular/core';
import { TableQueryComponentBase } from '@dcsoft/util';

import { ApiResourceDetailComponent } from './api-resource-detail.component';
import { ApiResourceEditComponent } from './api-resource-edit.component';
import { ApiResourceQuery } from './model/api-resource-query';
import { ApiResourceViewModel } from './model/api-resource-view-model';

/**
 * Api资源列表页
 */
@Component({
  selector: 'app-api-resource-list',
  templateUrl: './html/index.component.html'
})
export class ApiResourceListComponent extends TableQueryComponentBase<ApiResourceViewModel, ApiResourceQuery> {
  /**
   * 初始化Api资源列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建查询参数
   */
  override createQuery(): ApiResourceQuery {
    const result = new ApiResourceQuery();
    return result;
  }
  /**
   * 设置创建窗口标题
   */
  override getCreateTitle() {
    return '创建Api资源';
  }
  /**
   * 设置编辑窗口标题
   */
  override getEditTitle() {
    return '编辑Api资源';
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailTitle() {
    return 'Api资源详情';
  }
  /**
   * 获取创建弹出框组件
   */
  override getCreateComponent() {
    return ApiResourceEditComponent;
  }
  /**
   * 获取详情弹出框组件
   */
  override getDetailComponent() {
    return ApiResourceDetailComponent;
  }
  /**
   * 获取弹出框宽度
   */
  override getWidth(): string {
    return '600px';
  }
}
