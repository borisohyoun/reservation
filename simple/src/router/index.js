import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import knock from '@/components/knock'
import around from '@/components/around'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name:'knock',
      component:knock
    },
    {
      path: '/around',
      name:'around',
      component:around
    },
  ]
})
