import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { UtilModule } from '@dcsoft/util';

import { AccountRoutingModule } from './account-routing.module';
import { AccountSettingsBaseComponent } from './settings/base/base.component';
import { AccountSettingsSecurityComponent } from './settings/security/security.component';
import { AccountSettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [CommonModule, FormsModule, AccountRoutingModule, SharedModule, UtilModule],
  declarations: [AccountSettingsComponent, AccountSettingsBaseComponent, AccountSettingsSecurityComponent],
  entryComponents: []
})
export class AccountModule {}
