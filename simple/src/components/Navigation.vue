<template>
    <div>
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
                page: '/menu' 
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
.knockName{
    bordeR:2px solid green;
    text-align: center;
    font-size: 3rem;
    margin: 0  0 2rem 0;
    
}
    .navigation{
    border:2px solid red;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
}
.navigation>*{
    flex:1;
    border:2px solid orange;
    text-decoration: none;
    text-align: center;
    padding:10px 0;
    font-size: 1.3rem;
}
</style>