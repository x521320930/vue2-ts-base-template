/**
 * @author  x521320930@gmail.com
 * @describe 全局通用 接口存放处
 */

/**
 * @describe TS需要用索引操作符 才能进行 data[key]
 */
export interface IsValidInterface {
  <T, K extends keyof T> (ENV: T, key: K): T[K];
}
