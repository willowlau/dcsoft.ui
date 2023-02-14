import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { DrawerEditComponentBase } from '@dcsoft/util';

import { CreateUserViewModel } from './model/create-user-view-model';

/**
 * 用户创建页
 */
@Component({
  selector: 'app-user-edit',
  templateUrl: './html/edit.component.html'
})
export class UserEditComponent extends DrawerEditComponentBase<CreateUserViewModel> implements OnInit {
  /**
   * 确认密码
   */
  confirmPassword: string | undefined;
  /**
   * 用户身份
   */
  identity: string | undefined;
  /**
   * 初始化用户创建页
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
    this.model.userType = 1;
  }

  /**
   * 加载后执行
   */
  override onLoad(result: any): void {
    if (!this.isNew) {
      result.password = '********';
      this.confirmPassword = '********';
    }
  }

  /**
   * 获取基地址
   */
  protected getBaseUrl(): string {
    return 'systems/user';
  }

  /**
   * 提交前操作
   *
   * @param data 数据
   */
  protected override onSubmitBefore(data: any): boolean {
    if (data.password !== this.confirmPassword) {
      this.util.message.warn('两次密码输入不一致');
      return false;
    }
    return true;
  }
}
