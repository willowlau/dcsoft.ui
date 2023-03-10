import { Component, Injector } from '@angular/core';
import { TreeTableQueryComponentBase } from '@dcsoft/util';

import { DepartmentDetailComponent } from './department-detail.component';
import { DepartmentEditComponent } from './department-edit.component';
import { DepartmentQuery } from './model/department-query';
import { DepartmentViewModel } from './model/department-view-model';

/**
 * 模块列表页
 */
@Component({
  selector: 'app-department-list',
  templateUrl: './html/index.component.html'
})
export class DepartmentListComponent extends TreeTableQueryComponentBase<DepartmentViewModel, DepartmentQuery> {
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
  override createQuery(): DepartmentQuery {
    const result = new DepartmentQuery();
    return result;
  }
  /**
   * 设置创建窗口标题
   */
  override getCreateTitle() {
    return '创建部门';
  }
  /**
   * 设置编辑窗口标题
   */
  override getEditTitle() {
    return '编辑部门';
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailTitle() {
    return '部门详情';
  }
  /**
   * 获取创建弹出层组件
   */
  override getCreateComponent(): any {
    return DepartmentEditComponent;
  }
  /**
   * 获取创建弹出层数据
   */
  override getCreateData(data?: any): any {
    return {
      parent: data
    };
  }
  /**
   * 获取更新弹出框数据
   */
  override getEditData(data: any): any {
    if (!data) {
      return null;
    }
    return {
      id: data.id,
      data
    };
  }
  /**
   * 获取详情弹出框组件
   */
  override getDetailComponent(): any {
    return DepartmentDetailComponent;
  }
  /**
   * 获取弹出框宽度
   */
  override getWidth(): string {
    return '600px';
  }
}
