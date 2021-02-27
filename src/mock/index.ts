/**
 * @author  x521320930@gmail.com
 * @describe Mock入口
 */
import Mock from 'mockjs'
import * as haggle from './modules/haggle'
import { ENTRY_NODE_ENV } from '@/utils/config'

export default function () {
  Object.keys(haggle).forEach(key => {
    const h: any = haggle
    const { url, type, template } = h[key]()
    Mock.mock(ENTRY_NODE_ENV.AXIOS_BASE_URL + url, type, template)
  })
  return Mock
}
