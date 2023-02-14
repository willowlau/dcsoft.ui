import { Component, Injector } from '@angular/core';
import { DrawerEditComponentBase, SelectOption } from '@dcsoft/util';

import { ApplicationType } from './model/application-type';
import { ApplicationViewModel } from './model/application-view-model';

/**
 * 应用程序编辑页
 */
@Component({
  selector: 'app-application-edit',
  templateUrl: './html/edit.component.html'
})
export class ApplicationEditComponent extends DrawerEditComponentBase<ApplicationViewModel> {
  /**
   * 应用程序类型数据源
   */
  applicationTypes: SelectOption[];

  /**
   * 初始化应用程序编辑页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
    this.applicationTypes = new Array<SelectOption>();
    this.applicationTypes.push(
      { text: '常规应用', value: 1 },
      { text: 'Api', value: 2 },
      { text: '客户端', value: 3 }
    );
  }

  /**
   * 创建模型
   */
  override createModel(): ApplicationViewModel {
    const result = new ApplicationViewModel();
    result.enabled = true;
    result.registerEnabled = true;
    result.applicationType = ApplicationType.General;
    return result;
  }

  /**
   * 获取基地址
   */
  getBaseUrl(): string {
    return 'systems/application';
  }

  /**
   * 应用类型更改事件处理
   *
   * @param type 应用类型
   */
  changeApplicationType(type: any): void {
    if (type === ApplicationType.Client) {
      return;
    }
  }

  /**
   * 加载后操作
   */
  override onLoad(result: ApplicationViewModel): void {
    if (!result) {
      return;
    }
    this.changeApplicationType(result.applicationType);
  }
}
