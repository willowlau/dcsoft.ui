import { Component, Injector, Input, OnInit } from '@angular/core';
import { IconSelectComponent } from '@shared';
import { TreeDrawerEditComponentBase } from '@dcsoft/util';

import { ModuleViewModel } from './model/module-view-model';

/**
 * 模块编辑页
 */
@Component({
  selector: 'app-module-edit',
  templateUrl: './html/edit.component.html'
})
export class ModuleEditComponent extends TreeDrawerEditComponentBase<ModuleViewModel> implements OnInit {
  /**
   * 应用程序标识
   */
  @Input() applicationId: any;
  /**
   * 应用程序名称
   */
  @Input() applicationName: any;
  /**
   * 初始化模块编辑页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 初始化
   */
  override ngOnInit(): void {
    super.ngOnInit();
    this.model.applicationId = this.applicationId;
    this.model.type = '1';
  }
  /**
   * 创建模型
   */
  override createModel(): ModuleViewModel {
    const result = new ModuleViewModel();
    result.enabled = true;
    return result;
  }
  /**
   * 获取基地址
   */
  getBaseUrl(): string {
    return 'systems/module';
  }
  /**
   * 加载前操作
   */
  override onLoad(data: any): any {
    data.type = data.type.toString();
    return data;
  }
  /**
   * 选择图标
   */
  selectIcon(event: any): void {
    this.util.dialog.open({
      component: IconSelectComponent,
      showFooter: false,
      showMask: false,
      disableClose: false,
      width: '800px',
      onClose: result => {
        if (result) {
          this.model.icon = `anticon anticon-${result.value}`;
        }
      }
    });
  }
}
