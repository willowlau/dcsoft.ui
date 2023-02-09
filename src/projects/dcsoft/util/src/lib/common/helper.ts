//============== 公共操作=========================
//Copyright 2023 何镇汐
//Licensed under the MIT license
//================================================
import { DES, enc, mode, pad } from "crypto-js";
import * as _ from "lodash";
import * as moment from "moment";
import { UUID } from "./internal/uuid";

/**
 * 是否未定义
 * @param value 值
 */
export let isUndefined = (value): boolean => {
  return typeof value === "undefined";
};

/**
 * 是否字符串
 * @param value 值
 */
export let isString = (value: any): boolean => {
  return typeof value === "string";
};

/**
 * 是否空值，当值为undefined、null、空对象,空字符串、空Guid时返回true，其余返回false
 * @param value 值
 */
export let isEmpty = (value): boolean => {
  if (typeof value === "number") return false;
  if (typeof value == "boolean") return false;
  if (value && value.trim) value = value.trim();
  if (!value) return true;
  if (value === "00000000-0000-0000-0000-000000000000") return true;
  return _.isEmpty(value);
};

/**
 * 是否数字，字符串"1"返回true
 * @param value 值
 */
export let isNumber = (value): boolean => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

/**
 * 转换为数值
 * @param value 输入值
 * @param precision 数值精度，即小数位数，可选值为0-20
 * @param isTruncate 是否截断，传入true，则按精度截断，否则四舍五入
 */
export let toNumber = (value, precision?, isTruncate?: boolean) => {
  if (!isNumber(value)) return 0;
  value = value.toString();
  if (isEmpty(precision)) return parseFloat(value);
  if (isTruncate) return parseFloat(value.substring(0, value.indexOf(".") + parseInt(precision) + 1));
  return parseFloat(parseFloat(value).toFixed(precision));
};

/**
 * 转换为字符串
 * @param value 输入值
 */
export let toString = (value: any): string => {
  return _.toString(value).trim();
};

/**
 * 转换为布尔值
 * @param value 输入值
 */
export let toBool = (value: any): boolean => {
  if (value === true) {
    return true;
  }
  const strValue = toString(value).toLowerCase();
  if (strValue === "1") {
    return true;
  }
  if (strValue === "true") {
    return true;
  }
  if (strValue === "是") {
    return true;
  }
  if (strValue === "yes") {
    return true;
  }
  return strValue === "ok";
};

/**
 * 是否数组
 * @param value 值
 */
export let isArray = (value: any): boolean => {
  return Array.isArray(value);
};

/**
 * 是否空数组,undefined和null返回false,[]返回true
 * @param value 值
 */
export let isEmptyArray = (value: any): boolean => {
  return isArray(value) && value.length === 0;
};

/**
 * 获取数组中第一个
 * @param array 数组
 */
export let first = <T>(array: any): T => {
  return _.first<T>(array)!;
};

/**
 * 获取数组中最后一个
 *
 * @param array 数组
 */
export let last = <T>(array: any): T => {
  return _.last<T>(array)!;
};

/**
 * 创建唯一标识
 */
export let uuid = (): string => {
  return UUID.UUID();
};

/**
 * 是否有效日期
 * @param date 日期
 */
export let isValidDate = (date: string): boolean => {
  return moment(getValidDate(date)).isValid();
};

/**
 * 转换为日期
 * @param date 日期，字符串日期范例：2001-01-01
 */
export let toDate = (date: string): Date => {
  return moment(getValidDate(date)).toDate();
};

/**
 * *获取有效的日期字符串，对无效日期补全前导0，不支持毫秒,
 * 范例：2000-1-1 1：2：3，返回2000-01-01 01:02:03
 * @param date 日期
 */
export let getValidDate = (date: string) => {
  if (!date) {
    return date;
  }
  if (date.indexOf('-') <= 0) {
    return date;
  }
  const regex = /(\d{4})-(\d{1,2})-(\d{1,2})(?:(?:\s+)(\d{1,2}):(\d{1,2}):?(\d{1,2})?)?/;
  if (!regex.test(date)) {
    return date;
  }
  const dateSegment = date.match(regex);
  if (!dateSegment) {
    return date;
  }
  const year = dateSegment[1];
  let month = dateSegment[2];
  let day = dateSegment[3];
  let hour = dateSegment[4];
  let minute = dateSegment[5];
  let second = dateSegment[6];
  month = month.length === 1 ? `0${month}` : month;
  day = day.length === 1 ? `0${day}` : day;
  let result = `${year}-${month}-${day}`;
  if (hour && minute) {
    hour = hour.length === 1 ? `0${hour}` : hour;
    minute = minute.length === 1 ? `0${minute}` : minute;
    result += ` ${hour}:${minute}`;
  }
  if (second) {
    second = second.length === 1 ? `0${second}` : second;
    result += `:${second}`;
  }
  return result;
};

/**
 * 通用泛型转换
 * @param value 值
 */
