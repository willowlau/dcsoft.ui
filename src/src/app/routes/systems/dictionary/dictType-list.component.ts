import { Component, Injector } from '@angular/core';
import { TableQueryComponentBase } from '@dcsoft/util';

import { DictTypeDetailComponent } from './dictType-detail.component';
import { DictTypeEditComponent } from './dictType-edit.component';
import { DictTypeQuery } from './model/dictType-query';
import { DictTypeViewModel } from './model/dictType-view-model';

/**
 * 字典列表页
 */
@Component({
  selector: 'app-dictionary-list',
  templateUrl: './html/dictType-list.component.html'
})
export class DictTypeListComponent extends TableQueryComponentBase<DictTypeViewModel, DictTypeQuery> {
  /**
   * 初始化字典列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * 创建查询参数
   */
  override createQuery(): DictTypeQuery {
    const result = new DictTypeQuery();
    return result;
  }

  /**
   * 获取创建弹出层数据
   */
  override getCreateData(data?: any): any {
    return {
      parent: data
    };
  }
  /**
   * 设置创建窗口标题
   */
  override getCreateTitle() {
    return '创建字典类型';
  }
  /**
   * 设置编辑窗口标题
   */
  override getEditTitle() {
    return '编辑字典类型';
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailTitle() {
    return '字典类型详情';
  }
  /**
   * 获取创建弹出框组件
   */
  override getCreateComponent(): any {
    return DictTypeEditComponent;
  }
  /**
   * 获取更新弹出框组件
   */
  override getEditComponent(): any {
    return DictTypeEditComponent;
  }

  /**
   * 获取详情弹出框组件
   */
  override getDetailComponent(): any {
    return DictTypeDetailComponent;
  }

  /**
   * 获取弹出框宽度，默认值：60%
   */
  override getWidth(): string {
    return '600px';
  }

  /**
   * 数据管理
   */
  openDataDialog(row: DictTypeViewModel): void {
    this.util.router.navigateByUrl(`/systems/dictionary/data/${row.id}`);
  }
}
