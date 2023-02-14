import { ViewModel } from '@dcsoft/util';

/**
 * 任务计划参数
 */
export class TasksQzViewModel extends ViewModel {
  /**
   * 任务名称
   */
  name: any;
  /**
   * 任务分组
   */
  jobGroup: any;
  /**
   * 任务运行时间表达式
   */
  cron: any;
  /**
   * 任务所在DLL对应的程序集名称
   */
  assemblyName: any;
  /**
   * 任务所在类
   */
  className: any;
  /**
   * 任务描述
   */
  remark: any;
  /**
   * 执行次数
   */
  runTimes: any;
  /**
   * 开始时间
   */
  beginTime: any;
  /**
   * 结束时间
   */
  endTime: any;
  /**
   * 触发器类型（0、simple 1、cron）
   */
  triggerType: any;
  /**
   * 执行间隔时间, 秒为单位
   */
  interval: any;
  /**
   * 是否运行
   */
  isStart: any;
  /**
   * 排序号
   */
  sortId: any;
  /**
   * 执行传参
   */
  jobParams: any;
  /**
   * 创建时间
   */
  creationTime: any;
  /**
   * 创建人编号
   */
  creatorId: any;
  /**
   * 创建人
   */
  creator: any;
  /**
   * 最后修改时间
   */
  lastModificationTime: any;
  /**
   * 最后修改人编号
   */
  lastModifierId: any;
  /**
   * 最后修改人
   */
  lastModifier: any;
  /**
   * 版本号
   */
  version: any;
}