export let to = <T>(value: any): T => {
  return value as T;
};

/**
 * 从数组中移除子集
 * @param source 源数组
 * @param predicate 条件
 */
export let remove = <T>(source: Array<T>, predicate: (value: T) => boolean): Array<T> => {
  return _.remove(source, t => predicate(t));
};

/**
 * 添加项到数组
 * @param source 源数组
 * @param items 项
 */
export let addToArray = <T>(source: T[], items: any): T[] => {
  if (isEmpty(items)) {
    return source;
  }
  if (!items.length) {
    source.push(items);
    return source;
  }
  items.forEach((item: any) => {
    if (isEmpty(item)) {
      return;
    }
    source.push(item);
  });
  return source;
};

/**
 * 清空数组
 * @param array 数组
 */
export let clear = (array: any): void => {
  if (array && array.length) {
    array.length = 0;
  }
};

/**
 * 泛型集合转换
 * @param input 以逗号分隔的元素集合字符串，范例: 1,2
 */
export let toList = <T>(input: string): T[] => {
  const result = new Array<T>();
  if (!input) {
    return result;
  }
  const array = input.split(',');
  array.forEach(value => {
    if (!value) {
      return;
    }
    result.push(to<T>(value));
  });
  return result;
};

/**
 * 获取差集
 * @param source 源集合
 * @param target 目标集合
 * @param property 比较属性
 */
export let except = <T>(source: T[], target: T[], property?: (t: T) => any): T[] => {
  return _.differenceBy(getArray(source), getArray(target), property!);
};

/**
 * 获取差集
 * @param source 源集合
 * @param target 目标集合
 * @param comparator 比较器
 */
export let exceptWith = <T>(source: T[], target: T[], comparator?: (s: any, t: any) => boolean): T[] => {
  return _.differenceWith(getArray(source), getArray(target), comparator!);
};

/**
 * 获取集合
 */
function getArray<T>(array: any): T[] {
  const list = new Array<T>();
  if (array.length === undefined) {
    list.push(array);
    return list;
  }
  return array as T[];
}

/**
 * 合并集合
 * @param source 源集合
 * @param target 目标集合
 */
export let concat = <T>(source: T[], target: T[]) => {
  return _.concat(source, target);
};

/**
 * 去重复
 * @param source 源集合
 * @param property 属性
 */
export let distinct = <T>(source: T[], property?: (t: T) => any) => {
  return _.uniqBy(source, property!);
};

/**
 * 截断字符串,范例：原始字符串为abcd,保留长度传入2，则返回 ab...
 * @param input 原始字符串
 * @param length 截断后保留的长度
 */
export function truncate(input: string, length?: number): string {
  return _.truncate(input, { length: length! + 3 });
}

/**
 * 插入到数组
 * @param source 数组
 * @param item 项
 * @param index 索引
 */
export function insert(source: any[], item: any, index?: number): any[] {
  if (isUndefined(source) || source == null) {
    return [];
  }
  if (isUndefined(index)) {
    source.push(item);
    return source;
  }
  source.splice(index!, 0, item);
  return source;
}

/**
 * 移除起始字符串
 * @param source 值
 * @param start 要移除的值
 */
export let trimStart = (value: string, start: string) => {
  return _.trimStart(value, start);
};

/**
 * 移除末尾字符串
 * @param source 值
 * @param end 要移除的值
 */
export let trimEnd = (value: string, end: string) => {
  return _.trimEnd(value, end);
};

/**
 * 获取地址
 * @param url 请求地址
 * @param host 主机
 * @param path 路径
 */
export function getUrl(url: string, host: string = null, path: string = null) {
  url = getHostUrl(url, host);
  if (!url) return null;
  if (path) {
    url = trimEnd(url, "/");
    path = trimStart(path, "/");
    return `${url}/${path}`;
  }
  return url;
}

/**
 * 获取地址
 */
function getHostUrl(url: string, host: string) {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  host = trimEnd(host, "/");
  if (url.startsWith("/")) {
    if (host) return `${host}${url}`;
    return url;
  }
  if (host) return `${host}/api/${url}`;
  return `/api/${url}`;
}

/**
 * 分组
 * @param source 集合
 * @param property 分组属性
 */
export let groupBy = <T>(source: T[], property?: (t: T) => any): Map<string, T[]> => {
  let groups = _.groupBy(source, property);
  let result = new Map<string, T[]>();
  for (var key in groups) {
    if (!key) continue;
    result.set(
      key,
      groups[key].map(t => <T>t)
    );
  }
  return result;
};

/**
 * 判断对象上是否存在指定属性,当属性值不为undefined有效,直接属性和继承属性均可
 * @param obj 对象
 * @param propertyName 属性名称
 */
export function hasProperty(obj, propertyName: string): boolean {
  return _.hasIn(obj, propertyName);
}

/**
 * 复制对象
 * @param obj 对象
 */
export let clone = <T>(obj: T): T => {
  return _.cloneDeep(obj);
};

