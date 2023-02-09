import { AvatarListModule } from '@delon/abc/avatar-list';
import { DatePickerModule } from '@delon/abc/date-picker';
import { DownFileModule } from '@delon/abc/down-file';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { FullContentModule } from '@delon/abc/full-content';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { OnboardingModule } from '@delon/abc/onboarding';
import { PageHeaderModule } from '@delon/abc/page-header';
import { QRModule } from '@delon/abc/qr';
import { QuickMenuModule } from '@delon/abc/quick-menu';
import { ResultModule } from '@delon/abc/result';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { SEModule } from '@delon/abc/se';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { TagSelectModule } from '@delon/abc/tag-select';
import { G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
import { CurrencyPipeModule } from '@delon/util/pipes/currency';

export const SHARED_DELON_MODULES = [
  AvatarListModule,
  DatePickerModule,
  EllipsisModule,
  STModule,
  SVModule,
  SEModule,
  QRModule,
  OnboardingModule,
  ErrorCollectModule,
  FooterToolbarModule,
  GlobalFooterModule,
  PageHeaderModule,
  ResultModule,
  TagSelectModule,
  NoticeIconModule,
  QuickMenuModule,
  FullContentModule,
  CurrencyPipeModule,
  ReuseTabModule,
  DownFileModule,
  G2BarModule,
  G2CardModule
];
