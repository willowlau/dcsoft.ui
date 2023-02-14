import { QueryParameter } from '@dcsoft/util';

/**
 * 操作日志查询参数
 */
export class OperationLogQuery extends QueryParameter {
  /**
   * 日志标识
   */
  logId?: any;
  /**
   * 模块标题
   */
  title?: any;
  /**
   * 业务类型（0其它 1新增 2修改 3删除）
   */
  type?: any;
  /**
   * 请求方式
   */
  httpMethod?: any;
  /**
   * 方法名称
   */
  method?: any;
  /**
   * 请求URL
   */
  url?: any;
  /**
   * 操作类别（0其它 1后台用户 2手机端用户）
   */
  urlType?: any;
  /**
   * 主机地址
   */
  ipAddress?: any;
  /**
   * 操作地点
   */
  location?: any;
  /**
   * 请求参数
   */
  params?: any;
  /**
   * 返回值
   */
  result?: any;
  /**
   * 操作状态（0正常 1异常）
   */
  status?: any;
  /**
   * 错误信息
   */
  errorMsg?: any;
  /**
   * 操作系统
   */
  os?: any;
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
  /**
   * 起始最后修改时间
   */
  beginLastModificationTime?: any;
  /**
   * 结束最后修改时间
   */
  endLastModificationTime?: any;
  /**
   * 最后修改人编号
   */
  lastModifierId?: any;
}
