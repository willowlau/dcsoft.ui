import { Component, Injector, OnInit } from '@angular/core';
import { HttpMethod, TableQueryComponentBase } from '@dcsoft/util';

import { SiteSettingViewModel } from './model/siteSetting-view-model';
import { SysParamQuery } from './model/sysParam-query';
import { SysParamViewModel } from './model/sysParam-view-model';

/**
 * 系统参数列表页
 */
@Component({
  selector: 'app-sysParam-list',
  templateUrl: './html/index.component.html'
})
export class SysParamListComponent extends TableQueryComponentBase<SysParamViewModel, SysParamQuery> implements OnInit {
  /**
   * 参数对象
   */
  param: SiteSettingViewModel;
  /**
   * 初始化系统参数列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
    this.param = new SiteSettingViewModel();
  }
  /**
   * 创建查询参数
   */
  override createQuery(): SysParamQuery {
    const result = new SysParamQuery();
    return result;
  }
  /**
   * 页面初始化
   */
  ngOnInit(): void {
    this.loadParam();
  }
  /**
   * 加载系统参数
   */
  loadParam(): void {
    this.util.webapi.get<any>('systems/param').handle({
      ok: resp => {
        this.param = resp;
      }
    });
  }
  /**
   * 保存参数
   *
   * @param button 按钮
   * @param name 参数名称
   * @param value 参数值
   */
  saveParam(button: any, name: any, value: any): void {
    this.util.form.submit({
      url: 'systems/param',
      data: {
        Name: name,
        Value: value
      },
      button,
      httpMethod: HttpMethod.Put,
      ok: () => {}
    });
  }
}
