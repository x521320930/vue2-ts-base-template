/**
 * @author  x521320930@gmail.com
 * @description  // 通用方法
 */
import { IsValidInterface } from '@/interface/global'

/**
 * @describe 生成具体树形结构的对象
 */
export function formTree (nodes: Array<any>, id: any, link: number | string): Array<any> {
  return nodes
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: formTree(item, item.id, link) }))
}

/**
 * @describe TS需要用索引操作符 才能进行 data[key]
 */
export const isValidKey: IsValidInterface = (data, key) => {
  return data[key]
}

/**
 * 判断字符串是否为空
 * @param {*} property
 */
export function isEmpty (property: any) {
  return property === null || property === '' || typeof property === 'undefined'
}
