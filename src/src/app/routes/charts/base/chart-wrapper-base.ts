import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { Chart } from '@antv/g2';
import { Util } from '@dcsoft/util'

/**
 * 控件包装器
 */
@Component({
  selector: 'chart-wrapper-base',
  template: '<ng-content></ng-content>',
  styles: [``]
})
/**
 * 控件包装器
 */
export class ChartWrapperBase {
  /**
   * 公共操作
   */
  protected util: Util;
  /**
   * id
   */
  @Input() rawId: string;
  /**
   * 名称
   */
  @Input() name: string;
  /**
   * 禁用
   */
  @Input() disabled: boolean;
  /**
   * 地区代码
   */
  @Input() areaCode: string;
  /**
   * 图表实例
   */
  chart!: Chart;
  /**
   * 组件元素
   */
  @ViewChild(forwardRef(() => 'control'), { static: false }) element!: ElementRef;
  /**
   * 表单控件包装器
   */
  constructor() {
    this.util = new Util();
    this.rawId = this.util.helper.uuid();
    this.name = '';
    this.disabled = false;
    this.areaCode = '';
  }
}
