import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { UtilModule } from '@dcsoft/util';

import { DeviceAccessLineChartComponent } from './device-access-line.component';
import { DeviceAccessChartComponent } from './device-access.component';
import { DeviceRentChartComponent } from './device-rent.component';
import { OnlineStatusAnalysisChartComponent } from './online-status.component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, UtilModule],
  declarations: [DeviceAccessChartComponent, DeviceRentChartComponent, OnlineStatusAnalysisChartComponent, DeviceAccessLineChartComponent],
  entryComponents: [],
  exports: [DeviceAccessChartComponent, DeviceRentChartComponent, OnlineStatusAnalysisChartComponent, DeviceAccessLineChartComponent]
})
export class ChartsModule {}
