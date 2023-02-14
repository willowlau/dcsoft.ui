import { Component, Injector } from '@angular/core';
import { TableQueryComponentBase } from '@dcsoft/util';

import { TasksQzQuery } from './model/tasksQz-query';
import { TasksQzViewModel } from './model/tasksQz-view-model';
import { TasksQzDetailComponent } from './tasksQz-detail.component';
import { TasksQzEditComponent } from './tasksQz-edit.component';

/**
 * 任务计划列表页
 */
@Component({
  selector: 'app-tasksQz-list',
  templateUrl: './html/index.component.html'
})
export class TasksQzListComponent extends TableQueryComponentBase<TasksQzViewModel, TasksQzQuery> {
  /**
   * 初始化任务计划列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建查询参数
   */
  override createQuery(): TasksQzQuery {
    this.queryParam = new TasksQzQuery();
    return this.queryParam;
  }
  /**
   * 设置创建窗口标题
   */
  override getCreateDrawerTitle() {
    return '创建任务';
  }
  /**
   * 设置编辑窗口标题
   */
  override getEditDrawerTitle() {
    return '编辑任务';
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailDrawerTitle() {
    return '任务详情';
  }
  /**
   * 获取创建抽屉框组件
   */
  override getCreateDrawerComponent(): any {
    return TasksQzEditComponent;
  }
  /**
   * 获取更新抽屉框组件
   */
  override getEditDrawerComponent(): any {
    return TasksQzEditComponent;
  }
  /**
   * 获取详情抽屉框组伯
   */
  override getDetailDrawerComponent(): any {
    return TasksQzDetailComponent;
  }
  /**
   * 获取抽屉框宽度
   */
  override getDrawerWidth(): string {
    return '500px';
  }
  /**
   * 启动任务
   *
   * @param row 数据
   */
  start(row: any): any {
    this.util.webapi.get<any>(`commons/tasksQz/start/${row.id}`).handle({
      ok: resp => {
        this.util.message.success('启动任务成功');
        row.isStart = true;
      }
    });
  }
  /**
   * 停止任务
   *
   * @param row 数据
   */
  stop(row: any): any {
    this.util.webapi.get<any>(`commons/tasksQz/stop/${row.id}`).handle({
      ok: resp => {
        this.util.message.success('停止任务成功');
        row.isStart = false;
      }
    });
  }
  /**
   * 重启任务
   *
   * @param row 数据
   */
  restart(row: any): any {
    this.util.webapi.get<any>(`commons/tasksQz/reset/${row.id}`).handle({
      ok: resp => {
        this.util.message.success('重启任务成功');
        row.isStart = true;
      }
    });
  }
}
