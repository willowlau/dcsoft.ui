import { Component, Injector, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TreeEditComponentBase } from '@dcsoft/util';

import { DictDataViewModel } from './model/dictData-view-model';

/**
 * 字典数据编辑页
 */
@Component({
  selector: 'app-dictionary-data-edit',
  templateUrl: './html/dictData-edit.component.html'
})
export class DictDataEditComponent extends TreeEditComponentBase<DictDataViewModel> implements OnInit {
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
    // console.log(this.model);
    // console.log(this.parent);
    this.model.type = this.parent.type;
  }
  /**
   * 创建模型
   */
  override createModel(): DictDataViewModel {
    const result = new DictDataViewModel();
    result.enabled = true;
    return result;
  }
  /**
   * 获取基地址
   */
  getBaseUrl(): string {
    return 'commons/dict/data';
  }
  /**
   * 提交表单
   *
   * @param form 表单
   * @param button 按钮
   */
  override submit(form?: NgForm, button?: any): void {
    if (this.model.code.indexOf(',') && this.model.name.indexOf(',')) {
      const codes = this.model.code.split(',');
      const names = this.model.name.split(',');
      codes.forEach((code: any, idx: number) => {
        this.model.code = code;
        this.model.name = names[idx];
        super.submit(form, button);
      });
    } else {
      super.submit(form, button);
    }
  }
}
