import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/index.vue'),
      meta: {
        title: '网址导航'
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/views/admin.vue'),
      meta: {
        title: '管理'
      }
    }
  ]
})
