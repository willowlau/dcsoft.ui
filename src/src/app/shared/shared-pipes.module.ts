
import {
  BindHtmlUnsafePipe,
  BusinessTypePipe,
  FieldFilterPipe,
  FormatBindGAPipe,
  IsDeletedPipe,
  IsDiabledPipe,
  IsEnabledPipe,
  LoginStatusPipe,
  OperatorStatusPipe,
  OperatorTypePipe,
  SecurtityHtml
} from './pipes/field-filter.pipe';
import { IsTruncatePipe } from './pipes/is-truncate.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

export const SHARED_PIPES_MODULES = [
  SafeUrlPipe,
  TruncatePipe,
  IsTruncatePipe,
  FieldFilterPipe,
  BindHtmlUnsafePipe,
  IsDeletedPipe,
  SecurtityHtml,
  IsDiabledPipe,
  IsEnabledPipe,
  FormatBindGAPipe,
  LoginStatusPipe,
  BusinessTypePipe,
  OperatorTypePipe,
  OperatorStatusPipe
];
