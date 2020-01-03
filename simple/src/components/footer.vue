<template>
    <div>
        <ul class="footer">
            <div>
            <li v-on:mouseover="cal" v-show ="!active" class="far fa-clock">
                <div v-show="active" v-on:mouseleave="mouseOut">
                    <div v-model="calText">{{ calText }}</div>
                </div>
            </li>
            </div>
            <li v-on:mouseover="github" class="fab fa-github"></li>
            <li v-on:mouseover="blog" class="fas fa-rss-square"></li>
            <li v-on:mouseover="contact" class="fas fa-mobile-alt"></li>
            <li v-on:mouseover="goTop" class="fas fa-arrow-up"></li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return{
            calText:'01054263424',
            active:false
        }
    },
    methods:{
        cal:function(event){
            
        },
        github:function(event){
            alert('borisohoyun')
        },
        blog:function(event){
            alert('http')
        },
        contact:function(event){
            alert('01054263424')
        },
        mouseOver:function(){
            this.active = true;
        },
        mouseOut:function(){
            this.active =false;
        }
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
</style>