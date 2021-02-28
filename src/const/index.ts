/**
 * @author  x521320930@gmail.com
 * @describe 存放一些静态变量
 */

/**
 * @param title String 标题
 * @param text String 描述
 * @description 养老金计算器页面_参加工作年份描述
 */
export const YEAR_WORK = {
  title: '参加工作年份',
  text:
    '一般人会在参加公共当年开始缴纳社保，但倘若您参加工作的年份与开始缴纳社保的年份不同，清输入开始缴纳社保的年份。'
}

/**
 * @param title 开始年份
 * @param text 结束年份
 * @description 养老金计算器页面_出生月份
 */
export const YEAR_BIRTH = (function (birth, today) {
  const yearArray = []
  for (let i = birth; i <= today; i++) {
    yearArray.push(i + '')
  }
  return yearArray
})(1960, new Date().getFullYear())

/**
 * @param title 开始年份
 * @param text 结束年份
 * @description 养老规则_滑块
 */
export const SCALE_VALUE = (function (max: number) {
  const scaleArray = []
  for (let i = 1; i <= max; i++) {
    const isMain = i === 1 ? true : i % 5 === 0
    scaleArray.push({ isMain, text: `${i}%` })
  }
  return scaleArray
})(20)

/**
 * @description 养老结果_charts图表
 */
export const CALCULATOR_RESULT_CHART = function (arr: Array<any>) {
  return {
    bar: {
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      colors: ['#FFD700', '#FFD700'],
      xAxis: {
        labels: {
          formatter: function () {
            const _this: any = this
            const arr = []
            arr[0] = '退休后每月养老金'
            arr[1] = '退休后每月理想养老金'
            return arr[_this.value]
          }
        }
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        }
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true,
            style: {
              color: '#FF6A6A'
            },
            formatter: function () {
              const _this: any = this
              return _this.y + '元'
            }
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [
        {
          data: [
            {
              y: arr[0],
              color: '#FF6A6A'
            },
            arr[1]
          ]
        }
      ]
    }
  }
}
