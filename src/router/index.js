import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GtPush from '@/components/GtPush'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GtPush',
      component: GtPush
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
