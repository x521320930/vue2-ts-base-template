/**
 * @author  x521320930@gmail.com
 * @describe 对Vue-propoType 进行声明
 */
import { Api } from './interface/api'
declare module 'vue/types/vue' {
  interface Vue {
    readonly $api: Api;
  }
}
