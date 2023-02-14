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
   * 提交表单
   * @param button 按钮
   * @param form 表单
   */
  override submit(button?, form?: NgForm): void {
    this.util.form.submit({
      url: this.getSubmitUrl(),
      data: this.model,
      form: form || this.form,
      button,
      closeDrawer: true,
      before: data => this.onSubmitBefore(data),
      ok: result => this.onSubmit(result)
    });
  }

  /**
   * 提交前操作
   * @param data 参数
   */
  protected onSubmitBefore(data) {
    return true;
  }

  /**
   * 提交后操作
   * @param result 结果
   */
  protected onSubmit(result) {
  }

  /**
   * 关闭弹出框
   */
  close(result?: boolean): void {
    this.util.drawer.close(result);
  }
}
