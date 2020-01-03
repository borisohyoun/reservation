<template>
    <div class="knock_wrap">
        <div class=knockName>dnddo</div> 
        <router-view/>   
        <Navigation></Navigation>
        <div class="child_wrap">
            <!-- 이게 아마도 a 태그가 아니고 위에 링크랑 연결해서 v-bind로 하는거로 알고있는데  -->
            <router-link to="/food" class="food"> <img v-bind:src="images.food"/>food</router-link>
            <router-link to="/drink" class="drink"><img v-bind:src="images.drink"/>drink</router-link>
            <router-link to="/around" class="around"><img v-bind:src="images.around"/>around</router-link>
            <router-link to="/reservation" class="reservation"><img v-bind:src="images.reserve"/>예약하기 </router-link>
        </div>
        <ul class="footer">
            <li><i class="far fa-clock"></i></li>
            <li>GITHUB:borisohyoum@gmail.com</li>
            <li>BLOG:</li>
            <li><i class="fas fa-phone-alt"></i></li>
        </ul>
        <!-- <around></around>
        <drink></drink>
        <food></food>
        <reservation></reservation> -->
    </div>
</template>

<script>
// import around from './components/around.vue'
// import drink from './components/drink.vue'
// import food from './components/food.vue'
// import reservation from './components/reservation.vue'
import Navigation from '././Navigation.vue'

export default{
    name:'knock',
    props:["item"],
    components:{
        'Navigation':Navigation
    },
    data(){
        return{
            images:{
                food:require('@/assets/IMG_5290.jpeg'),
                drink:require('@/assets/apple.jpg'),
                around:require('@/assets/lboricat.jpg'),
                reserve:require('@/assets/nanacat.jpg'),
            }
        }
        
    }
}
</script>

<style>
.knock_wrap{
    border:2px solid blue;
    width:90%;
    margin: 2rem auto;
    min-width:900px;
}
.knockName{
    bordeR:2px solid green;
    text-align: center;
    font-size: 3rem;
    margin: 0  0 2rem 0;
    
}

.child_wrap{
    border:2px solid black;
    margin:2rem 0; 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    grid-auto-rows: minmax(100px, auto);
}
.child_wrap>a{
    
}
.child_wrap img{
     width: 200px;
}
.reservation{
    border:2px solid blue;
    grid-column: 2/4;
    grid-row: 3/5;
    background-color: yellow;
}
.food{
    border:2px solid violet;
    grid-column: 2;
    grid-row: 1 / 3;
    background-size: contain;
    background-color: skyblue;
}
.drink{
    border:2px solid aqua;
    grid-column: 3;
    grid-row: 1 / 3;
    background-color: springgreen;

}
.around{
    border:2px solid slateblue;
    grid-column: 1;
    grid-row: 1/5;
    background-color:mediumvioletred;
}
</style>