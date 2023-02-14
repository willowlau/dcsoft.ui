import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Chart } from '@antv/g2';
import { Line } from '@antv/g2plot';

import { ChartWrapperBase } from './base/chart-wrapper-base';

/**
 * 设备接入图表
 */
@Component({
  selector: 'app-device-access-line-chart',
  template: `
    <nz-card nzTitle="设备接入" [nzExtra]="action">
      <nz-spin [nzSpinning]="loading">
        <div class="chart" id="device-access-line-container"></div>
      </nz-spin>
      <ng-template #action>
        <a><i nz-tooltip (click)="loadUrl()" nzTooltipTitle="刷新" nz-icon nzType="sync"></i></a>
      </ng-template>
    </nz-card>
  `,
  styles: [
    `
      .chart {
        height: 500px;
      }
    `
  ]
})
export class DeviceAccessLineChartComponent extends ChartWrapperBase implements AfterContentInit {
  /**
   * 加载状态
   */
  @Input() loading: boolean;
  /**
   * 数据源
   */
  private data: any;
  /**
   * 请求地址
   */
  @Input() url!: string;
  /**
   * 查询参数
   */
  @Input() queryParam!: any;
  /**
   * 初始化时是否自动加载数据，默认为true,设置成false则手工加载
   */
  @Input() autoLoad: boolean;
  /**
   * 宽度
   */
  @Input() width?: string;
  /**
   * 图表对象
   */
  line!: Line;
  /**
   * 初始化下拉列表包装器
   */
  constructor() {
    super();
    this.autoLoad = true;
    this.loading = true;
  }
  /**
   * 内容初始化后加载
   */
  ngAfterContentInit(): void {
    if (this.autoLoad) {
      this.loadUrl();
    }
  }
  /**
   * 从服务器加载
   */
  loadUrl(options?: {
    /**
     * 请求地址
     */
    url?: string;
    /**
     * 查询参数
     */
    param?: any;
    /**
     * 成功加载回调函数
     */
    handler?: (value: any) => void;
  }) {
    options = options || {};
    const url = options.url || this.url;
    if (!url) {
      return;
    }
    const param = options.param || this.queryParam;
    this.util.webapi
      .get<any>(url)
      .param(param)
      .handle({
        before: () => {
          this.loading = true;
          return true;
        },
        ok: result => {
          if (options!.handler) {
            options!.handler(result);
            return;
          }
          this.data = result || this.data;
          this.render();
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
  /**
   * 获取样式
   */
  getStyle() {
    return {
      width: this.width ? this.width : null
    };
  }
  /**
   * 渲染图表
   */
  render() {
    this.data = [
      { type: '1月', name: '1月', value: Math.random() * 100 },
      { type: '2月', name: '2月', value: Math.random() * 100 },
      { type: '3月', name: '3月', value: Math.random() * 100 },
      { type: '4月', name: '4月', value: Math.random() * 100 },
      { type: '5月', name: '5月', value: Math.random() * 100 },
      { type: '6月', name: '6月', value: Math.random() * 100 },
      { type: '7月', name: '7月', value: Math.random() * 100 }
    ];
    if (this.line) this.line.destroy();
    this.line = new Line('device-access-line-container', {
      data: this.data,
      padding: 'auto',
      xField: 'name',
      yField: 'value',
      xAxis: {
        tickCount: 5
      },
      meta: {
        value: {
          alias: '租赁'
        }
      },
      smooth: true
    });

    this.line.render();
  }
}
