import { TreeQueryParameter } from '@dcsoft/util';

/**
 * 模块查询参数
 */
export class ModuleQuery extends TreeQueryParameter {
  /**
   * 标识
   */
  resourceId?: any;
  /**
   * 应用程序标识
   */
  applicationId?: any;
  /**
   * 角色标识
   */
  roleId?: any;
  /**
   * 资源标识
   */
  uri?: any;
  /**
   * 资源名称
   */
  name?: any;
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
