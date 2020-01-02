<template>
    <div class="knock_wrap">
        <div class=knockName>dnddo</div>    
        <ul class="navigation">
            <li v-for="item in navList" >
                <i class="childNavList"></i>    
            <a> {{ item.name }} </a>
            </li>  
        </ul>
        <div class="child_wrap">
            <!-- 이게 아마도 a 태그가 아니고 위에 링크랑 연결해서 v-bind로 하는거로 알고있는데  -->
            <a href="/" class="food"> <img v-bind:src="images.food"/>food</a>
            <a href="/" class="drink"><img v-bind:src="images.drink"/>drink</a>
            <a href="/" class="around"><img v-bind:src="images.around"/>around</a>
            <a href="/" class="reservation"><img v-bind:src="images.reserve"/>예약하기 </a>
        </div>
        <ul class="footer">
            <li>TEL:010-5426-3424</li>
            <li>GITHUB:borisohyoum@gmail.com</li>
            <li>BLOG:</li>
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

export default{
    props:["item"],
    components:{
        // 'around':around,
        // 'drink':drink,
        // 'food':food,
        // 'reservation':reservation
    },
    data(){
        return{
            navList:[
                { url: "/", name: "둘러보기" },
                { url: "/", name: "메뉴소개" },
                { url: "/", name: "예약하기" },
            ],
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

<style scoped>
.knock_wrap{
    border:2px solid blue;
    margin: 2rem 4rem;
}
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
.navigation li{
    flex:1;
    border:2px solid orange;
    list-style:none;
    text-align: center;
    padding:10px 0;
    font-size: 1.3rem;
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