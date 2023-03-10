import { Component, Injector } from '@angular/core';
import { EditComponentBase } from '@dcsoft/util';

import { TasksQzViewModel } from './model/tasksQz-view-model';

/**
 * 任务详情页
 */
@Component({
  selector: 'app-tasksQz-detail',
  templateUrl: './html/detail.component.html'
})
export class TasksQzDetailComponent extends EditComponentBase<TasksQzViewModel> {
  /**
   * 初始化任务详情页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 获取基地址
   */
  protected getBaseUrl(): string {
    return 'commons/tasks-qz';
  }
}
