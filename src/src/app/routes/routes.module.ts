import { NgModule, Type } from '@angular/core';

import { SharedModule } from '@shared';
import { ChartsModule } from './charts/charts.module';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';;
import { HomeComponent } from './home/home.component';
import { RouteRoutingModule } from './routes-routing.module';

const COMPONENTS: Type<void>[] = [DashboardComponent, HomeComponent];
const COMPONENTS_NOROUNT: Type<void>[] = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule, ChartsModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule {}
