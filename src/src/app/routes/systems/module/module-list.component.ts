import { Component, Injector } from '@angular/core';
import { TreeTableQueryComponentBase } from '@dcsoft/util';
import { NzResizeEvent } from 'ng-zorro-antd/resizable/public-api';

import { ApplicationViewModel } from '../application/model/application-view-model';
import { ModuleQuery } from './model/module-query';
import { ModuleViewModel } from './model/module-view-model';
import { ModuleDetailComponent } from './module-detail.component';
import { ModuleEditComponent } from './module-edit.component';

/**
 * 模块列表页
 */
@Component({
  selector: 'app-module-list',
  templateUrl: './html/index.component.html',
  styles: [``]
})
export class ModuleListComponent extends TreeTableQueryComponentBase<ModuleViewModel, ModuleQuery> {
  /**
   * 侧边栏宽度
   */
  siderWidth = 200;
  id = -1;
  /**
   * 当前应用程序
   */
  selectedApplication: ApplicationViewModel;
  /**
   * 初始化模块列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
    this.selectedApplication = new ApplicationViewModel();
  }
  /**
   * 创建查询参数
   */
  override createQuery(): ModuleQuery {
    const result = new ModuleQuery();
    if (this.selectedApplication) {
      result.applicationId = this.selectedApplication.id;
    }
    return result;
  }
  /**
   * 侧边栏调整事件
   *
   * @param param0 宽度
   */
  onSideResize({ width }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.siderWidth = width ? width : 200;
    });
  }
  /**
   * 选择应用程序
   *
   * @param application 应用程序
   */
  selectApplication(application: ApplicationViewModel): void {
    this.selectedApplication = application;
    this.queryParam.applicationId = application.id;
    this.query();
  }
  /**
   * 设置创建窗口标题
   */
  override getCreateTitle() {
    return '创建模块';
  }
  /**
   * 设置编辑窗口标题
   */
  override getEditTitle() {
    return '编辑模块';
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailTitle() {
    return '模块模块';
  }
  /**
   * 获取创建弹出层组件
   */
  override getCreateComponent(): any {
    return ModuleEditComponent;
  }
  /**
   * 获取创建弹出层数据
   */
  protected override getCreateData(data?: any): any {
    return {
      parent: data,
      applicationId: this.selectedApplication.id,
      applicationName: this.selectedApplication.name
    };
  }
  /**
   * 创建弹出框打开前回调函数
   */
  override onCreateOpenBefore(): any {
    if (this.selectedApplication.id) {
      return true;
    }
    this.util.message.warn('请选择应用程序');
    return false;
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
      data,
      applicationId: this.selectedApplication.id,
      applicationName: this.selectedApplication.name
    };
  }
  /**
   * 获取详情弹出框组件
   */
  override getDetailComponent(): any {
    return ModuleDetailComponent;
  }
  /**
   * 获取弹出框宽度
   */
  override getWidth(): string {
    return '600px';
  }
}
