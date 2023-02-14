import { Component, Injector, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TreeViewModel } from '../core/tree-view-model';
import { EditComponentBase } from './edit-component-base';

/**
 * 树形抽屉层编辑组件基类
 */
@Component({
  template: ''
})
export abstract class TreeDrawerEditComponentBase<TViewModel extends TreeViewModel> extends EditComponentBase<TViewModel> implements OnInit {
  /**
   * 父节点
   */
  @Input() parent: any;

  /**
   * 初始化组件
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
    this.initParent();
  }

  /**
   * 关闭抽屉框
   */
  close(result?: boolean): void {
    this.util.drawer.close(result);
  }
  /**
   * 初始化父节点
   */
  protected initParent(): void {
    this.setParent(this.getParent());
  }

  /**
   * 设置父节点
   *
   * @param parent 父节点
   */
  protected setParent(parent?: any): void {
    if (!parent) {
      this.parent = null;
      this.model.parentId = null;
      this.model.parentName = null;
      return;
    }
    this.parent = parent;
    this.model.parentId = parent.id;
    this.model.parentName = this.getParentName(parent);
  }

  /**
   * 获取父节点
   */
  protected getParent(): any {
    if (this.parent) {
      return this.parent;
    }
    if (this.data && this.data.parentId) {
      return { id: this.data.parentId, name: this.data.parentName };
    }
    return null;
  }

  /**
   * 获取父节点名称
   */
  protected getParentName(parent: any): any {
    return parent && parent.name;
  }

  /**
   * 加载完成后操作
   */
  protected override onLoad(result: any): void {
    this.setParent(this.getParent());
  }

  /**
   * 提交表单
   *
   * @param form 表单
   * @param button 按钮
   */
  override submit(button?: any, form?: NgForm): void {
    this.util.form.submit({
      url: this.getSubmitUrl(),
      data: this.model,
      form: form || this.form,
      button: button,
      closeDrawer: true,
      before: data => this.onSubmitBefore(data),
      ok: result => this.onSubmit(result)
    });
  }

  /**
   * 提交前操作
   * @param data 参数
   * @returns 布尔值
   */
  protected onSubmitBefore(data: any): boolean {
    return true;
  }

  /**
   * 提交后操作
   * @param result 结果
   */
  protected onSubmit(result: any): void {}

  /**
   * 打开选择框
   */
  openSelectDialog(): void {
    this.util.dialog.open({
      component: this.getSelectDialogComponent(),
      data: this.getSelectDialogData(),
      width: this.getSelectDialogWidth(),
      showMask: false,
      disableClose: false,
      onOpenBefore: () => {
        return this.onSelectBeforeOpen();
      },
      onCloseBefore: result => {
        return this.onSelectBeforeClose(result);
      },
      onClose: result => {
        this.onSelectClose(result);
      },
      onOk: instance => {
        this.onSelectOk(instance);
      }
    });
  }

  /**
   * 获取选择框组件
   */
  protected getSelectDialogComponent(): any {
    return {};
  }

  /**
   * 获取选择框数据
   */
  protected getSelectDialogData(): any {
    return { data: this.parent };
  }

  /**
   * 获取选择框宽度,默认值：60%
   */
  protected getSelectDialogWidth(): string {
    return '60%';
  }

  /**
   * 选择框打开前回调函数，返回 false 阻止打开
   */
  protected onSelectBeforeOpen(): boolean {
    return true;
  }

  /**
   * 选择框关闭前回调函数，返回 false 阻止关闭
   *
   * @param result 返回结果
   */
  protected onSelectBeforeClose(result: any): boolean {
    return true;
  }

  /**
   * 选择框关闭回调函数
   *
   * @param result 返回结果
   */
  protected onSelectClose(result: any): void {}

  /**
   * 选择框点击确定按钮时的回调函数
   *
   * @param instance 弹出框组件实例
   */
  protected onSelectOk(instance: any): void {
    if (!instance) {
      return;
    }
    if (!instance.getCheckedNode) {
      return;
    }
    this.setParent(instance.getCheckedNode());
  }
}
