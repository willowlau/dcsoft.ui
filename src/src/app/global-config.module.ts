/* eslint-disable import/order */
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '@core';
import { ReuseTabMatchMode, ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
import { DelonACLModule } from '@delon/acl';
import { AlainThemeModule } from '@delon/theme';
import { AlainConfig, ALAIN_CONFIG } from '@delon/util';
import { environment } from '@env/environment';

// Please refer to: https://ng-alain.com/docs/global-config
// #region NG-ALAIN Config

const alainConfig: AlainConfig = {
  st: { modal: { size: 'lg' } },
  pageHeader: { homeI18n: 'app.home', recursiveBreadcrumb: true },
  auth: {
    login_url: '/passport/login',
    ignores: [/\/login$/, /signIn/, /verifyCode/, /encryptKey/, /passport/, /assets\//],
    store_key: 'access_token', // localStorage 的存储KEY值
    token_send_key: 'Authorization',
    token_send_template: 'Bearer ${token}',
    token_send_place: 'header',
    refreshTime: 1000 * 60 * 60
  }
};

const alainModules = [AlainThemeModule.forRoot(), DelonACLModule.forRoot()];
const alainProvides = [{ provide: ALAIN_CONFIG, useValue: alainConfig }];

// #region reuse-tab

import { RouteReuseStrategy } from '@angular/router';
alainProvides.push({
  provide: RouteReuseStrategy,
  useClass: ReuseTabStrategy,
  deps: [ReuseTabService]
} as any);

// #endregion

// #endregion

// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config
import { DA_STORE_TOKEN, SessionStorageStore } from '@delon/auth';
const tokenProvides = [{ provide: DA_STORE_TOKEN, useClass: SessionStorageStore }];

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {};

const zorroProvides = [{ provide: NZ_CONFIG, useValue: ngZorroConfig }];

// #endregion

@NgModule({
  imports: [...alainModules, ...(environment.modules || [])]
})
export class GlobalConfigModule {
  constructor(@Optional() @SkipSelf() parentModule: GlobalConfigModule, reuseTabService: ReuseTabService) {
    throwIfAlreadyLoaded(parentModule, 'GlobalConfigModule');
    // NOTICE: Only valid for menus with reuse property
    // Pls refer to the E-Mail demo effect
    reuseTabService.mode = ReuseTabMatchMode.URL;
    // Shouled be trigger init, you can ingore when used `reuse-tab` component in layout component
    reuseTabService.init();
  }

  static forRoot(): ModuleWithProviders<GlobalConfigModule> {
    return {
      ngModule: GlobalConfigModule,
      providers: [...alainProvides, ...zorroProvides, ...tokenProvides]
    };
  }
}
