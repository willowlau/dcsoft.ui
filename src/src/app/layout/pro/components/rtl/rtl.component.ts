import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { RTLService } from '@delon/theme';

@Component({
  selector: 'layout-pro-rtl',
  template: `
    <a
      nz-tooltip
      [nzTooltipTitle]="rtl.nextDir === 'rtl' ? '文字右对齐' : '文字左对齐'"
      nzTooltipPlacement="bottom"
      class="hidden-xs"
      rel="noopener noreferrer"
      class="alain-pro__header-item"
    >
      <i nz-icon [nzType]="rtl.nextDir === 'rtl' ? 'align-left' : 'align-right'"></i>
    </a>
  `,
  host: {
    '[class.alain-pro__header-item]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutProWidgetRTLComponent {
  constructor(public rtl: RTLService) {}

  @HostListener('click')
  toggleDirection(): void {
    this.rtl.toggle();
  }
}
