import { ViewModel } from '@dcsoft/util';

/**
 * 身份资源参数
 */
export class IdentityResourceViewModel extends ViewModel {
  /**
   * 资源标识
   */
  uri: any;
  /**
   * 显示名称
   */
  name: any;
  /**
   * 描述
   */
  remark: any;
  /**
   * 必选
   */
  required: any;
  /**
   * 强调
   */
  emphasize: any;
  /**
   * 发现文档中显示
   */
  showInDiscoveryDocument: any;
  /**
   * 启用
   */
  enabled: any;
  /**
   * 用户声明
   */
  claims: any;
  /**
   * 用户声明
   */
  claimsDisplay: any;
  /**
   * 排序号
   */
  sortId: any;
  /**
   * 创建时间
   */
  creationTime: any;
  /**
   * 创建人标识
   */
  creatorId: any;
  /**
   * 最后修改时间
   */
  lastModificationTime: any;
  /**
   * 最后修改人标识
   */
  lastModifierId: any;
  /**
   * 版本号
   */
  version: any;
}
