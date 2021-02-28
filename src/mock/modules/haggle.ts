/**
 * @author  x521320930@gmail.com
 * @describe 砍价需求Mock
 */
import { YEAR_BIRTH } from '@/const/index'
// 获取城市
export const cityPerick = () => {
  const url = '/pension/getProvinces'
  const type = 'get'
  const params = {
    code: '200',
    data: [
      {
        cityCode: '010',
        cityName: '北京市'
      },
      {
        cityCode: '011',
        cityName: '山西省'
      },
      {
        cityCode: '012',
        cityName: '天津'
      },
      {
        cityCode: '013',
        cityName: '绿洲'
      }
    ],
    msg: '成功'
  }
  return {
    url,
    type,
    template: params
  }
}

// 查询工作年限
export const pensionYears = () => {
  const url = '/pension/years'
  const type = 'get'
  const params = {
    code: '200',
    data: YEAR_BIRTH,
    msg: '成功'
  }
  return {
    url,
    type,
    template: params
  }
}

// 开始计算接口
export const pensionCalculator = () => {
  const url = '/pension/startCalcu'
  const type = 'post'
  const params = {
    code: '200',
    data: {
      yjtxqygz: '89,999,96',
      txhmyylj: '89,999,96',
      ylbzzs: '90',
      ylbzzsxc: '39495.08'
    },
    msg: '成功'
  }
  return {
    url,
    type,
    template: params
  }
}
