import { NzDrawerOptions, NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { Ioc } from '../common/ioc';
import { isUndefined } from '../common/helper';
import { IDrawerOptions } from './drawer-options';

let drawerRef: NzDrawerRef;
/**
 * 抽屉层操作
 */
export class Drawer {
  /**
   * 初始化抽屉层操作
   * @param ioc Ioc操作
   */
  constructor( private ioc:Ioc ){
  }
  /**
   * 抽屉引用对象
   */
  drawerRef1: NzDrawerRef;
  /**
   * 打开抽屉层
   * @param options 抽屉层配置
   */
  open(options?: IDrawerOptions): NzDrawerRef {
    options = options || {};
    if (options.onOpenBefore && options.onOpenBefore() === false) {
      return null;
    }
    this.initOptions(options);
    let drawer: NzDrawerService = this.getModalService();
    drawerRef = drawer.create(this.toOptions(options));
    drawerRef.afterOpen.subscribe(() => options?.onOpen && options?.onOpen());
    drawerRef.afterClose.subscribe(result => options?.onClose && options?.onClose(result));
    return drawerRef;
  }

  /**
   * 获取模态窗服务
   */
  private getModalService(): NzDrawerService {
    return this.ioc.get(NzDrawerService);
  }

  /**
   * 初始化配置
   */
  private initOptions(options: IDrawerOptions): void {
    if (!options.data) {
      options.data = {};
    }
  }

  /**
   * 转换配置
   */
  private toOptions(options: IDrawerOptions): NzDrawerOptions {
    return {
      nzTitle: options.title,
      nzContent: options.component || options.content,
      nzContentParams: options.data,
      nzClosable: isUndefined(options.showClose) ? true : options.showClose,
      nzMaskClosable: options.maskClosable,
      nzMask: isUndefined(options.showMask) ? true : options.showMask,
      nzKeyboard: options.escKeyboard,
      nzWidth: options.width,
      nzPlacement: isUndefined(options.placement) ? 'right' : options.placement,
      nzOnCancel: options.onCancel
    };
  }

  /**
   * 关闭所有抽屉层
   */
  closeAll(): void {
    drawerRef.close();
  }

  /**
   * 关闭抽屉层
   *
   * @param result 返回结果
   */
  close(result?: any): void {
    drawerRef.close(result);
  }
}
