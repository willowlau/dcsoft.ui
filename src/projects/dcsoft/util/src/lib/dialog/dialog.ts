﻿//============== 弹出层操作 ======================
//Copyright 2023 何镇汐
//Licensed under the MIT license
//================================================
import { NzModalService, ModalOptions, NzModalRef } from "ng-zorro-antd/modal";
import { isUndefined } from '../common/helper';
import { IDialogOptions } from "./dialog-options";
import { Util } from "../util";
import { NzButtonType } from "ng-zorro-antd/button";

/**
 * 弹出层操作
 */
export class Dialog {
    /**
     * 初始化弹出层操作
     * @param util 操作入口
     */
    constructor(private util: Util) {
    }

    /**
     * 打开弹出层
     * @param options 弹出层配置
     */
    open(options?: IDialogOptions): NzModalRef {
        options = options || {};
        if (options.onOpenBefore && options.onOpenBefore() === false)
            return null;
        this.initOptions(options);
        let dialog: NzModalService = this.getModalService();
        let dialogRef: NzModalRef = dialog.create(this.toOptions(options));
        dialogRef.afterOpen.subscribe(() => options.onOpen && options.onOpen());
        dialogRef.afterClose.subscribe((result) => options.onClose && options.onClose(result));
        return dialogRef;
    }

    /**
     * 获取模态窗服务
     */
    private getModalService() {
        return this.util.ioc.get(NzModalService);
    }

    /**
     * 初始化配置
     */
    private initOptions(options: IDialogOptions) {
        if (!options.data)
            options.data = {};
    }

    /**
     * 转换配置
     */
    private toOptions(options: IDialogOptions): ModalOptions {
        return {
            nzTitle: this.getTitle(options),
            nzContent: options.component || options.content,
            nzComponentParams: options.data,
            nzCentered: options.centered,
            nzWidth: options.width,
            nzCancelText: this.getCancelText(options),
            nzCancelLoading: options.cancelLoading,
            nzOkText: this.getOkText(options),
            nzOkType: this.getOkType(options),
            nzOkDanger: options.okDanger,
            nzOkLoading: options.okLoading,
            nzClosable: isUndefined(options.showClose) ? true : options.showClose,
            nzMask: isUndefined(options.showMask) ? true : options.showMask,
            nzFooter: this.getFooter(options),
            nzMaskClosable: !options.disableClose,
            nzKeyboard: !options.disableClose,
            nzStyle: options.style,
            nzBodyStyle: options.bodyStyle,
            nzMaskStyle: options.maskStyle,
            nzClassName: options.className,
            nzWrapClassName: options.wrapClassName,
            nzAutofocus: this.getAutofocus(options),
            nzOnOk: options.onOk,
            nzOnCancel: data => {
                if (data.tag === true) {
                    options.onCloseBefore && options.onCloseBefore(data.result);
                    return;
                }
                options.onCloseBefore && options.onCloseBefore(null);
            }
        };
    }

    /**
     * 获取标题
     */
    private getTitle(options: IDialogOptions) {
        if (this.util.helper.isString(options.title))
            return this.util.i18n.get(<string>options.title);
        return options.title;
    }

    /**
     * 获取取消按钮文本
     */
    private getCancelText(options: IDialogOptions) {
        if (options.showCancel === false)
            return null;
        return options.cancelText;
    }

    /**
     * 获取确定按钮文本
     */
    private getOkText(options: IDialogOptions) {
        if (options.showOk === false)
            return null;
        return options.okText;
    }

    /**
    * 获取确定按钮类型
    */
    private getOkType(options: IDialogOptions): NzButtonType {
        if (options.okType)
            return options.okType;
        return "primary";
    }

    /**
     * 获取页脚
     */
    private getFooter(options: IDialogOptions) {
        if (options.showFooter === false)
            return null;
        return options.footer;
    }
    
    /**
     * 获取焦点设置
     */
    private getAutofocus(options: IDialogOptions) {
        if (options.autofocus)
            return options.autofocus;
        return 'auto';
    }

    /**
     * 关闭所有弹出层
     */
    closeAll() {
        let dialog = this.getModalService();
        dialog.closeAll();
    }

    /**
     * 关闭弹出层
     * @param result 返回结果
     */
    close(result?) {
        let dialog: NzModalService = this.getModalService();
        if (!dialog)
            return;
        if (!dialog.openModals || dialog.openModals.length === 0)
            return;
        let dialogRef: NzModalRef = dialog.openModals[dialog.openModals.length - 1];
        if (!dialogRef)
            return;
        let content = dialogRef.getContentComponent();
        if (!content && dialog.openModals.length > 1)
            dialogRef = dialog.openModals[dialog.openModals.length - 2];
        dialogRef.close(result);
    }
}