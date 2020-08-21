// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import request from './utils/request'
import config from './config/config'
import AppConfig from './data/app-config'
import {LoadingPlugin,ToastPlugin} from 'vux'

Vue.prototype.$ajax = request;
Vue.prototype.$config = config;

Vue.use(LoadingPlugin);
Vue.use(ToastPlugin)

AppConfig.getConfig()
  .then(res => {
    Object.assign(config, res)
  })

router.beforeEach((to, from , next) => {
  
  next()
})
router.afterEach((to, from) => {
  
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
