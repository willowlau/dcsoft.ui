import { AfterContentInit, Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';
import { Chart } from '@antv/g2';

import { ChartWrapperBase } from './base/chart-wrapper-base';

/**
 * 设备出租
 */
@Component({
  selector: 'app-device-rent-chart',
  template: `
    <nz-card nzTitle="设备出租" [nzExtra]="action">
      <nz-spin [nzSpinning]="loading">
        <div class="chart" id="device-rent-container"></div>
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
export class DeviceRentChartComponent extends ChartWrapperBase implements AfterContentInit {
  /**
   * 加载状态
   */
  @Input() loading!: boolean;
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
  @Input() autoLoad!: boolean;
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
    this.loading = false;
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
    //   { type: '已租赁', name: '已租赁', value: 37, percent: 0.37 },
    //   { type: '未租赁', name: '未租赁', value: 63, percent: 0.63 },
    // ];
    const colorMap: any = {
      已租赁: '#1a8ffc',
      未租赁: '#a798be'
    };
    if (this.chart) this.chart.destroy();
    this.chart = new Chart({
      container: 'device-rent-container',
      autoFit: true,
      padding: [50, 20, 30, 60] // 上、右、下、左
    });
    this.chart.legend('name', {
      position: 'top',
      itemSpacing: 5,
      flipPage: false,
      custom: true,
      items: [
        { id: '1', name: '已租赁', value: '已租赁', marker: { spacing: 2, style: { fill: '#1a8ffc' } } },
        { id: '2', name: '未租赁', value: '未租赁', marker: { spacing: 2, style: { fill: '#a798be' } } }
      ]
    });
    this.chart.data(this.data);
    this.chart.coordinate('theta', {
      radius: 0.95
    });
    this.chart.scale('percent', {
      formatter: val => {
        val = `${(val * 100).toFixed(0)}%`;
        return val;
      }
    });
    this.chart.tooltip({
      showTitle: false,
      showMarkers: false
    });
    this.chart
      .interval()
      .adjust('stack')
      .position('percent')
      .color('name', name => {
        return colorMap[name];
      })
      .label('name', {
        offset: -40,
        style: {
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)',
          fill: '#fff'
        }
      })
      .tooltip('name*percent', (name, percent) => {
        percent = `${(percent * 100).toFixed(0)}%`;
        return {
          name: name,
          value: percent
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff'
      });
    this.chart.interaction('element-single-selected');
    this.chart.render();
  }
}
