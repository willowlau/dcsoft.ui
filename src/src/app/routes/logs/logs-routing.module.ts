import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginLogListComponent } from './loginLog/loginLog-list.component';
import { OperationLogListComponent } from './operationLog/operationLog-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginLogListComponent, data: { title: '登录日志', titleI18n: 'app.logs.login-log.title' }, },
  { path: 'operate', component: OperationLogListComponent, data: { title: '操作日志', titleI18n: 'app.logs.operation-log.title' }, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogsRoutingModule { }
