import { Component, Injector, OnInit } from '@angular/core';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { TreeTableQueryComponentBase } from '@dcsoft/util';

import { DictDataDetailComponent } from './dictData-detail.component';
import { DictDataEditComponent } from './dictData-edit.component';
import { DictDataQuery } from './model/dictData-query';
import { DictDataViewModel } from './model/dictData-view-model';
import { DictTypeViewModel } from './model/dictType-view-model';

/**
 * 字典数据列表页
 */
@Component({
  selector: 'app-dictionary-data-list',
  templateUrl: './html/dictData-list.component.html'
})
export class DictDataListComponent extends TreeTableQueryComponentBase<DictDataViewModel, DictDataQuery> implements OnInit {
  /**
   * 父标识
   */
  parentId!: string | null;

  /**
   * 父节点
   */
  parent: any;
  /**
   * 初始化字典列表页
   *
   * @param injector 注入器
   * @param reuseTabService
   */
  constructor(injector: Injector, private reuseTabService: ReuseTabService) {
    super(injector);
    this.parentId = this.util.router.getParam('id');
  }
  /**
   * 初始化
   */
  override ngOnInit(): void {
    super.ngOnInit();
    this.loadDictionary();
  }
  /**
   * 加载字典数据
   */
  loadDictionary(): void {
    this.util.webapi.get<DictTypeViewModel>(`commons/dict/type/${this.parentId}`).handle({
      ok: resp => {
        this.reuseTabService.title = `字典数据-${resp.name}`;
        this.parent = resp;
      }
    });
  }
  /**
   * 创建查询参数
   */
  override createQuery(): DictDataQuery {
    this.queryParam = new DictDataQuery();
    this.queryParam.dictId = this.parentId;
    return this.queryParam;
  }
  /**
   * 获取创建弹出层数据
   */
  override getCreateData(data?: any): any {
    data.parentName = this.parent.name;
    data.type = this.parent.code;
    return {
      parent: data,
      data
    };
  }
  /**
   * 获取创建弹出框组件
   */
  override getCreateComponent(): any {
    return DictDataEditComponent;
  }
  /**
   * 获取编辑抽屉数据
   */
  override getEditData(data: any): any {
    data.parentName = data.parentName ? data.parentName : this.parent.name;
    data.type = data.type ? data.type : this.parent.code;
    return {
      id: data.id,
      parent: this.parent,
      data
    };
  }

  /**
   * 设置创建窗口标题
   */
  override getCreateTitle() {
    return '创建字典数据';
  }
  /**
   * 设置编辑窗口标题
   */
  override getEditTitle() {
    return '编辑字典数据';
  }
  /**
   * 设置详情窗口标题
   */
  override getDetailTitle() {
    return '字典数据详情';
  }
  /**
   * 获取更新弹出框组件
   */
  override getEditComponent(): any {
    return DictDataEditComponent;
  }
  /**
   * 获取详情弹出框组件
   */
  override getDetailComponent(): any {
    return DictDataDetailComponent;
  }
  /**
   * 获取弹出框宽度，默认值：60%
   */
  override getWidth(): string {
    return '600px';
  }
}
