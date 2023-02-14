import { QueryParameter } from '@dcsoft/util';

/**
 * 身份资源查询参数
 */
export class IdentityResourceQuery extends QueryParameter {
  /**
   * 资源标识
   */
  uri?: any;
  /**
   * 显示名称
   */
  name?: any;
  /**
   * 描述
   */
  remark?: any;
  /**
   * 启用
   */
  enabled?: any;
  /**
   * 起始创建时间
   */
  beginCreationTime?: any;
  /**
   * 结束创建时间
   */
  endCreationTime?: any;
}
