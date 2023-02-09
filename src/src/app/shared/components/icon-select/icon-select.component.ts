import { Component, Injector, OnInit } from '@angular/core';
import { ComponentBase } from '@dcsoft/util';

/**
 * 图标选择器
 */
@Component({
  selector: 'app-icon-select',
  template: `
    <div class="modal-header">
      <div class="modal-title" backdrop="static">选择图标</div>
    </div>
    <div class="modal-body" style="height:600px;overflow:auto;">
      <div class="anticons-container" *ngFor="let item of data">
        <h3>{{ item.name }}</h3>
        <ul class="anticons-list">
          <li *ngFor="let icon of item.children" (click)="click(icon)">
            <i nz-icon [nzType]="icon.value" nzTheme="outline"></i>
            <span class="anticon-class">{{ icon.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .anticons-container {
        clear: both;
      }
      .anticon {
        display: inline-block;
        color: inherit;
        font-style: normal;
        line-height: 0;
        text-align: center;
        text-transform: none;
        vertical-align: -0.125em;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      ul.anticons-list {
        margin: 10px 0;
        padding-left: 0;
        list-style: none;
      }
      ul.anticons-list li {
        position: relative;
        float: left;
        width: 16.66%;
        height: 100px;
        margin: 3px 0;
        padding: 10px 0 0;
        overflow: hidden;
        color: #555;
        text-align: center;
        list-style: none;
        background-color: inherit;
        border-radius: 4px;
        cursor: pointer;
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
      }
      ul.anticons-list li .anticon {
        margin: 12px 0 8px;
        font-size: 24px;
        transition: transform 0.3s ease-in-out;
        will-change: transform;
      }
      ul.anticons-list li .anticon-class {
        display: block;
        font-family: Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
        white-space: nowrap;
        text-align: center;
        transform: scale(0.83);
      }
      ul.anticons-list li .anticon-class .ant-badge {
        transition: color 0.3s ease-in-out;
      }
      ul.anticons-list li:hover {
        color: #fff;
        background-color: #1890ff;
      }
      ul.anticons-list li:hover .anticon {
        transform: scale(1.4);
      }
      ul.anticons-list li:hover .ant-badge {
        color: #fff;
      }
      ul.anticons-list li.TwoTone:hover {
        background-color: #8ecafe;
      }
      ul.anticons-list li.copied:hover {
        color: hsla(0, 0%, 100%, 0.2);
      }
      ul.anticons-list li:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #fff;
        line-height: 110px;
        text-align: center;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        content: 'Copied!';
      }
      ul.anticons-list li.copied:after {
        top: -10px;
        opacity: 1;
      }
      .copied-code {
        padding: 2px 4px;
        font-size: 12px;
        background: #f5f5f5;
        border-radius: 2px;
      }
      ul.anticons-list li {
        color: #555555;
      }
      [data-theme='default'] ul.anticons-list li.TwoTone:hover {
        background-color: #15395b;
      }
      [data-theme='dark'] ul.anticons-list li:hover .anticon {
        color: #fff;
      }
    `
  ]
})
export class IconSelectComponent extends ComponentBase implements OnInit {
  /**
   * 初始化组件
   *
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }
  /**
   * 选择的对象
   */
  selected: any;
  /**
   * 数据集合
   */
  data: any;
  /**
   * Get请求
   */
  $get(url: string) {
    return new Promise((resolve, rejected) => {
      $.getJSON(url, (res: any) => {
        resolve(res);
      });
    });
  }
  /**
   * 初始化
   */
  ngOnInit(): void {
    this.$get(`/assets/json/icons.json`).then(resp => {
      this.data = resp;
    });
  }
  /**
   * 单击
   */
  click(item: any) {
    this.selected = item;
    this.util.dialog.close(item);
  }
  /**
   * 获取选择后的图标
   */
  getSelected() {
    return this.selected;
  }
}
