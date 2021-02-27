/**
 * @author  x521320930@gmail.com
 * @description  // 正则存放处
 */

export const mobile = /^1\d{10}$/
export const idCard = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/
export const name = /[^\u4E00-\u9FA5|·.]/g
export const wxCode = /(https|http):\/\/.*\?code=.*(?=#)?/g
