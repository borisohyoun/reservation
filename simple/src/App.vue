<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <knock></knock>
    <around></around>
  </div>
</template>

<script>
import knock from './components/knock.vue'
import around from './components/around.vue'

export default {
  name: 'app',
  components:{
    'knock':knock,
    'around':around

  }

}
</script>

<style>

</style>
