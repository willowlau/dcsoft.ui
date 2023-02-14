import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { ComponentBase } from '@dcsoft/util';

import { ApplicationViewModel } from './model/application-view-model';

/**
 * 公共组件 - 选择应用程序
 */
@Component({
  selector: 'app-application-select',
  templateUrl: './html/select.component.html'
})
export class ApplicationSelectComponent extends ComponentBase implements OnInit {
  /**
   * 应用程序列表
   */
  list: ApplicationViewModel[];
  /**
   * 当前应用程序
   */
  selected: ApplicationViewModel | undefined;
  /**
   * 加载状态
   */
  loading: boolean | undefined;
  /**
   * 单击事件
   */
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() readonly onClick = new EventEmitter<ApplicationViewModel>();

  /**
   * 初始化选择应用程序
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
    this.list = new Array<ApplicationViewModel>();
  }

  /**
   * 初始化
   */
  ngOnInit(): void {
    this.loadApplications();
  }

  /**
   * 加载应用程序列表
   */
  loadApplications(): void {
    this.util.webapi.get<ApplicationViewModel[]>('systems/application/all').handle({
      before: () => (this.loading = true),
      ok: result => {
        this.list = result;
        this.selectApplication();
      },
      complete: () => (this.loading = false)
    });
  }

  /**
   * 选择当前应用程序
   */
  private selectApplication(): void {
    if (!this.list || this.list.length === 0) {
      return;
    }
    this.click(this.list[0]);
  }

  /**
   * 单击
   */
  click(item: any): void {
    this.selected = item;
    this.onClick.emit(item);
  }
}
