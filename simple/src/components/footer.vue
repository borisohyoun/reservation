<template>
    <div>
        <ul class="footer">
            <div>
            <button v-on:click="cal = !cal" >
                <i class="far fa-clock"></i>
            </button>
            <transition name ="fade">
                <p v-if="cal">010-5426-3424</p>
            </transition>
            </div>

            <li v-on:mouseover="github" class="fab fa-github"></li>
            <li v-on:mouseover="blog" class="fas fa-rss-square"></li>
            <li v-on:mouseover="contact" class="fas fa-mobile-alt"></li>
            <li v-on:mouseover="goTop" class="fas fa-arrow-up"></li>
            
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return{
            show: true
        }
    },
    methods:{
    }
}
</script>
<style scoped>
    div {
        display: inline-block;
        float: right;
    }
    .footer{
        border:2px solid yellow;
        display: table;
        padding: 0;
    }
    .footer >li{
        border:2px solid blue;
        list-style: none;
        text-align: center
    }
    .far,.fab,.fas {
        font-size:2rem;
        display: inline;
    }
    .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>