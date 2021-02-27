/**
 * @author  x521320930@gmail.com
 * @describe  // 全局通用状态管理
 */

const global = {
  state: {
    isShowLoading: false
  },
  mutations: {
    SET_SHOW_LOADING: (state: any, data: boolean) => {
      state.isShowLoading = data
    }
  },
  actions: {}
}

export default global
