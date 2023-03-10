import { Component, Injector } from '@angular/core';
import { TableQueryComponentBase } from '@dcsoft/util';

import { IdentityResourceDetailComponent } from './identity-resource-detail.component';
import { IdentityResourceEditComponent } from './identity-resource-edit.component';
import { IdentityResourceQuery } from './model/identity-resource-query';
import { IdentityResourceViewModel } from './model/identity-resource-view-model';

/**
 * 身份资源列表页
 */
@Component({
  selector: 'app-identity-resource-list',
  templateUrl: './html/index.component.html'
})
export class IdentityResourceListComponent extends TableQueryComponentBase<IdentityResourceViewModel, IdentityResourceQuery> {
  /**
   * 初始化身份资源列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建查询参数
   */
  override createQuery(): IdentityResourceQuery {
    const result = new IdentityResourceQuery();
    return result;
  }
  /**
   * 设置创建窗口标题
   */
  override getCreateTitle() {
    return '创建身份资源';
  }
  /**
   * 设置编辑窗口标题
   */
  override getEditTitle() {
    return '编辑身份资源';
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailTitle() {
    return '身份资源详情';
  }
  /**
   * 获取创建弹出框组件
   */
  override getCreateComponent(): any {
    return IdentityResourceEditComponent;
  }
  /**
   * 获取详情弹出框组件
   */
  override getDetailComponent(): any {
    return IdentityResourceDetailComponent;
  }
  /**
   * 获取弹出框宽度
   */
  override getWidth(): string {
    return '600px';
  }
}
