import Vue from 'vue'
import Router from 'vue-router'
import GtPush from '@/components/GtPush'
import Index from '@/components/Index'
import Home from '@/components/Home'
import GTQueryMsg from '@/components/GTQueryMsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/Home',
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: Home
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
      ],
    },

  ]
})
