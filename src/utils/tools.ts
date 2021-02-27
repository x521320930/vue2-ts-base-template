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

const deviceCore = {
  _ua: navigator.userAgent,
  _detect: (kernel: string) => {
    const reg = new RegExp(kernel, 'img')
    return reg.test(deviceCore._ua)
  }
}

/**
 * @describe 判断设备类型
 */
export const device = {
  isIOS: () => {
    return deviceCore._detect('iPhone|iPad|iPod|iOS|mac os')
  },
  isAndroid: () => {
    return deviceCore._detect('Android')
  },
  isWeixin: () => {
    return deviceCore._detect('MicroMessenger')
  },
  isUCBrowser: () => {
    return deviceCore._detect('UCBrowser')
  },
  isQQBrowser: () => {
    return deviceCore._detect('QQBrowser')
  }
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
