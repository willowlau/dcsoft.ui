import { Component, Injector, Input, OnInit } from '@angular/core';
import { TreeTableQueryComponentBase } from '@dcsoft/util';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';

import { ApplicationViewModel } from '../application/model/application-view-model';
import { ModuleQuery } from '../module/model/module-query';
import { ModuleViewModel } from '../module/model/module-view-model';
import { PermissionViewModel } from './model/permission-view-model';
import { RoleViewModel } from './model/role-view-model';

/**
 * 权限设置
 */
@Component({
  selector: 'app-role-permission',
  templateUrl: './html/permission.component.html'
})
export class RolePermissionComponent extends TreeTableQueryComponentBase<ModuleViewModel, ModuleQuery> implements OnInit {
  /**
   * 侧边栏宽度
   */
  siderWidth = 200;
  id = -1;
  /**
   * 角色参数
   */
  @Input() role: RoleViewModel | undefined;
  /**
   * 权限参数
   */
  model: PermissionViewModel;
  /**
   * 初始化权限设置
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
    this.model = new PermissionViewModel();
  }
  /**
   * 初始化
   */
  override ngOnInit(): void {
    if (!this.role) {
      return;
    }
    this.model.roleId = this.role.id;
    this.model.roleName = this.role.name;
    this.queryParam.roleId = this.role.id;
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
   * 创建查询参数
   */
  override createQuery(): ModuleQuery {
    const result = new ModuleQuery();
    if (this.model) {
      result.applicationId = this.model.applicationId;
      result.roleId = this.model.roleId;
    }
    return result;
  }
  /**
   * 选择应用程序
   *
   * @param application 应用程序
   */
  selectApplication(application: ApplicationViewModel): void {
    this.model.applicationId = application.id;
    this.model.applicationName = application.name;
    this.queryParam.applicationId = application.id;
    this.util.helper.clear(this.checkedIds);
    this.query(null, () => this.loadPermissions());
  }
  /**
   * 加载权限
   */
  private loadPermissions(): void {
    this.util.webapi
      .get<string[]>(`/systems/permission/resourceIds`)
      .param(this.queryParam)
      .handle({
        ok: result => {
          this.checkIds(result);
        }
      });
  }
  /**
   * 菜单点击选择
   *
   * @param tableWrapper table控件
   */
  moduleChecked(tableWrapper: any, root: any, $event: any): void {
    tableWrapper.toggle(root);
    root.operators.forEach((item: any) => {
      item.checked = $event;
    });
  }
  /**
   * 刷新完成后操作
   */
  override onRefresh = () => {
    this.loadPermissions();
  };
  /**
   * 选择后的操作标识列表
   */
  getCheckedOperators(): any {
    const result: any[] = [];
    const data = this.table.dataSource;
    data.forEach(item => {
      item.operators.forEach((oper: any) => {
        if (oper.checked) {
          result.push(oper.id);
        }
      });
    });
    return result;
  }
  /**
   * 操作值改变时
   *
   * @param $event 操作值
   * @param oper 当前操作
   */
  operCheckedChange($event: any, oper: any): void {
    oper.checked = $event;
  }
  /**
   * 保存
   */
  save(): void {
    const operIds = this.getCheckedOperators();
    this.model.resourceIds = this.getCheckedIds();
    if (this.model.resourceIds) {
      this.model.resourceIds += `,${operIds.join(',')}`;
    } else {
      this.model.resourceIds = operIds.join(',');
    }
    this.util.form.submit({
      url: `/systems/permission/save`,
      data: this.model,
      confirm: `确定保存吗?`,
      closeDialog: true
    });
  }
}
