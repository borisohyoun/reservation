import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import mainpage from '@/components/mainpage'
import around from '@/components/around'
import menu from '@/components/menu'
import reservation from '@/components/reservation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mainpage',
      name:'mainpage',
      component:mainpage
    },
    {
      path: '/around',
      name:'around',
      component:around
    },
    {
      path: '/menu',
      name:'menu',
      component:menu
    },
    {
      path: '/reservation',
      name:'reservation',
      component:reservation
    },

  ]
})
