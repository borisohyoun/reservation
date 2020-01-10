<template>
<div>
    <Navigation></Navigation>
    <div class="child_wrap">
            <router-link to=/food class="come_pic menu"><img v-bind:src="images.menu"/> <span class="over_text">메뉴보기</span></router-link>
            <span class="mascot"><img v-bind:src="images.mascot"/></span>
            <router-link to="/around" class="come_pic around"><img v-bind:src="images.around"/> <span class="over_text">둘러보기</span></router-link>
            <router-link to="/reservation" class="come_pic reservation"><img v-bind:src="images.reserve"/> <span class="over_text">예약하기</span> </router-link>
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
                    menu:require('@/assets/coffee.jpg'),
                    around:require('@/assets/around.jpg'),
                    reserve:require('@/assets/foods.jpg'),
                }
            }
            
        }  
}
</script>
<style scoped>
    .child_wrap{
    border:2px solid black;
    margin:2rem 0; 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    grid-template-rows: repeat(4,100px);
}
.child_wrap>*{
    position: relative;
    /* border:2px solid green; */
}
.child_wrap img{
    object-fit: fill;
    width: 100%;
    max-height: 100%;
}
.come_pic img{
    opacity: 90%;
}
.come_pic img:hover{
    opacity:70%;
}
.over_text:hover{

}
.reservation{
    grid-column: 2/4;
    grid-row: 3/5;

}
.mascot{
    grid-column: 2;
    grid-row: 1 / 3;

    border-radius: 50%;
    overflow: hidden;
}
.mascot img{
    /* width:300px;
    height: 300px; */
}
.menu{
    grid-column: 3;
    grid-row: 1 / 3;
}
.around{
    grid-column: 1;
    grid-row: 1/5;

}
.over_text{
    /* border:2px solid red;  */
    position:absolute;
    bottom:0;
    left:0;
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    color:rgba(0,0,0,0.8);
}
</style>