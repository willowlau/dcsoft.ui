import { TreeQueryParameter } from '@dcsoft/util';

/**
 * 部门查询参数
 */
export class DepartmentQuery extends TreeQueryParameter {
  /**
   * 部门编码
   */
  code?: any;
  /**
   * 部门名称
   */
  name?: any;
  /**
   * 路径
   */
  path?: any;
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
