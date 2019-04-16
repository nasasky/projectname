import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/hi/hi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi',
      name: 'Hi',
      component:  HelloWorld
     // component: () => import('@/view/hi/hi.vue')
    }

  ]
})
