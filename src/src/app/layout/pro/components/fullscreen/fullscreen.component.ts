import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import screenfull from 'screenfull';

@Component({
  selector: 'layout-pro-fullscreen',
  template: `
    <a
      nz-tooltip
      [nzTooltipTitle]="status ? '退出全屏' : '全屏显示'"
      nzTooltipPlacement="bottom"
      class="hidden-xs"
      rel="noopener noreferrer"
      class="alain-pro__header-item"
    >
      <i nz-icon [nzType]="status ? 'fullscreen-exit' : 'fullscreen'"></i>
    </a>
  `,
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.d-block]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutProFullScreenComponent {
  status = false;

  @HostListener('window:resize')
  _resize() {
    this.status = screenfull.isFullscreen;
  }

  @HostListener('click')
  _click() {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
}
