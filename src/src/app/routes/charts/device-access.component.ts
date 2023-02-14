import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Chart } from '@antv/g2';

import { ChartWrapperBase } from './base/chart-wrapper-base';

/**
 * 设备接入图表
 */
@Component({
  selector: 'app-device-access-chart',
  template: `
    <nz-card nzTitle="设备接入" [nzExtra]="action">
      <nz-spin [nzSpinning]="loading">
        <div class="chart" id="device-access-container"></div>
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
export class DeviceAccessChartComponent extends ChartWrapperBase implements AfterContentInit {
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
    // this.data = [
    //   { type: '1月', name: '1月', value: 1342 },
    //   { type: '2月', name: '2月', value: 2341 },
    //   { type: '3月', name: '3月', value: 2311 },
    //   { type: '4月', name: '4月', value: 3451 },
    //   { type: '5月', name: '5月', value: 4321 },
    //   { type: '6月', name: '6月', value: 4441 },
    //   { type: '7月', name: '7月', value: 231 },
    // ];
    if (this.chart) this.chart.destroy();
    this.chart = new Chart({
      container: 'device-access-container',
      autoFit: true,
      padding: [50, 20, 30, 60] // 上、右、下、左
    });
    this.chart.data(this.data);
    this.chart.legend(false);
    this.chart.scale('value', {
      alias: '租赁',
      nice: true
    });
    this.chart.axis('name', {
      tickLine: null
    });
    this.chart.tooltip({
      showMarkers: false
    });

    this.chart.interval().position('name*value');
    this.chart.interaction('element-active');
    this.chart.render();
  }
}
