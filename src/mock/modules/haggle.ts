/**
 * @author  x521320930@gmail.com
 * @describe 砍价需求Mock
 */

// 获取微信用户信息
export const wx_weChatUser = () => {
  const url = '/gmcf/v1/h5/weixin/weChatUser'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 商城首页
export const haggle_index = () => {
  const url = '/gmcf/v1/h5/mall/activity/bargain/index'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 砍价发起页数据加载
export const haggle_initiate_get = () => {
  const url = '/gmcf/v1/h5/mall/activity/bargain/initiate/get'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 发起砍价
export const haggle_initiate = () => {
  const url = '/gmcf/v1/h5/mall/activity/bargain/initiate'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 我的砍价列表数据加载
export const haggle_bargain_list = () => {
  const url = '/gmcf/v1/h5/mall/activity/bargain/list'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 砍价详情页(进度页)
export const haggle_bargain_detail = () => {
  const url = '/gmcf/v1/h5/mall/activity/bargain/detail'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 助力砍价
export const haggle_bargain_helpBargain = () => {
  const url = '/gmcf/v1/h5/mall/activity/bargain/helpBargain'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 获取省市区级联数据
export const haggle_allLocationCode = () => {
  const url = '/gmcf/v1/h5/location/allLocationCode'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 保存或修改当前地址
export const haggle_address_save = () => {
  const url = '/gmcf/v1/h5/mall/address/save'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 查询用户配送地址列表
export const haggle_address_list = () => {
  const url = '/gmcf/v1/h5/mall/address/list'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 删除配送地址
export const haggle_address_delete = () => {
  const url = '/gmcf/v1/h5/mall/address/delete'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 用来验证用户是否注册
export const haggle_userInfo = () => {
  const url = '/gmcf/h5/v2/userInfo/getUserInfo'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 发送验证码
export const haggle_getSmsCode = () => {
  const url = '/gmcf/h5/v1/unitedPass/getSmsCode'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 图形验证码
export const haggle_getImageCode = () => {
  const url = '/gmcf/v1/h5/unitedPass/getImageCode'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 短信登录
export const haggle_smsLogin = () => {
  const url = '/gmcf/v1/h5/unitedPass/smsLogin'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}

// 短信注册
export const haggle_smsReg = () => {
  const url = '/gmcf/h5/v1/unitedPass/smsReg'
  const type = 'post'
  const template = {
    resultMsg: '',
    resultCode: '1000'
  }
  return {
    url,
    type,
    template
  }
}
