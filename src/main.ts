import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGlobal from '@/utils/global'
import { Toast, Dialog, Popup } from 'vant'
import '@/styles/index.scss'

import Mock from '@/mock/index'

Mock()

Vue.config.productionTip = false

Toast.setDefaultOptions({ position: 'bottom' })

Vue.use(VueGlobal)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Popup)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
