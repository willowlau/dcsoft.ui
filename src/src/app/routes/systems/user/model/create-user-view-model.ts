import { ViewModel } from '@dcsoft/util';

/**
 * 创建用户参数
 */
export class CreateUserViewModel extends ViewModel {
  /**
   * 用户名
   */
  userName: any;
  /**
   * 昵称
   */
  nickName: any;
  /**
   * 安全邮箱
   */
  email: any;
  /**
   * 用户类型
   */
  userType: any;
  /**
   * 安全手机
   */
  phoneNumber: any;
  /**
   * 密码
   */
  password: any;
  /**
   * 身份
   */
  userIdentity: any;
  /**
   * 备注
   */
  remark: any;
  /**
   * 角色
   */
  roleIds: any;
  /**
   * 部门标识
   */
  departmentId: any;
}
