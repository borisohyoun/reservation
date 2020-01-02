// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { knock, around } from './components'

/* configs ... */

Vue.config.productionTip = false

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: '/',
//     component: knock
//  },
//  {
//     path: '/around',
//     component: around
//  }
// ];
// // router 객체생성
// const router = new VueRouter({
// routes
// });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
