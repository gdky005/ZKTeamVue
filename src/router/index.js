import Vue from 'vue'
import Router from 'vue-router'
import GtPush from '@/components/GtPush'
import Index from '@/components/Index'
import GTQueryMsg from '@/components/GTQueryMsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/GtPush',
      name: 'GtPush',
      component: GtPush
    },
    {
      path: '/GTQueryMsg',
      name: 'GTQueryMsg',
      component: GTQueryMsg
    }
  ]
})
