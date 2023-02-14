import { QueryParameter } from '@dcsoft/util';

/**
 * 登录日志查询参数
 */
export class LoginLogQuery extends QueryParameter {
  /**
   * 日志标识
   */
  logId?: any;
  /**
   * 登录帐号
   */
  loginName?: any;
  /**
   * 登录IP地址
   */
  ipAddress?: any;
  /**
   * 登录地点
   */
  location?: any;
  /**
   * 操作系统
   */
  os?: any;
  /**
   * 登录状态（0成功 1失败）
   */
  status?: any;
  /**
   * 提示消息
   */
  promptMsg?: any;
  /**
   * 浏览器类型
   */
  browser?: any;
  /**
   * 起始创建时间
   */
  beginCreationTime?: any;
  /**
   * 结束创建时间
   */
  endCreationTime?: any;
  /**
   * 创建人编号
   */
  creatorId?: any;
  /**
   * 创建人
   */
  creator?: any;
}
