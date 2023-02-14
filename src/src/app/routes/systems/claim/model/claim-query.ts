import { QueryParameter } from '@dcsoft/util';

/**
 * 声明查询参数
 */
export class ClaimQuery extends QueryParameter {
  /**
   * 声明标识
   */
  claimId?: any;
  /**
   * 声明名称
   */
  name?: any;
  /**
   * 启用
   */
  enabled?: any;
  /**
   * 排序号
   */
  sortId?: any;
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
}
