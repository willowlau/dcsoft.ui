/* eslint-disable deprecation/deprecation */
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { ComponentBase } from '@dcsoft/util';
import { NzMenuModeType } from 'ng-zorro-antd/menu';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-account-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountSettingsComponent extends ComponentBase implements AfterViewInit, OnDestroy {
  private resize$: Subscription | undefined;
  private router$: Subscription;
  mode: NzMenuModeType = 'inline';
  title: string | undefined;
  user: any;
  menus: any[] = [
    {
      key: 'base',
      title: '基本设置'
    },
    {
      key: 'security',
      title: '安全设置'
    }
  ];
  /**
   * 初始化
   *
   * @param injector 注入器
   * @param router 路由
   * @param cdr 变更引用
   * @param el 元素
   */
  constructor(injector: Injector, private router: Router, private cdr: ChangeDetectorRef, private el: ElementRef) {
    super(injector);
    this.router$ = this.router.events.pipe(filter(e => e instanceof ActivationEnd)).subscribe(() => this.setActive());
  }
  /**
   * 设置激活
   */
  setActive(): void {
    const key = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    this.menus.forEach(i => {
      i.selected = i.key === key;
    });
    this.title = this.menus.find(w => w.selected).title;
  }
  /**
   * 跳转
   *
   * @param item 元素
   */
  to(item: any): void {
    this.router.navigateByUrl(`/account/settings/${item.key}`);
  }
  /**
   * 窗口大小
   */
  resize(): void {
    const el = this.el.nativeElement as HTMLElement;
    let mode: NzMenuModeType = 'inline';
    const { offsetWidth } = el;
    if (offsetWidth < 641 && offsetWidth > 400) {
      mode = 'horizontal';
    }
    if (window.innerWidth < 768 && offsetWidth > 400) {
      mode = 'horizontal';
    }
    this.mode = mode;
    this.cdr.detectChanges();
  }
  /**
   * 页面加载后
   */
  ngAfterViewInit(): void {
    this.resize$ = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => this.resize());
  }
  /**
   * 页面销毁
   */
  ngOnDestroy(): void {
    this.resize$!.unsubscribe();
    this.router$.unsubscribe();
  }
}
