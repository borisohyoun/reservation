<template>
<div>
    <div class="child_wrap" v-bind:style="{backgroundImage:'url(' + images.home + ')',backgroundSize: 'cover',backgroundRepeat:'no-repeat',opacity:'0.5',height:'600px'}" alt="main wrap pic">
            <router-link to=/food class="come_pic menu">
            <img v-bind:src="images.menu"/> 
            <span class="over_text">메뉴보기</span>
            </router-link>

            <span class="mascot"><img v-bind:src="images.mascot"/></span>
            
            <router-link to="/around" class="come_pic around">
            <!-- <img v-bind:src="images.around"/>  -->
            <span class="over_text">둘러보기</span>
            </router-link>
            
            <router-link to="/reservation" class="come_pic reservation">
            <img v-bind:src="images.reserve"/> 
            <span class="over_text">예약하기</span> 
            </router-link>
        </div>
</div>
</template>
<script>
export default {
    name:'Mainpage',
    data(){
            return{
                images:{
                    mascot:require('@/assets/mascot.png'),
                    menu:require('@/assets/bev1_cup.png'),
                    around:require('@/assets/around1.jpg'),
                    reserve:require('@/assets/go_reservation.png'),
                    home:require('@/assets/home.jpg'),
                    aroundBack:require('@/assets/around_back.png')
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
    grid-template-columns: repeat(4, 280px);
    grid-gap: 50px;
    grid-template-rows: repeat(2,275px);
}
.child_wrap>*{
    position: relative;
    /* border:2px solid green; */
}
.reservation{
    grid-column: 2;
    grid-row: 2/3;
    border:2px solid red;
}
.reservation img{
    width:100px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    top: 3px;

}
.mascot{
    grid-column: 4;
    grid-row: 1 / 2;
    overflow: hidden;
}
.mascot img{
    width: 200px;
    height: 200px;
    position: absolute;
    top: 20px;

}
.menu{
    grid-column: 1;
    grid-row: 2 / 3;
    border:2px solid gold;
}
.menu img{
    width:90px;
    height: 120px;
    float: right;
}
.around{
    grid-column: 3;
    grid-row: 2/3;
    border:2px solid skyblue;

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