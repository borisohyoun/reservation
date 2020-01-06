<template>
  <div id="app" class="container">
    <knock></knock>
  </div>
</template>

<script>
import knock from './components/knock.vue'
// import around from './components/around.vue'
// import menu from './components/menu.vue'
// import reservation from './components/reservation.vue'


export default {
  name: 'app',
  components:{
    'knock':knock,
    // 'around':around,
    // 'menu':menu,
    // 'reservation':reservation
  }

}
</script>

<style>

</style>
