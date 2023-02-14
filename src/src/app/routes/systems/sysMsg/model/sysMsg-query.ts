import { QueryParameter } from '@dcsoft/util';

/**
 * 系统消息查询参数
 */
export class SysMsgQuery extends QueryParameter {
  /**
   * 消息标识
   */
  msgId?: any;
  /**
   * 消息名称
   */
  name?: any;
  /**
   * 消息标题
   */
  title?: any;
  /**
   * 语言
   */
  language?: any;
  /**
   * 消息内容
   */
  content?: any;
  /**
   * 排序
   */
  sortId?: any;
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
