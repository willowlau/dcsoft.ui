import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Chart } from '@antv/g2';

import { ChartWrapperBase } from './base/chart-wrapper-base';

/**
 * 在线状态分析
 */
@Component({
  selector: 'app-online-status-chart',
  template: `
    <nz-card nzTitle="在线状态" [nzExtra]="action">
      <nz-spin [nzSpinning]="loading">
        <div class="chart" id="online-status-container"></div>
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
export class OnlineStatusAnalysisChartComponent extends ChartWrapperBase implements OnInit, AfterContentInit {
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
   * 组件初始化
   */
  ngOnInit() {
    this.autoLoad = true;
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
    //   { "type": "在线", "name": "2021-06-25", "value": 502 },
    //   { "type": "在线", "name": "2021-07-01", "value": 947 },
    //   { "type": "离线", "name": "2021-06-25", "value": 106 },
    //   { "type": "静置", "name": "2021-06-25", "value": 163 },
    //   { "type": "流控", "name": "2021-06-25", "value": 200 },
    // ];
    const colorMap: any = {
      在线: '#1a8ffc',
      离线: '#ff6db4',
      静置: '#53be42',
      流控: '#7798be'
    };
    if (this.chart) this.chart.destroy();

    this.chart = new Chart({
      container: 'online-status-container',
      autoFit: true,
      padding: [50, 20, 30, 60] // 上、右、下、左
    });
    this.chart.data(this.data);
    this.chart.legend('type', {
      position: 'top',
      itemSpacing: 5,
      flipPage: false,
      custom: true,
      items: [
        { id: '1', name: '在线', value: '在线', marker: { spacing: 2, style: { fill: '#1a8ffc' } } },
        { id: '2', name: '离线', value: '离线', marker: { spacing: 2, style: { fill: '#ff6db4' } } },
        { id: '3', name: '静置', value: '静置', marker: { spacing: 2, style: { fill: '#53be42' } } },
        { id: '4', name: '流控', value: '流控', marker: { spacing: 2, style: { fill: '#7798be' } } }
      ]
    });
    this.chart.scale('name', {
      nice: true,
      min: 0
    });
    this.chart.scale('value', {
      nice: true
    });

    this.chart.tooltip({
      showCrosshairs: true,
      shared: true
    });

    this.chart
      .area()
      .adjust('stack')
      .position('name*value')
      .color('type', type => {
        return colorMap[type];
      });
    this.chart
      .line()
      .adjust('stack')
      .position('name*value')
      .color('type', type => {
        return colorMap[type];
      });

    this.chart.interaction('element-highlight');
    // 复写 图例筛选 交互。1、点击图例名称 进行 unchecked 状态的切换 2、点击图例 marker，进行 checked 状态的切换（进行聚焦）3、双击 重置状态
    this.chart.interaction('legend-filter', {
      start: [
        { trigger: 'legend-item-name:click', action: ['list-unchecked:toggle', 'data-filter:filter'] },
        { trigger: 'legend-item-marker:click', action: ['list-checked:checked', 'data-filter:filter'] }
      ],
      end: [{ trigger: 'legend-item-marker:dblclick', action: ['list-checked:reset', 'data-filter:filter'] }]
    });
    this.chart.render();
  }
}
