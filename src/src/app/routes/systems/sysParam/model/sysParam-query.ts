import { QueryParameter } from '@dcsoft/util';

/**
 * 系统参数查询参数
 */
export class SysParamQuery extends QueryParameter {
  /**
   * 参数标识
   */
  paramId?: any;
  /**
   * 参数名称
   */
  paramName?: any;
  /**
   * 参数标题
   */
  paramTitle?: any;
  /**
   * 参数内容
   */
  paramValue?: any;
  /**
   * 参数类型
   */
  paramType?: any;
  /**
   * 排序
   */
  sortId?: any;
  /**
   * 是否可编辑
   */
  isEdit?: any;
  /**
   * 起始创建时间
   */
  beginCreationTime?: any;
  /**
   * 结束创建时间
   */
  endCreationTime?: any;
  /**
   * 创建人编号
   */
  creatorId?: any;
  /**
   * 起始最后修改时间
   */
  beginLastModificationTime?: any;
  /**
   * 结束最后修改时间
   */
  endLastModificationTime?: any;
  /**
   * 最后修改人编号
   */
  lastModifierId?: any;
}
