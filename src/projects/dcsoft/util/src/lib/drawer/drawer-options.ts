import { TemplateRef, Type } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

/**
 * 抽屉层配置
 */
export interface IDrawerOptions {
    /**
     * 抽屉层组件，该组件应添加到当前模块 NgModule 的 entryComponents
     */
    component?: any;
    /**
     * 传入抽屉层组件中的参数
     */
    data?: any;
    /**
     * 标题
     */
    title?: string | TemplateRef<any>;
    /**
     * 内容
     */
    content?: string | TemplateRef<any> | Type<any>;
    /**
     * 是否显示右上角的关闭按钮，默认为 true
     */
    showClose?: boolean;
    /**
     * 是否显示遮罩，默认为 true
     */
    showMask?: boolean;
    /**
     * 点击蒙层是否允许关闭，默认 false
     */
    maskClosable?: boolean;
    /**
     * 是否支持键盘esc关闭，默认 false
     */
    escKeyboard?: boolean;
    /**
     * 宽度
     */
    width?: string | number;
    /**
     * 方向
     */
    placement?: NzDrawerPlacement;
    /**
     * 点击取消按钮事件
     */
    onCancel?: () => Promise<any>;
    /**
     * 打开后事件
     */
    onOpen?: () => void;
    /**
     * 关闭后事件
     * @param result 返回结果
     */
    onClose?: (result: any) => void;
    /**
     * 打开前事件，返回 false 阻止弹出
     */
    onOpenBefore?: () => boolean;
    /**
     * 关闭前事件，返回 false 阻止关闭
     */
    onCloseBefore?: (result: any) => (false | void | {}) | Promise<false | void | {}>;
}