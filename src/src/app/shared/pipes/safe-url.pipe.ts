﻿import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * 安全Url管道
 */
@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  /**
   * 初始化安全Url管道
   */
  constructor(private sanitized: DomSanitizer) {}

  /**
   * 转换
   *
   * @param value 值
   */
  transform(value: any): SafeResourceUrl {
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }
}
