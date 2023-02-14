import { Component, Injector } from '@angular/core';
import { TableQueryComponentBase } from '@dcsoft/util';

import { RoleQuery } from './model/role-query';
import { RoleViewModel } from './model/role-view-model';
import { RoleDetailComponent } from './role-detail.component';
import { RoleEditComponent } from './role-edit.component';
import { RolePermissionComponent } from './role-permission.component';

/**
 * 角色列表页
 */
@Component({
  selector: 'role-list',
  templateUrl: './html/index.component.html'
})
export class RoleListComponent extends TableQueryComponentBase<RoleViewModel, RoleQuery> {
  /**
   * 初始化角色列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建查询参数
   */
  override createQuery(): RoleQuery {
    const result = new RoleQuery();
    return result;
  }
  /**
   * 设置创建窗口标题
   */
  override getCreateDrawerTitle() {
    return '创建角色';
  }
  /**
   * 设置编辑窗口标题
   */
  override getEditDrawerTitle() {
    return '编辑角色';
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailDrawerTitle() {
    return '角色详情';
  }
  /**
   * 获取创建弹出框组件
   */
  override getCreateDrawerComponent(): any {
    return RoleEditComponent;
  }
  /**
   * 获取详情弹出框组件
   */
  override getDetailDrawerComponent(): any {
    return RoleDetailComponent;
  }
  /**
   * 获取弹出框宽度
   */
  override getDrawerWidth(): string {
    return '500px';
  }
  /**
   * 打开权限设置弹出框
   */
  openPermissionDialog(role: any): any {
    this.util.dialog.open({
      component: RolePermissionComponent,
      data: { role },
      showMask: false,
      disableClose: false,
      width: '1060px',
      onOk: instance => {
        instance.save();
        return false;
      }
    });
  }
}
