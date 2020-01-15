<template>
    <div class="navigation_wrap">
        <div class=knockName><router-link to="/Mainpage"> Hello World</router-link></div> 
        <nav class="navigation">
            <router-link v-for="routes in links"
                        v-bind:key="routes.id"
                        v-bind:to="`${routes.page}`">
                        {{ routes.text }}
            </router-link>
        </nav>
    </div>
</template>
<script>

export default {
    name: 'Navigation',
    data() { 
        return { 
            links: [ 
            
            { 
                id: 1,
                text: 'around', 
                page: '/around' 
            },
            { 
                id: 2,
                text: 'menu', 
                page: '/food' 
            }, 
            { 
                id: 3,
                text: 'reservation', 
                page: '/reservation' 
            }  
            ],
            path:{ 
                id: 0,
                text: 'mainpage', 
                page: '/Mainpage' 
            },

        } 
    }

}
</script>
<style scoped>
body a{
    font-family: 'Ma Shan Zheng', cursive;
    color:rgba(20, 20, 20, 0.7);
    letter-spacing: 2px;
}
.navigation_wrap{
    margin: 0 0 1rem 0;
}
.knockName{
    text-align: center;
    font-size: 3rem;
    margin: 0  0 1rem 0;
    font-family: 'Ma Shan Zheng', cursive;
    color:rgba(20, 20, 20, 0.7);
}
    .navigation{
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
}
.navigation>*{
    border:1px solid  #004d00;
    flex:1;
    text-decoration: none;
    text-align: center;
    padding:0;
    font-size: 2rem;
    font-family: 'Ma Shan Zheng', cursive;
    color:rgba(20, 20, 20, 0.7);
}
</style>