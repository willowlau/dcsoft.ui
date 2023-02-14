import { ViewModel } from '@dcsoft/util';

/**
 * 应用程序参数
 */
export class ApplicationViewModel extends ViewModel {
  /**
   * 应用程序类型
   */
  applicationType: any;
  /**
   * 应用程序编码
   */
  code: any;
  /**
   * 应用程序名称
   */
  name: any;
  /**
   * 启用
   */
  enabled: any;
  /**
   * 启用注册
   */
  registerEnabled: any;
  /**
   * 允许的授权类型
   */
  allowedGrantType: any;
  /**
   * 允许通过浏览器访问令牌
   */
  allowAccessTokensViaBrowser: any;
  /**
   * 允许的跨域来源
   */
  allowedCorsOrigins: any;
  /**
   * 需要同意
   */
  requireConsent: any;
  /**
   * 需要客户端密钥
   */
  requireClientSecret: any;
  /**
   * 客户端密钥列表
   */
  clientSecrets: any;
  /**
   * 认证重定向地址
   */
  redirectUri: any;
  /**
   * 注销重定向地址
   */
  postLogoutRedirectUri: any;
  /**
   * 允许的作用域
   */
  allowedScopes: any;
  /**
   * 访问令牌生命周期
   */
  accessTokenLifetime: any;
  /**
   * 备注
   */
  remark: any;
  /**
   * 创建时间
   */
  creationTime: any;
  /**
   * 创建人编号
   */
  creatorId: any;
  /**
   * 最后修改时间
   */
  lastModificationTime: any;
  /**
   * 最后修改人编号
   */
  lastModifierId: any;
  /**
   * 版本号
   */
  version: any;
}
