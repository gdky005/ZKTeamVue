import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import WXMoney from '@/components/WXMoney'
import Git from '@/components/Git'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
        }
      ],
    },
    {
      path: '/WXMoney',
      name: 'WXMoney',
      component: WXMoney
    },
    {
      path: '/Git',
      name: 'Git',
      component: Git
    }

  ]
})
