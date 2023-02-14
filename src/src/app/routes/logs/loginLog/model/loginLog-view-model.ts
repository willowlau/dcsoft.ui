import { ViewModel } from '@dcsoft/util';

/**
 * 登录日志视图模型
 */
export class LoginLogViewModel extends ViewModel {
  /**
   * 登录帐号
   */
  loginName: any;
  /**
   * 登录IP地址
   */
  ipAddress: any;
  /**
   * 登录地点
   */
  location: any;
  /**
   * 操作系统
   */
  os: any;
  /**
   * 登录状态（0成功 1失败）
   */
  status: any;
  /**
   * 提示消息
   */
  promptMsg: any;
  /**
   * 浏览器类型
   */
  browser: any;
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
   * 版本号
   */
  version: any;
}
