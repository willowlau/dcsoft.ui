import { QueryParameter } from '@dcsoft/util';

/**
 * 角色查询参数
 */
export class RoleQuery extends QueryParameter {
  /**
   * 角色标识
   */
  roleId?: any;
  /**
   * 角色编码
   */
  code?: any;
  /**
   * 角色名称
   */
  name?: any;
  /**
   * 角色类型
   */
  type?: any;
  /**
   * 是否启用
   */
  enabled?: any;
  /**
   * 管理员
   */
  isAdmin?: any;
  /**
   * 备注
   */
  remark?: any;
  /**
   * 拼音简码
   */
  pinYin?: any;
  /**
   * 起始创建时间
   */
  beginCreationTime?: any;
  /**
   * 结束创建时间
   */
  endCreationTime?: any;
}
