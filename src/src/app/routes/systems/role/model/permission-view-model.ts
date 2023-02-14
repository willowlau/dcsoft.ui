import { ViewModel } from '@dcsoft/util';

/**
 * 权限参数
 */
export class PermissionViewModel extends ViewModel {
  /**
   * 应用程序标识
   */
  applicationId: any;
  /**
   * 应用程序名称
   */
  applicationName: any;
  /**
   * 角色标识
   */
  roleId: any;
  /**
   * 角色名称
   */
  roleName: any;
  /**
   * 资源标识列表
   */
  resourceIds: any;
  /**
   * 拒绝
   */
  isDeny: any;
}
