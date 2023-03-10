import { Component, Injector, Input, OnInit } from '@angular/core';
import { TreeEditComponentBase } from '@dcsoft/util';

import { DictTypeViewModel } from './model/dictType-view-model';

/**
 * 字典编辑页
 */
@Component({
  selector: 'app-dictionary-edit',
  templateUrl: './html/dictType-edit.component.html'
})
export class DictTypeEditComponent extends TreeEditComponentBase<DictTypeViewModel> implements OnInit {
  /**
   * 初始化字典编辑页
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
  }
  /**
   * 创建模型
   */
  override createModel(): DictTypeViewModel {
    const result = new DictTypeViewModel();
    result.enabled = true;
    return result;
  }
  /**
   * 获取基地址
   */
  getBaseUrl(): string {
    return 'commons/dict/type';
  }
  /**
   * 提交前操作
   *
   * @param data 数据
   * @returns 结果
   */
  override onSubmitBefore(data: any): boolean {
    data.type = data.code;
    return true;
  }
}
