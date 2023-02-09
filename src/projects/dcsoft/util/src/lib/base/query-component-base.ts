//================ 查询组件基类 ==================
//Copyright 2023 何镇汐
//Licensed under the MIT license
//================================================
import { Input, Injector, Component } from '@angular/core';
import { ComponentBase } from './component-base';

/**
 * 查询组件基类
 */
@Component({
    template: ''
})
export abstract class QueryComponentBase extends ComponentBase {
    /**
     * 是否展开
     */
    expand;
    /**
     * 复选框或单选框选中的标识列表
     */
    checkedIds;
    /**
     * 传入数据
     */
    @Input() data;

    /**
     * 初始化组件
     * @param injector 注入器
     */
    constructor(injector: Injector) {
        super(injector);
    }

    /**
     * 查询
     * @param button 按钮
     */
    abstract query(button?);

    /**
     * 刷新
     * @param button 按钮
     * @param handler 刷新后回调函数
     */
    abstract refresh(button?, handler?: (data) => void);

    /**
     * 通过标识刷新单个节点
     * @param id 标识
     * @param handler 刷新后回调函数
     */
    abstract refreshById(id, handler?: (data) => void);

    /**
     * 路由复用标签刷新
     */
    _onReuseInit(type?) {
        if (type === "refresh")
            this.refresh();
    }

    /**
     * 打开创建页面弹出框
     */
    openCreateDialog(data?) {
        this.util.dialog.open({
            component: this.getCreateDialogComponent(),
            centered: true,
            title: this.getCreateDialogTitle(),
            data: this.getCreateDialogData(data),
            width: this.getCreateDialogWidth(),
            disableClose: true,
            showFooter: false,
            onOpenBefore: () => {
                return this.onCreateOpenBefore();
            },
            onCloseBefore: result => {
                return this.onCreateCloseBefore(result);
            },
            onClose: result => {
                this.onCreateClose(result);
            }
        });
    }

    /**
     * 获取创建弹出框组件
     */
    protected getCreateDialogComponent() {
        return {};
    }

    /**
     * 获取创建弹出框标题
     */
    protected getCreateDialogTitle() {
        return null;
    }

    /**
     * 获取创建弹出框数据
     */
    protected getCreateDialogData(data?) {
        return {};
    }

    /**
     * 获取创建弹出框宽度
     */
    protected getCreateDialogWidth() {
        return this.getDialogWidth();
    }

    /**
     * 获取弹出框宽度，默认值：60%
     */
    protected getDialogWidth() {
        return "60%";
    }

    /**
     * 创建弹出框打开前回调函数，返回 false 阻止打开
     */
    protected onCreateOpenBefore() {
        return true;
    }

    /**
     * 创建弹出框关闭前回调函数，返回 false 阻止关闭
     * @param result 返回结果
     */
    protected onCreateCloseBefore(result) {
        return true;
    }

    /**
     * 创建弹出框关闭回调函数
     * @param result 返回结果
     */
    protected onCreateClose(result) {
        if (result)
            this.query();
    }

    /**
     * 打开修改页面弹出框
     */
    openEditDialog(data) {
        this.util.dialog.open({
            component: this.getEditDialogComponent(),
            centered: true,
            title: this.getEditDialogTitle(),
            data: this.getEditDialogData(data),
            width: this.getEditDialogWidth(),
            disableClose: true,
            showFooter: false,
            onOpenBefore: () => {
                return this.onEditOpenBefore();
            },
            onCloseBefore: result => {
                return this.onEditCloseBefore(result);
            },
            onClose: result => {
                this.onEditClose(result);
            }
        });
    }

    /**
     * 获取更新弹出框组件
     */
    protected getEditDialogComponent() {
        return this.getCreateDialogComponent();
    }

    /**
     * 获取更新弹出框标题
     */
    protected getEditDialogTitle() {
        return null;
    }

    /**
     * 获取更新弹出框数据
     */
    protected getEditDialogData(data) {
        if (!data)
            return null;
        return { id: data.id, data: data };
    }

    /**
     * 获取编辑弹出框宽度
     */
    protected getEditDialogWidth() {
        return this.getDialogWidth();
    }

    /**
     * 更新弹出框打开前回调函数，返回 false 阻止打开
     */
    protected onEditOpenBefore() {
        return true;
    }

    /**
     * 更新弹出框关闭前回调函数，返回 false 阻止关闭
     * @param result 返回结果
     */
    protected onEditCloseBefore(result) {
        return true;
    }

