import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { UtilModule } from '@dcsoft/util';
import { SystemsRoutingModule } from './systems-routing.module';

import { ApiResourceDetailComponent } from './api-resource/api-resource-detail.component';
import { ApiResourceEditComponent } from './api-resource/api-resource-edit.component';
import { ApiResourceListComponent } from './api-resource/api-resource-list.component';
import { ApplicationDetailComponent } from './application/application-detail.component';
import { ApplicationEditComponent } from './application/application-edit.component';
import { ApplicationListComponent } from './application/application-list.component';
import { ApplicationSelectComponent } from './application/application-select.component';
import { ClaimDetailComponent } from './claim/claim-detail.component';
import { ClaimEditComponent } from './claim/claim-edit.component';
import { ClaimListComponent } from './claim/claim-list.component';
import { DepartmentDetailComponent } from './department/department-detail.component';
import { DepartmentEditComponent } from './department/department-edit.component';
import { DepartmentListComponent } from './department/department-list.component';
import { DictDataDetailComponent } from './dictionary/dictData-detail.component';
import { DictDataEditComponent } from './dictionary/dictData-edit.component';
import { DictDataListComponent } from './dictionary/dictData-list.component';
import { DictTypeDetailComponent } from './dictionary/dictType-detail.component';
import { DictTypeEditComponent } from './dictionary/dictType-edit.component';
import { DictTypeListComponent } from './dictionary/dictType-list.component';
import { IdentityResourceDetailComponent } from './identity-resource/identity-resource-detail.component';
import { IdentityResourceEditComponent } from './identity-resource/identity-resource-edit.component';
import { IdentityResourceListComponent } from './identity-resource/identity-resource-list.component';
import { ModuleDetailComponent } from './module/module-detail.component';
import { ModuleEditComponent } from './module/module-edit.component';
import { ModuleListComponent } from './module/module-list.component';
import { ModuleSelectComponent } from './module/module-select.component';
import { RoleDetailComponent } from './role/role-detail.component';
import { RoleEditComponent } from './role/role-edit.component';
import { RoleListComponent } from './role/role-list.component';
import { RolePermissionComponent } from './role/role-permission.component';
import { SysMsgListComponent } from './sysMsg/sysMsg-list.component';
import { SysParamListComponent } from './sysParam/sysParam-list.component';
import { TasksQzDetailComponent } from './tasksQz/tasksQz-detail.component';
import { TasksQzEditComponent } from './tasksQz/tasksQz-edit.component';
import { TasksQzListComponent } from './tasksQz/tasksQz-list.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import { UserListComponent } from './user/user-list.component';
import { UserSelectListComponent } from './user/user-select-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, SystemsRoutingModule, SharedModule, UtilModule],
  declarations: [
    ApiResourceListComponent,
    ApiResourceEditComponent,
    ApiResourceDetailComponent,
    ApplicationListComponent,
    ApplicationEditComponent,
    ApplicationDetailComponent,
    ApplicationSelectComponent,
    ClaimListComponent,
    ClaimEditComponent,
    ClaimDetailComponent,
    DictTypeListComponent,
    DictTypeEditComponent,
    DictTypeDetailComponent,
    DictDataListComponent,
    DictDataEditComponent,
    DictDataDetailComponent,
    IdentityResourceListComponent,
    IdentityResourceEditComponent,
    IdentityResourceDetailComponent,
    ModuleListComponent,
    ModuleEditComponent,
    ModuleDetailComponent,
    ModuleSelectComponent,
    RoleListComponent,
    RoleEditComponent,
    RoleDetailComponent,
    RolePermissionComponent,
    SysMsgListComponent,
    SysParamListComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailComponent,
    UserSelectListComponent,
    DepartmentListComponent,
    DepartmentEditComponent,
    DepartmentDetailComponent,
    TasksQzListComponent,
    TasksQzEditComponent,
    TasksQzDetailComponent
  ],
  entryComponents: [
    ApiResourceEditComponent,
    ApiResourceDetailComponent,
    ApplicationEditComponent,
    ApplicationDetailComponent,
    ClaimEditComponent,
    ClaimDetailComponent,
    DictTypeEditComponent,
    DictTypeDetailComponent,
    DictDataEditComponent,
    DictDataDetailComponent,
    IdentityResourceEditComponent,
    IdentityResourceDetailComponent,
    ModuleEditComponent,
    ModuleDetailComponent,
    ModuleSelectComponent,
    RoleEditComponent,
    RoleDetailComponent,
    RolePermissionComponent,
    SysMsgListComponent,
    SysParamListComponent,
    UserEditComponent,
    UserDetailComponent,
    UserSelectListComponent,
    DepartmentEditComponent,
    DepartmentDetailComponent,
    TasksQzEditComponent,
    TasksQzDetailComponent
  ]
})
export class SystemsModule {}
