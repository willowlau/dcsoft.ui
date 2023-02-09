/**
 * 本地存储
 */
export class Store {
  /**
   * 设置对象
   *
   * @param key 名称
   * @param value 值
   */
  set(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  /**
   * 获取对象
   *
   * @param key 名称
   */
  get(key: string): string {
    return localStorage.getItem(key)!;
  }

  /**
   * 删除对象
   *
   * @param key 名称
   */
  remove(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * 清空对象
   */
  clear(): void {
    localStorage.clear();
  }
}
