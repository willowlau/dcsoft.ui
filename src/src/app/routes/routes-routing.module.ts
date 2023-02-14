import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// layout
import { LayoutProComponent } from '@brand';
import { JWTGuard } from '@delon/auth';
import { environment } from '@env/environment';

// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutProComponent,
    canActivateChild: [JWTGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { title: '首页', titleI18n: 'app.home', reuseClosable: false } },
      { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘', titleI18n: 'app.dashboard.title' } },
      { path: 'logs', loadChildren: () => import('./logs/logs.module').then(m => m.LogsModule) },
      { path: 'systems', loadChildren: () => import('./systems/systems.module').then(m => m.SystemsModule) },
      { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }
    ]
  },
  // passport
  { path: '', loadChildren: () => import('./passport/passport.module').then(m => m.PassportModule), data: { title: '认证'  }},
  { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
  // 单页不包裹Layout
  { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class RouteRoutingModule {}
