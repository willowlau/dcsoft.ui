/* eslint-disable import/order */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { UtilModule } from '@dcsoft/util';

import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { SHARED_PIPES_MODULES } from './shared-pipes.module';

// #region third libs
import { DragDropModule } from '@angular/cdk/drag-drop';
const THIRDMODULES = [DragDropModule, UtilModule];
// #endregion

// #region your componets & directives
import { PRO_SHARED_MODULES } from '../layout/pro';
import { AddressModule } from './components/address';
import { DelayModule } from './components/delay';
import { EditorModule } from './components/editor';
import { FileManagerModule } from './components/file-manager';
import { MasonryModule } from './components/masonry';
import { MouseFocusModule } from './components/mouse-focus';
import { ScrollbarModule } from './components/scrollbar';
import { StatusLabelModule } from './components/status-label';
import { IconSelectModule } from './components/icon-select';
import { NgxAmapModule } from 'ngx-amap';
import { AngularSplitModule } from 'angular-split';

const MODULES = [
  AddressModule,
  DelayModule,
  EditorModule,
  FileManagerModule,
  MasonryModule,
  MouseFocusModule,
  ScrollbarModule,
  StatusLabelModule,
  IconSelectModule,
  AngularSplitModule,
  ...PRO_SHARED_MODULES
];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonACLModule,
    DelonFormModule,
    NgxAmapModule.forRoot({
      apiKey: 'e69fd06bb5aebe03ee3990b7c6138dde', //webapi 1de0380a8ffe2107149cf48db3d93107
      apiVersion: '1.4.15'
    }),
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...MODULES,
    // third libs
    ...THIRDMODULES
  ],
  declarations: [...SHARED_PIPES_MODULES],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonACLModule,
    DelonFormModule,
    // i18n
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...SHARED_PIPES_MODULES,
    ...MODULES,
    // third libs
    ...THIRDMODULES
  ]
})
export class SharedModule { }
