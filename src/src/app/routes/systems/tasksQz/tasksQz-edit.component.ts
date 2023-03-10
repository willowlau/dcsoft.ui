import { Component, Injector, OnInit } from '@angular/core';
import { EditComponentBase, SelectItem } from '@dcsoft/util';

import { TasksQzViewModel } from './model/tasksQz-view-model';

/**
 * 任务计划编辑页
 */
@Component({
  selector: 'app-tasksQz-edit',
  templateUrl: './html/edit.component.html'
})
export class TasksQzEditComponent extends EditComponentBase<TasksQzViewModel> implements OnInit {
  /**
   * 运行时间
   */
  runTime!: string[];
  /**
   * 触发类型数据源
   */
  triggerTypes!: SelectItem[];
  /**
   * 初始化任务计划编辑页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 初始化
   */
  override ngOnInit(): void {
    super.ngOnInit();
    this.runTime = new Array();
    this.triggerTypes = new Array<SelectItem>();
    this.triggerTypes.push({ text: 'simple', value: 0, sortId: 1 }, { text: 'cron', value: 1, sortId: 2 });
  }
  /**
   * 获取基地址
   */
  protected getBaseUrl(): string {
    return 'commons/tasks-qz';
  }
  /**
   * 提交前操作
   *
   * @param data 数据
   */
  override onSubmitBefore(data: any): boolean {
    data.beginTime = this.runTime!.length > 0 ? this.util.helper.formatDate(this.runTime![0]) : null;
    data.endTime = this.runTime!.length > 0 ? this.util.helper.formatDate(this.runTime![1]) : null;
    return true;
  }
}
