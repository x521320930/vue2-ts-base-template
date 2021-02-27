/**
 * @author  x521320930@gmail.com
 * @describe VueRouter
 */

import Vue from 'vue'
import VueRouter, { RouteConfig, Route } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/pension-calculator',
    name: '养老金计算器',
    meta: { title: '养老金计算器', isTitle: true },
    component: () => import(/* webpackChunkName: "pension-calculator" */ '../views/pension-calculator/index.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  scrollBehavior: () => {
    return { x: 0, y: 0 }
  },
  routes
})

/**
 * @describe 为跳转路由动态设置title变化
 */
router.beforeEach(async (to: Route, from: Route, next: any) => {
  if (to.meta && to.meta.isTitle) { document.title = to.meta.title }
  next()
})

export default router
