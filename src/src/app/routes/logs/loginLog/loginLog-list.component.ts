import { Component, Injector } from '@angular/core';
import { TableQueryComponentBase } from '@dcsoft/util';

import { LoginLogDetailComponent } from './loginLog-detail.component';
import { LoginLogQuery } from './model/loginLog-query';
import { LoginLogViewModel } from './model/loginLog-view-model';

/**
 * 登录日志列表页
 */
@Component({
  selector: 'app-loginLog-list',
  templateUrl: './html/index.component.html'
})
export class LoginLogListComponent extends TableQueryComponentBase<LoginLogViewModel, LoginLogQuery> {
  /**
   * 登录时间
   */
  loginTime = [];
  /**
   * 初始化登录日志列表页
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 创建查询参数
   */
  protected override createQuery(): LoginLogQuery {
    const result = new LoginLogQuery();
    return result;
  }
  /**
   * 查询
   * @param button 按钮
   */
  override query(button: any): void {
    if (this.loginTime.length > 0) {
      this.queryParam.beginCreationTime = this.util.helper.formatDate(this.loginTime[0], 'YYYY-MM-DD');
      this.queryParam.endCreationTime = this.util.helper.formatDate(this.loginTime[1], 'YYYY-MM-DD');
    } else {
      this.queryParam.beginCreationTime = null;
      this.queryParam.endCreationTime = null;
    }
    super.query(button);
  }

  /**
   * 获取创建弹出框组件
   */
  override getCreateDialogComponent(): any {
    return LoginLogDetailComponent;
  }

  /**
   * 获取详情弹出框组件
   */
  override getDetailDialogComponent(): any {
    return LoginLogDetailComponent;
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailDialogTitle() {
    return '日志详情';
  }
  /**
   * 获取创建弹出层宽度
   */
  override getDetailDialogWidth(): string {
    return '900px';
  }
}