/**
 * 将源对象赋值给目标对象
 * @param destination 目标对象
 * @param source 源对象
 */
export let assign = (destination, source) => {
  return _.assign(destination, source);
};

/**
 *  格式化日期
 * @param datetime 日期
 * @param format 格式化字符串，范例：YYYY-MM-DD,可选值：(注意：区分大小写)
 * (1) 年: YYYY
 * (2) 月: MM
 * (3) 日: DD
 * (4) 时: HH
 * (5) 分: mm
 * (6) 秒: ss
 * (7) 毫秒: SSS
 */
export let formatDate = (datetime, format: string = "YYYY-MM-DD HH:mm:ss"): string => {
  let date = moment(datetime);
  if (!date.isValid()) return "";
  return date.format(format);
};

/**
 * 转换为json字符串
 * @param value 值
 */
export let toJson = (value): string => {
  return JSON.stringify(value);
};

/**
 * json字符串转换为对象
 * @param json json字符串
 */
export let toObjectFromJson = <T>(json: string): T => {
  return JSON.parse(json);
};

/**
 * 获取标识列表
 * @param data 数据
 */
export function getIds(data) {
  if (!data) return null;
  if (!data.map) return data.id;
  return data.map(t => t.id);
}

/**
 * 获取文件扩展名,范例:a.jpg,返回.jpg
 *
 * @param name 文件名
 */
export function getExtension(name: string): any {
  if (!name) {
    return null;
  }
  return `.${name.replace(/.+\./, '')}`;
}

/**
 * 获取今天日期
 */
export function getTodayDate(): string {
  return moment().format('YYYY-MM-DD');
}

/**
 * 获取当前时间
 */
export function getDateTime(): string {
  return moment().format('YYYY-MM-DD HH:mm:ss');
}

/**
 * 当前时间加上指定的小时返回字符串
 *
 * @param hour 增加的小时
 */
export function nowDateTimeAddHour(hour: number): string {
  return moment().add(hour, 'hours').format('YYYY-MM-DD HH:mm:ss');
}

/**
 * 当前时间减去指定的小时返回字符串
 *
 * @param hour 增加的小时
 */
export function nowDateTimeSubHour(hour: number): string {
  return moment().subtract(hour, 'hours').format('YYYY-MM-DD HH:mm:ss');
}

/**
 * 当前时间加上指定的年返回字符串
 *
 * @param year 增加的年
 */
export function nowDateAddYear(year: number): string {
  return moment().add(year, 'years').format('YYYY-MM-DD');
}

/**
 * 获取本年初日期
 */
export function getStartOfYear(): moment.Moment {
  return moment().startOf('year');
}

/**
 * 获取本年末日期
 */
export function getEndOfYear(): moment.Moment {
  return moment().endOf('year');
}

/**
 * 获取本月初日期
 */
export function getStartOfMonth(): moment.Moment {
  return moment().startOf('month');
}

/**
 * 获取本月末日期
 */
export function getEndOfMonth(): moment.Moment {
  return moment().endOf('month');
}

/**
 * 获取本周初日期
 */
export function getStartOfWeek(): moment.Moment {
  return moment().startOf('week').add(1, 'day');
}

/**
 * 获取本周末日期
 */
export function getEndOfWeek(): moment.Moment {
  return moment().endOf('week').add(1, 'day');
}

/**
 * 日期是否在今天之前
 *
 * @param value 日期值
 */
export function isBeforeToday(value: Date): boolean {
  const date = formatDate(value);
  const today = formatDate(new Date());
  return moment(date).isBefore(today);
}

/**
 * 日期是否在明天之前
 *
 * @param value 日期值
 */
export function isBeforeTomorrow(value: Date): boolean {
  const date = formatDate(value);
  const tomorrow = moment().add(1, 'day').format('YYYY-MM-DD');
  return moment(date).isBefore(tomorrow);
}

/**
 * 是否图片
 *
 * @param name 文件名称
 */
export function isImage(name: string): boolean {
  const extension = getExtension(name);
  switch (extension) {
    case '.jpg':
    case '.jpeg':
    case '.png':
    case '.gif':
    case '.bmp':
      return true;
    default:
      return false;
  }
}

/**
 * DES加密
 *
 * @param data 待加密字符串
 * @param key 密钥
 */
export function desEncrypt(data: string, key: string): string {
  const keyHex = enc.Utf8.parse(key);
  const encrypted = DES.encrypt(data, keyHex, {
    mode: mode.ECB,
    padding: pad.Pkcs7
  });
  return encrypted.toString();
}

/**
 * DES解密
 *
 * @param data 待解密字符串
 * @param key 密钥
 */
export function desDecrypt(data: string, key: string): string {
  const keyHex = enc.Utf8.parse(key);
  const decrypted = DES.decrypt(enc.Base64.parse(data).toString(), keyHex, {
    mode: mode.ECB,
    padding: pad.Pkcs7
  });

  return decrypted.toString(enc.Utf8);
}
