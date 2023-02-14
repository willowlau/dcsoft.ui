import { Component, OnInit, Injector } from '@angular/core';
import { ComponentBase } from '@dcsoft/util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
/**
 * 仪表盘
 */
export class DashboardComponent extends ComponentBase implements OnInit {
  /**
   * 加载中
   */
  loading: boolean;
  /**
   * 总设备数
   */
  total!: number;
  /**
   * 在线设备数
   */
  totalOnline!: number;
  /**
   * 离线设备数
   */
  totalOffline!: number;
  /**
   * 已租设备数
   */
  totalRent!: number;
  /**
   * 构造函数
   */
  constructor(injector: Injector) {
    super(injector);
    this.loading = false;
  }
  /**
   * 初始化
   */
  ngOnInit(): void {
    this.loadData();
  }
  /**
   * 加载统计
   */
  loadData(): void {
    this.util.webapi.get<any>(`commons/demo/statistic`).handle({
      before: () => {
        this.loading = true;
        return true;
      },
      ok: resp => {
        this.total = resp.total;
        this.totalOnline = resp.totalOnline;
        this.totalOffline = resp.totalOffline;
        this.totalRent = resp.totalRent;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
