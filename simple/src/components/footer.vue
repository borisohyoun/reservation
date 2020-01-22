<template>
    <div>
        <ul class="footer">
            <li><a v-bind:href="git" class="fab fa-github"></a></li>
            <li><a v-bind:href="blog" class="fas fa-rss-square"></a></li>
            <li><a class="fas fa-mobile-alt"></a></li>
            <li><a v-bind:href="top" class="fas fa-arrow-up"></a></li> 
        </ul>
    </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return{
            git:'https://github.com/borisohyoun',
            blog:'https://blog.naver.com/sosonia01',
            top:'#'
        }
    }
}
</script>
<style scoped>
    .footer{
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 500;
    }
    .footer >li{
        border:1px solid darkgreen;
        list-style: none;
        background-color:whitesmoke;
        border-radius: 50%;
    }
    .footer a{
        padding:4px;
        color:darkgreen;
    }
    .fa, .fab, .fal, .far, .fas {
        font-size: 2rem;
    }
</style>