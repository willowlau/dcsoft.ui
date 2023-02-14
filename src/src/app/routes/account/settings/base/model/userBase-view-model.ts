import { ViewModel } from '@dcsoft/util';

/**
 * 用户参数
 */
export class UserBaseViewModel extends ViewModel {
  /**
   * 用户名
   */
  userName: any;
  /**
   * 姓名
   */
  nickName: any;
  /**
   * 头像
   */
  avatar: any;
  /**
   * 安全邮箱
   */
  email: any;
  /**
   * 用户类型
   */
  userType: any;
  /**
   * 邮箱已确认
   */
  emailConfirmed: any;
  /**
   * 安全手机
   */
  phoneNumber: any;
  /**
   * 手机已确认
   */
  phoneNumberConfirmed: any;
  /**
   * 启用两阶段认证
   */
  twoFactorEnabled: any;
  /**
   * 启用
   */
  enabled: any;
  /**
   * 冻结时间
   */
  disabledTime: any;
  /**
   * 启用锁定
   */
  lockoutEnabled: any;
  /**
   * 锁定截止
   */
  lockoutEnd: any;
  /**
   * 登录失败次数
   */
  accessFailedCount: any;
  /**
   * 登录次数
   */
  loginCount: any;
  /**
   * 注册Ip
   */
  registerIp: any;
  /**
   * 上次登陆时间
   */
  lastLoginTime: any;
  /**
   * 上次登陆Ip
   */
  lastLoginIp: any;
  /**
   * 本次登陆时间
   */
  currentLoginTime: any;
  /**
   * 本次登陆Ip
   */
  currentLoginIp: any;
  /**
   * 备注
   */
  remark: any;
  /**
   * 创建时间
   */
  creationTime: any;
  /**
   * 创建人
   */
  creatorId: any;
  /**
   * 版本号
   */
  version: any;
  /**
   * 角色
   */
  roles: any;
}
