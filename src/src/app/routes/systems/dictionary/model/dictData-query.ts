import { TreeQueryParameter } from '@dcsoft/util';

/**
 * 字典数据查询参数
 */
export class DictDataQuery extends TreeQueryParameter {
  /**
   * 字典标识
   */
  dictId?: any;
  /**
   * 编码
   */
  code?: any;
  /**
   * 名称
   */
  name?: any;
  /**
   * 类型
   */
  type?: any;
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
