import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import around from '@/components/around'
import food from '@/components/food'
import reservation from '@/components/reservation'
import detail from '@/components/detail'
import cart from '@/components/cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/mainpage',
      name: 'mainpage',
      component: mainpage
    },
    {
      path: '/around',
      name: 'around',
      component: around
    },
    {
      path: '/food',
      name: 'food',
      component: food
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: reservation
    },
    {
      path: '/detail/:contentId',
      name: 'detail',
      component: detail
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
