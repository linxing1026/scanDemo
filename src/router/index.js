import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      name: 'homepage',
      component: () => import('../views/HomePage')
    }
  ]
})
