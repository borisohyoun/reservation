<template>
<div>
    <Navigation></Navigation>
    <div class="child_wrap">
            <router-link to="/menu" class="menu"><img v-bind:src="images.menu"/>menu</router-link>
            <span class="mascot"><img v-bind:src="images.mascot"/>hh</span>
            <router-link to="/around" class="around"><img v-bind:src="images.around"/>around</router-link>
            <router-link to="/reservation" class="reservation"><img v-bind:src="images.reserve"/>예약하기 </router-link>
    </div>
    <Footer></Footer>
</div>
</template>
<script>
export default {
    name:'Mainpage',
    data(){
            return{
                images:{
                    mascot:require('@/assets/IMG_5290.jpeg'),
                    menu:require('@/assets/apple.jpg'),
                    around:require('@/assets/lboricat.jpg'),
                    reserve:require('@/assets/nanacat.jpg'),
                }
            }
            
        }  
}
</script>
<style>
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
.mascot{
    border:2px solid brown;
    grid-column: 2/3;
    grid-row: 1 / 3;
    background-color: sandybrown;
    border-radius: 50%;
    overflow: hidden;
}
.mascot img{
    width:300px;
    height: 300px;
}
.menu{
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