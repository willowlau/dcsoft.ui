import { Component } from '@angular/core';
import { ControlUIWidget } from '@delon/form';

import type { ImgWidgetSchema } from './schema';

@Component({
  selector: 'sf-img',
  template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
      <div class="d-flex align-items-center">
        <ng-container *ngIf="result.length > 0">
          <img *ngFor="let i of result" src="{{ i.mp }}" height="64" width="64" class="mr-sm" />
        </ng-container>
        <button nz-button type="button" nzType="primary" nzSize="small" dialog-img [multiple]="ui.multiple!" (selected)="_change($event)">
          选择
        </button>
        <button *ngIf="result.length > 0" class="ml-sm" nz-button type="button" nzSize="small" (click)="_clean()">删除</button>
      </div>
    </sf-item-wrap>
  `,
  preserveWhitespaces: false
})
export class ImgWidget extends ControlUIWidget<ImgWidgetSchema> {
  static readonly KEY = 'img';
  result: any[] = [];

  private notify(value: any): void {
    const { selected } = this.ui;
    this.setValue(value);
    if (selected) {
      selected(value);
    }
  }

  override reset(value: any): void {
    if (!value) {
      return;
    }

    let res = Array.isArray(value) ? value : [value];
    if (res.length > 0 && typeof res[0] === 'string') {
      res = res.map(mp => mp);
    }
    this.result = res;
  }

  _change(list: any): void {
    const { multiple, field } = this.ui;
    if (!Array.isArray(list)) {
      list = [list];
    }
    this.result = list;
    // get fields
    list = (list as any[]).map(item => (field ? item[field] : item)).filter(item => !!item);
    const value = list.length > 0 ? (multiple === true ? list : list[0]) : null;

    this.notify(value);
  }

  _clean(): void {
    this.result.length = 0;
    this.notify(null);
  }
}
