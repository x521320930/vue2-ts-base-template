/**
 * @describe  // 微信相关接口
 * @example 模块名称_接口 命名
 */

import { Params } from '@/interface/axios'
import Axios from '@/utils/axios'

// 查询工作年份
export const pensionYears = (params: Params) => {
  return Axios.get('/pension/years', params)
}

// 查询所有城市
export const pensionCity = (params: Params) => {
  return Axios.get('/pension/getProvinces', params)
}

// 点击开始计算接口
export const pensionCalculator = (params: Params) => {
  return Axios.post('/pension/startCalcu', params)
}

// 开始规划
export const pensionStartPlan = (params: Params) => {
  return Axios.post('/pension/startPlan', params)
}
