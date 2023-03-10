import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, NgZone, OnDestroy, Output } from '@angular/core';
import { toBoolean } from '@delon/util';
import PerfectScrollbar from 'perfect-scrollbar';
import { fromEvent, Subject, debounceTime, takeUntil } from 'rxjs';

import { PerfectScrollbarEvent, PerfectScrollbarEvents, ScrollbarOptions } from './scrollbar.interface';

@Directive({
  selector: '[scrollbar]',
  exportAs: 'scrollbarComp'
})
export class ScrollbarDirective implements AfterViewInit, OnDestroy {
  static ngAcceptInputType_options: ScrollbarOptions | string | null | undefined;

  private instance: PerfectScrollbar | null = null;
  private readonly ngDestroy: Subject<void> = new Subject();
  private _disabled = false;

  // #region fields

  @Input('scrollbar') options?: ScrollbarOptions;

  @Input()
  set disabled(value: boolean) {
    this._disabled = toBoolean(value)!;
    if (this._disabled) {
      this.ngOnDestroy();
    } else {
      this.init();
    }
  }

  @Output() readonly psScrollX: EventEmitter<any> = new EventEmitter<any>();
  @Output() readonly psScrollY: EventEmitter<any> = new EventEmitter<any>();

  @Output() readonly psScrollUp: EventEmitter<any> = new EventEmitter<any>();
  @Output() readonly psScrollDown: EventEmitter<any> = new EventEmitter<any>();
  @Output() readonly psScrollLeft: EventEmitter<any> = new EventEmitter<any>();
  @Output() readonly psScrollRight: EventEmitter<any> = new EventEmitter<any>();

  @Output() readonly psXReachStart: EventEmitter<any> = new EventEmitter<any>();
  @Output() readonly psXReachEnd: EventEmitter<any> = new EventEmitter<any>();
  @Output() readonly psYReachStart: EventEmitter<any> = new EventEmitter<any>();
  @Output() readonly psYReachEnd: EventEmitter<any> = new EventEmitter<any>();

  // #endregion

  scrollToBottom(): void {
    this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
  }

  scrollToTop(): void {
    this.el.scrollTop = 0;
  }

  scrollToLeft(): void {
    this.el.scrollLeft = 0;
  }

  scrollToRight(): void {
    this.el.scrollLeft = this.el.scrollWidth - this.el.clientWidth;
  }

  constructor(private elRef: ElementRef, private zone: NgZone) {}

  private get el(): HTMLElement {
    return this.elRef.nativeElement as HTMLElement;
  }

  private init(): void {
    this.zone.runOutsideAngular(() => {
      const options = {
        wheelSpeed: 0.5,
        swipeEasing: true,
        wheelPropagation: false,
        minScrollbarLength: 40,
        maxScrollbarLength: 300,
        ...this.options
      };
      setTimeout(() => {
        if (this._disabled) {
          return;
        }

        this.instance = new PerfectScrollbar(this.el, options);

        PerfectScrollbarEvents.forEach((eventName: PerfectScrollbarEvent) => {
          const eventType = eventName.replace(/([A-Z])/g, c => `-${c.toLowerCase()}`);

          fromEvent<Event>(this.el, eventType)
            .pipe(debounceTime(20), takeUntil(this.ngDestroy))
            .subscribe((event: Event) => {
              this[eventName].emit(event);
            });
        });
      }, this.options?.delay || 0);
    });
  }

  ngAfterViewInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.ngDestroy.next();
    this.ngDestroy.complete();
    this.zone.runOutsideAngular(() => {
      if (this.instance) {
        this.instance.destroy();
      }
      this.instance = null;
    });
  }
}
