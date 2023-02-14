import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiResourceListComponent } from './api-resource/api-resource-list.component';
import { ApplicationListComponent } from './application/application-list.component';
import { ClaimListComponent } from './claim/claim-list.component';
import { DepartmentListComponent } from './department/department-list.component';
import { DictDataListComponent } from './dictionary/dictData-list.component';
import { DictTypeListComponent } from './dictionary/dictType-list.component';
import { IdentityResourceListComponent } from './identity-resource/identity-resource-list.component';
import { ModuleListComponent } from './module/module-list.component';
import { RoleListComponent } from './role/role-list.component';
import { SysMsgListComponent } from './sysMsg/sysMsg-list.component';
import { SysParamListComponent } from './sysParam/sysParam-list.component';
import { TasksQzListComponent } from './tasksQz/tasksQz-list.component';
import { UserListComponent } from './user/user-list.component';

export const routes: Routes = [
  { path: 'api-resource', component: ApiResourceListComponent, data: { title: 'Api资源', titleI18n: 'app.systems.api-resource.title' } },
  { path: 'application', component: ApplicationListComponent, data: { title: '应用程序', titleI18n: 'app.systems.application.title' } },
  { path: 'claim', component: ClaimListComponent, data: { title: '声明', titleI18n: 'app.systems.claim.title' } },
  { path: 'dictionary', component: DictTypeListComponent, data: { title: '字典类型', titleI18n: 'app.systems.dict-type.title' } },
  { path: 'dictionary/data/:id', component: DictDataListComponent, data: { title: '字典数据', titleI18n: 'app.systems.dict-data.title' } },
  { path: 'identity-resource', component: IdentityResourceListComponent, data: { title: '身份认证', titleI18n: 'app.systems.identity-resource.title' } },
  { path: 'module', component: ModuleListComponent, data: { title: '模块', titleI18n: 'app.systems.module.title' } },
  { path: 'role', component: RoleListComponent, data: { title: '角色', titleI18n: 'app.systems.role.title' } },
  { path: 'sys-msg', component: SysMsgListComponent, data: { title: '系统消息', titleI18n: 'app.systems.sys-msg.title' } },
  { path: 'sys-param', component: SysParamListComponent, data: { title: '系统参数', titleI18n: 'app.systems.sys-param.title' } },
  { path: 'user', component: UserListComponent, data: { title: '用户', titleI18n: 'app.systems.user.title' } },
  { path: 'department', component: DepartmentListComponent, data: { title: '部门', titleI18n: 'app.systems.department.title' } },
  { path: 'tasks-qz', component: TasksQzListComponent, data: { title: '任务管理', titleI18n: 'app.systems.tasks-qz.title' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemsRoutingModule {}
