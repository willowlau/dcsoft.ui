import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountSettingsBaseComponent } from './settings/base/base.component';
import { AccountSettingsSecurityComponent } from './settings/security/security.component';
import { AccountSettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  {
    path: 'settings',
    component: AccountSettingsComponent,
    children: [
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      { path: 'base', component: AccountSettingsBaseComponent, data: { titleI18n: 'app.account.settings.title' } },
      { path: 'security', component: AccountSettingsSecurityComponent, data: { titleI18n: 'app.account.security.title' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
