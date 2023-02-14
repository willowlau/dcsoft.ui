import { Component, Injector } from '@angular/core';
import { TableQueryComponentBase } from '@dcsoft/util';

import { ApplicationDetailComponent } from './application-detail.component';
import { ApplicationEditComponent } from './application-edit.component';
import { ApplicationQuery } from './model/application-query';
import { ApplicationViewModel } from './model/application-view-model';

/**
 * 应用程序列表页
 */
@Component({
  selector: 'app-application-list',
  templateUrl: './html/index.component.html'
})
export class ApplicationListComponent extends TableQueryComponentBase<ApplicationViewModel, ApplicationQuery> {
  /**
   * 初始化应用程序列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建查询参数
   */
  override createQuery(): ApplicationQuery {
    const result = new ApplicationQuery();
    return result;
  }
  /**
   * 设置创建窗口标题
   */
  override getCreateDrawerTitle() {
    return '创建应用程序';
  }
  /**
   * 设置编辑窗口标题
   */
  override getEditDrawerTitle() {
    return '编辑应用程序';
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailDrawerTitle() {
    return '应用程序详情';
  }
  /**
   * 获取创建弹出框组件
   */
  override getCreateDrawerComponent(): any {
    return ApplicationEditComponent;
  }
  /**
   * 获取详情弹出框组件
   */
  override getDetailDrawerComponent(): any {
    return ApplicationDetailComponent;
  }
  /**
   * 获取弹出框宽度
   */
  override getDrawerWidth(): string {
    return '700px';
  }
}
