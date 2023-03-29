//================ utilģ�� ======================
//Copyright 2023 ����ϫ
//Licensed under the MIT license
//================================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableExtendDirective } from "./zorro/table.extend.directive";
import { EditTableDirective } from "./zorro/edit-table.directive";
import { EditRowDirective } from "./zorro/edit-row.directive";
import { EditControlDirective } from "./zorro/edit-control.directive";
import { ButtonExtendDirective } from "./zorro/button.extend.directive";
import { ValidationExtendDirective } from "./zorro/validation.extend.directive";
import { SelectExtendDirective } from "./zorro/select.extend.directive";
import { RadioExtendDirective } from "./zorro/radio.extend.directive";
import { TreeTableExtendDirective } from "./zorro/tree.table.extend.directive";
import { TreeExtendDirective } from "./zorro/tree.extend.directive";
import { TinymceExtendDirective } from "./tinymce/tinymce.extend.directive";
import { DrawerFooterComponent } from "./drawer/drawer-footer.component";
import { RequiredExtendDirective } from "./zorro/required.extend.directive";

/**
 * utilģ��
 */
@NgModule({
    declarations: [
        TableExtendDirective,
        EditTableDirective, EditRowDirective, EditControlDirective,
        RequiredExtendDirective, ButtonExtendDirective,
        ValidationExtendDirective, SelectExtendDirective, RadioExtendDirective,
        TreeTableExtendDirective, TreeExtendDirective,
        TinymceExtendDirective, DrawerFooterComponent
    ],
    imports: [
        CommonModule, FormsModule, NzButtonModule
    ],
    exports: [
        TableExtendDirective,
        EditTableDirective, EditRowDirective, EditControlDirective,
        RequiredExtendDirective, ButtonExtendDirective,
        ValidationExtendDirective, SelectExtendDirective, RadioExtendDirective,
        TreeTableExtendDirective, TreeExtendDirective,
        TinymceExtendDirective
    ]
})
export class UtilModule {
}
