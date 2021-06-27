/**
 * @author  x521320930@gmail.com
 * @describe VueRouter
 */

import Vue from 'vue'
import VueRouter, { RouteConfig, Route } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: '机构信息',
    meta: { title: '机构信息', isTitle: true },
    component: () => import(/* webpackChunkName: "pension-calculator" */ '../views/info/index.vue')
  },
  {
    path: '/pension-calculator',
    name: '养老金计算器',
    meta: { title: '养老金计算器', isTitle: true },
    component: () => import(/* webpackChunkName: "pension-calculator" */ '../views/pension-calculator/index.vue')
  },
  {
    path: '/calculator-results',
    name: '计算结果',
    meta: { title: '计算结果', isTitle: true },
    component: () => import(/* webpackChunkName: "calculator-results" */ '../views/calculator-results/index.vue')
  },
  {
    path: '/pension-rule',
    name: '养老规则',
    meta: { title: '养老规则', isTitle: true },
    component: () => import(/* webpackChunkName: "pension-rule" */ '../views/pension-rule/index.vue')
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
