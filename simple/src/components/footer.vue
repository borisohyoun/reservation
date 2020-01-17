<template>
    <div>
        <ul class="footer">
    
                <!-- <button v-on:click="calText" >
                    <i class="far fa-clock"></i>
                </button>
            <li v-on:mouseover="github" class="fab fa-github"></li>
            <li v-on:mouseover="blog" class="fas fa-rss-square"></li>
            <li v-on:mouseover="contact" class="fas fa-mobile-alt"></li>
            <li v-on:mouseover="goTop" class="fas fa-arrow-up"></li> -->
        </ul>
    </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return{
            cal: false,
            hover: false,
        }
    },
    methods:{
        calText:function(event){
            alert('hello');
        }
    }
}
</script>
<style scoped>
    div {
        display: inline-block;
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