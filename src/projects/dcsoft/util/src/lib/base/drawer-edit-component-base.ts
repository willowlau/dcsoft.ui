import { Component, Injector, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ViewModel } from '../core/view-model';
import { EditComponentBase } from './edit-component-base';

/**
 * 抽屉层编辑组件基类
 */
@Component({
    template: ''
})
export abstract class DrawerEditComponentBase<TViewModel extends ViewModel> extends EditComponentBase<TViewModel> implements OnInit {
  /**
   * 初始化组件
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * 关闭抽屉框
   */
  close(result?: boolean): void {
    this.util.drawer.close(result);
  }

  /**
   * 提交表单
   *
   * @param form 表单
   * @param button 按钮
   */
  override submit(form?: NgForm, button?: any): void {
    this.util.form.submit({
      url: this.getSubmitUrl(),
      data: this.model,
      form,
      button,
      closeDrawer: true,
      before: data => this.submitBefore(data),
      ok: result => this.submitAfter(result)
    });
  }

  /**
   * 提交前操作
   *
   * @param data 参数
   */
  protected submitBefore(data: any): boolean {
    return true;
  }

  /**
   * 提交后操作
   *
   * @param result 结果
   */
  protected submitAfter(result: any): void {}
}
