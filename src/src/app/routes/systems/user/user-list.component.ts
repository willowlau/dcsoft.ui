import { Component, Injector, OnInit } from '@angular/core';
import { HttpMethod, TableQueryComponentBase } from '@dcsoft/util';

import { UserQuery } from './model/user-query';
import { UserViewModel } from './model/user-view-model';
import { UserDetailComponent } from './user-detail.component';
import { UserEditComponent } from './user-edit.component';

/**
 * 用户列表页
 */
@Component({
  selector: 'app-user-list',
  templateUrl: './html/index.component.html'
})
export class UserListComponent extends TableQueryComponentBase<UserViewModel, UserQuery> implements OnInit {
  /**
   * 初始化用户列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建查询参数
   */
  override createQuery(): UserQuery {
    const result = new UserQuery();
    return result;
  }
  /**
   * 初始化
   */
  ngOnInit(): void {
    this.queryParam.userType = 1;
  }
  /**
   * 设置创建窗口标题
   */
  override getCreateDrawerTitle() {
    return '创建用户';
  }
  /**
   * 设置编辑窗口标题
   */
  override getEditDrawerTitle() {
    return '编辑用户';
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailDrawerTitle() {
    return '用户详情';
  }
  /**
   * 获取创建弹出框组件
   */
  override getCreateDrawerComponent(): any {
    return UserEditComponent;
  }
  /**
   * 获取更新弹出框组件
   */
  override getEditDrawerComponent(): any {
    return UserEditComponent;
  }
  /**
   * 获取详情弹出框组件
   */
  override getDetailDrawerComponent(): any {
    return UserDetailComponent;
  }
  /**
   * 获取弹出层宽度
   */
  override getDrawerWidth(): string {
    return '600px';
  }
  /**
   * 启用用户
   *
   * @param row 数据行
   */
  enable(row: any): any {
    const userId = row.id;
    if (!userId) {
      this.util.message.warn('请选择待启用的用户');
      return;
    }

    this.util.form.submit({
      url: `systems/user/enable/${userId}`,
      data: {},
      httpMethod: HttpMethod.Put,
      ok: () => {
        this.query();
      }
    });
  }
  /**
   * 锁定用户
   *
   * @param row 数据行
   */
  lock(row: any): any {
    const userId = row.id;
    if (!userId) {
      this.util.message.warn('请选择待锁定的用户');
      return;
    }

    this.util.form.submit({
      url: `systems/user/disable/${userId}`,
      httpMethod: HttpMethod.Put,
      data: {},
      ok: () => {
        this.query();
      }
    });
  }
  /**
   * 重置密码
   *
   * @param row 数据行
   */
  resetPwd(row: any): any {
    const userId = row.id;
    if (!userId) {
      this.util.message.warn('请选要重置密码的用户');
      return;
    }
    const url = `systems/user/pwd/${userId}`;
    this.util.form.submit({
      url,
      httpMethod: HttpMethod.Put,
      data: {},

      ok: () => {
        this.query();
      }
    });
  }

  /**
   * 导出Excel
   */
  export(): string {
    const userName = this.queryParam.userName ? this.queryParam.userName : '';
    const phoneNumber = this.queryParam.phoneNumber ? this.queryParam.phoneNumber : '';
    const email = this.queryParam.email ? this.queryParam.email : '';
    const url = `systems/user/export?userType=1&userName=${userName}&phoneNumber=${phoneNumber}&email=${email}`;
    return url;
  }
}
