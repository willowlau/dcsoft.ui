import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { ComponentBase, HttpMethod } from '@dcsoft/util';
import { NzUploadFile } from 'ng-zorro-antd/upload';

import { UserBaseViewModel } from './model/userBase-view-model';

@Component({
  selector: 'app-account-setting-base',
  templateUrl: './html/index.component.html',
  styleUrls: ['./base.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountSettingsBaseComponent extends ComponentBase implements OnInit {
  /**
   * 加载中
   */
  loading = true;
  /**
   * 基本设置
   */
  user: UserBaseViewModel;
  /**
   * 初始化声明列表页
   *
   * @param injector 注入器
   */
  constructor(injector: Injector, private cdr: ChangeDetectorRef) {
    super(injector);
    this.user = new UserBaseViewModel();
  }
  /**
   * 页面加载后
   */
  ngOnInit(): void {
    this.loadUserBase();
  }
  /**
   * 加载用户基本信息
   */
  loadUserBase(): void {
    this.util.webapi.get<any>(`systems/user/base`).handle({
      ok: resp => {
        this.user = resp;
      },
      complete: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  /**
   * 更新用户基本信息
   *
   * @param button 提交按键
   */
  submit(form: any, button: any): void {
    this.util.form.submit({
      url: `systems/user/base`,
      httpMethod: HttpMethod.Put,
      data: this.user,
      form,
      button,
      showMessage: true,
      before: data => {
        this.loading = true;
        return true;
      },
      ok: resp => {},
      complete: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  /**
   * 修改头像处理
   */
  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        this.cdr.detectChanges();
        break;
      case 'done':
        this.loading = false;
        this.user.avatar = info.file.response.data.url;
        this.cdr.detectChanges();
        break;
      case 'error':
        this.util.message.error('Network error');
        this.loading = false;
        this.cdr.detectChanges();
        break;
    }
  }
}
