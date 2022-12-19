// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Input, Tabs, TabPane } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/tailwindcss.css'
import './style/iconfont/iconfont.css'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.use(Button)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(TabPane)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
