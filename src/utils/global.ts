/**
 * @author  x521320930@gmail.com
 * @description 对Vue-propoType 扩展
 */
import $api from '@/api'
import { VueConstructor } from 'vue/types/vue'

const install = function (Vue: VueConstructor) {
  Vue.prototype.$api = $api
}
export default {
  install
}
