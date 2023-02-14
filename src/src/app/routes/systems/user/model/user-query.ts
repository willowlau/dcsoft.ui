import { QueryParameter } from '@dcsoft/util';

/**
 * 用户查询参数
 */
export class UserQuery extends QueryParameter {
  /**
   * 用户标识
   */
  userId?: any;
  /**
   * 部门标识
   */
  departmentId?: any;
  /**
   * 角色编号
   */
  roleId?: any;
  /**
   * 用户类型
   */
  userType?: any;
  /**
   * 排除的角色标识
   */
  exceptRoleId?: any;
  /**
   * 用户名
   */
  userName?: any;
  /**
   * 昵称
   */
  nickName?: any;
  /**
   * 安全邮箱
   */
  email?: any;
  /**
   * 邮箱已确认
   */
  emailConfirmed?: any;
  /**
   * 安全手机
   */
  phoneNumber?: any;
  /**
   * 手机已确认
   */
  phoneNumberConfirmed?: any;
  /**
   * 启用
   */
  enabled?: any;
  /**
   * 起始冻结时间
   */
  beginDisabledTime?: any;
  /**
   * 结束冻结时间
   */
  endDisabledTime?: any;
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