    /**
     * 更新弹出框关闭回调函数
     * @param result 返回结果
     */
    protected onEditClose(result) {
        if (result)
            this.refreshById(result);
    }

    /**
     * 打开详情页面弹出框
     */
    openDetailDialog(data) {
        this.util.dialog.open({
            component: this.getDetailDialogComponent(),
            centered: true,
            title: this.getDetailDialogTitle(),
            data: this.getDetailDialogData(data),
            width: this.getDetailDialogWidth(),
            showOk: false
        });
    }

    /**
     * 获取详情弹出框组件
     */
    protected getDetailDialogComponent() {
        return {};
    }

    /**
     * 获取更新弹出框标题
     */
    protected getDetailDialogTitle() {
        return null;
    }

    /**
     * 获取详情弹出框数据
     */
    protected getDetailDialogData(data) {
        return this.getEditDialogData(data);
    }

    /**
     * 获取详情弹出框宽度
     */
    protected getDetailDialogWidth() {
        return this.getDialogWidth();
    }

    /**
     * 打开创建页面抽屉框
     */
    openCreateDrawer(data?) {
        this.util.drawer.open({
            component: this.getCreateDrawerComponent(),
            title: this.getCreateDrawerTitle(),
            data: this.getCreateDrawerData(data),
            width: this.getCreateDrawerWidth(),
            maskClosable: false,
            escKeyboard: true,
            showClose: this.getCreateDrawerTitle() ? true : false,
            onOpenBefore: () => {
                return this.onCreateOpenBefore();
            },
            onCloseBefore: result => {
                return this.onCreateCloseBefore(result);
            },
            onClose: result => {
                this.onCreateClose(result);
            }
        });
    }

    /**
     * 获取创建抽屉框组件
     */
    protected getCreateDrawerComponent() {
        return {};
    }

    /**
     * 获取创建抽屉框标题
     */
    protected getCreateDrawerTitle() {
        return null;
    }

    /**
     * 获取创建抽屉框数据
     */
    protected getCreateDrawerData(data?) {
        return {};
    }

    /**
     * 获取创建抽屉框宽度
     */
    protected getCreateDrawerWidth() {
        return this.getDrawerWidth();
    }

    /**
     * 获取抽屉框宽度，默认值：60%
     */
    protected getDrawerWidth() {
        return "60%";
    }

    /**
     * 打开修改页面抽屉框
     */
    openEditDrawer(data) {
        this.util.drawer.open({
            component: this.getEditDrawerComponent(),
            title: this.getEditDrawerTitle(),
            data: this.getEditDrawerData(data),
            width: this.getEditDrawerWidth(),
            maskClosable: false,
            escKeyboard: true,
            showClose: this.getEditDrawerTitle() ? true : false,
            onOpenBefore: () => {
                return this.onEditOpenBefore();
            },
            onCloseBefore: result => {
                return this.onEditCloseBefore(result);
            },
            onClose: result => {
                this.onEditClose(result);
            }
        });
    }

    /**
     * 获取更新抽屉框组件
     */
    protected getEditDrawerComponent() {
        return this.getCreateDrawerComponent();
    }

    /**
     * 获取更新抽屉框标题
     */
    protected getEditDrawerTitle() {
        return null;
    }

    /**
     * 获取更新抽屉框数据
     */
    protected getEditDrawerData(data) {
        if (!data)
            return null;
        return { id: data.id, data: data };
    }

    /**
     * 获取编辑抽屉框宽度
     */
    protected getEditDrawerWidth() {
        return this.getDrawerWidth();
    }

    /**
     * 打开详情页面抽屉框
     */
    openDetailDrawer(data) {
        this.util.drawer.open({
            component: this.getDetailDrawerComponent(),
            title: this.getDetailDrawerTitle(),
            data: this.getDetailDrawerData(data),
            width: this.getDetailDrawerWidth(),
            maskClosable: true,
            escKeyboard: true,
            showClose: this.getDetailDrawerTitle() ? true : false,
            onClose: result => {
              this.onEditClose(result);
            }
        });
    }

    /**
     * 获取详情抽屉框组件
     */
    protected getDetailDrawerComponent() {
        return {};
    }

    /**
     * 获取更新抽屉框标题
     */
    protected getDetailDrawerTitle() {
        return null;
    }

    /**
     * 获取详情抽屉框数据
     */
    protected getDetailDrawerData(data) {
        return this.getEditDrawerData(data);
    }

    /**
     * 获取详情抽屉框宽度
     */
    protected getDetailDrawerWidth() {
        return this.getDrawerWidth();
    }
}
