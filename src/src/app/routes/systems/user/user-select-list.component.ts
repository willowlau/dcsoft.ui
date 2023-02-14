import { Component, Injector, OnInit } from '@angular/core';
import { TableQueryComponentBase } from '@dcsoft/util';

import { UserQuery } from './model/user-query';
import { UserViewModel } from './model/user-view-model';
import { UserDetailComponent } from './user-detail.component';

/**
 * 用户列表页
 */
@Component({
  selector: 'app-user-select-list',
  templateUrl: './html/select-list.component.html'
})
export class UserSelectListComponent extends TableQueryComponentBase<UserViewModel, UserQuery> implements OnInit {
  /**
   * 初始化用户列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 初始化
   */
  ngOnInit(): void {
    this.queryParam.userType = 1;
  }
  /**
   * 获取详情弹出框组件
   */
  override getDetailDialogComponent(): any {
    return UserDetailComponent;
  }
  /**
   * 获取弹出层宽度
   */
  override getDialogWidth(): string {
    return '600px';
  }
}
