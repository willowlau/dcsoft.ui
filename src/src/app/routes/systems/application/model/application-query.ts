import { QueryParameter } from '@dcsoft/util';

/**
 * 应用程序查询参数
 */
export class ApplicationQuery extends QueryParameter {
  /**
   * 应用程序标识
   */
  applicationId?: any;
  /**
   * 应用程序编码
   */
  code?: any;
  /**
   * 应用程序名称
   */
  name?: any;
  /**
   * 启用
   */
  enabled?: any;
  /**
   * 启用注册
   */
  registerEnabled?: any;
  /**
   * 备注
   */
  remark?: any;
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
