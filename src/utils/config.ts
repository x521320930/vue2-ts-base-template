/**
 * @author  x521320930@gmail.com
 * @description 相关配置变量
 */

import { isValidKey } from '@/utils/tools'

/**
 * @param AXIOS_BASE_URL 统一AJAX请求默认路径
 * @param ROUTER_BASE 启用 history . 需要配置的参数
 */

const NODE_ENV = {
  development: {
    AXIOS_BASE_URL: '/dev-api',
    ROUTER_BASE: ''
  },
  test: {
    AXIOS_BASE_URL: `测试环境${1}`,
    ROUTER_BASE: ''
  },
  production: {
    AXIOS_BASE_URL: '开发环境',
    ROUTER_BASE: ''
  }
}

export const ENTRY_NODE_ENV = isValidKey(NODE_ENV, process.env.NODE_ENV)
