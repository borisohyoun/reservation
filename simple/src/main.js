// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { knock, around } from './components'

/* configs ... */

Vue.config.productionTip = false

// Vue.use(VueRouter); //vue router 확장기능 선언


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
