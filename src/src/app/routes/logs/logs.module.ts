import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { UtilModule } from '@dcsoft/util';

import { LoginLogDetailComponent } from './loginLog/loginLog-detail.component';
import { LoginLogListComponent } from './loginLog/loginLog-list.component';
import { LogsRoutingModule } from './logs-routing.module';
import { OperationLogDetailComponent } from './operationLog/operationLog-detail.component';
import { OperationLogListComponent } from './operationLog/operationLog-list.component';

/**
 * 系统模块
 */
@NgModule({
  declarations: [LoginLogDetailComponent, LoginLogListComponent, OperationLogDetailComponent, OperationLogListComponent],
  imports: [CommonModule, FormsModule, SharedModule, UtilModule, LogsRoutingModule],
  entryComponents: [LoginLogDetailComponent, OperationLogDetailComponent]
})
export class LogsModule { }
