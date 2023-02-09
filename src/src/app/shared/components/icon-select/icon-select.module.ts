import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UtilModule } from '@dcsoft/util';

import { IconSelectComponent } from './icon-select.component';

const COMPONENTS_ENTRY = [IconSelectComponent];

/**
 * 公共模块
 */
@NgModule({
  declarations: [...COMPONENTS_ENTRY],
  imports: [CommonModule, FormsModule, NzIconModule, UtilModule],
  entryComponents: [...COMPONENTS_ENTRY]
})
export class IconSelectModule {}
