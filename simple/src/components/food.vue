<template>
<div>
    <div class="menu_container">
        <b-container fluid class="main_food" v-bind:style="{backgroundImage:'url(' + bgImage.bgFood + ')',backgroundSize: 'cover',background:'50% 50% no-repeat;'}">
            <b-row align-h="around">
                <b-col cols="2" class="ma_text">
                    <p>
                        Here we Are.<br>
                        Under the star
                    </p>
                </b-col>
                <b-col cols="9"  offset="1" class="ma_pic">
                    <img v-bind:src="menus.sand" alt="" class="eat_1">
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid class="main_drink" v-bind:style="{backgroundImage:'url(' + bgImage.bgDrink + ')',backgroundSize: 'cover',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'}">
            <b-row align-h="around" class="drink_fix">
                <b-col cols="4" class="dr_text">
                    <span class="big">Drink<br> Fresh!</span>
                    <p>상큼함을 마셔보세요
                    </p>
                </b-col>
                <b-col cols="8" class="bev_box">
                    <img v-bind:src="menus.mango" alt="" class="bev_1 ">
                    <img v-bind:src="menus.coffee" alt="" class="bev_2 ">
                    <img v-bind:src="menus.watermelon" alt="" class="bev_3 ">
                </b-col>
            </b-row>
        </b-container>
        
        <b-container fluid class="coffee_bean" v-bind:style="{backgroundImage:'url(' + bgImage.bgBean + ')',backgroundSize: 'cover',backgroundRepeat:'no-repeat'}">
            <b-row align-h="around">
                <b-col cols="3" class="bean">
                    <img v-bind:src="bean" alt="">
                </b-col>
                <b-col offset="1" cols="6" sm="6" class="bean_text">
                    <div>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <h1>Lorem, ipsum dolor.</h1>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum natus esse inventore rem?</h6>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid class="mascot" v-bind:style="{backgroundImage:'url(' + bgImage.bgMascot + ')',backgroundSize: 'cover',backgroundRepeat:'no-repeat'}">
            <b-row align-h="around">
                <b-col cols="4" class="mascot_circle">
                    <img v-bind:src="mascot.front" alt="" class="mascot_front">
                    <img v-bind:src="mascot.back" alt="" class="mascot_back">
                </b-col>
            </b-row>
        </b-container>
    </div>
</div>
</template>
<script>
export default {
    name:'food' ,
    data(){
        return{
            bgImage:{
                bgFood:require('@/assets/bev_bg.png'),
                bgDrink:require('@/assets/fav_prod.jpg'),
                bgBean:require('@/assets/new_coffee.jpg'),
                bgMascot:require('@/assets/store_bg.jpg')
            },
            menus:{
                watermelon:require('@/assets/bev1_cup.png'),
                coffee:require('@/assets/bev2_cup.png'),
                mango:require('@/assets/bev3_cup.png'),
                sand:require('@/assets/fav_sand.png')
            },
            bean:require('@/assets/new_bean.png'),
            mascot:{
                front:require('@/assets/store_exp_img01.png'),
                back:require('@/assets/store_exp_img02.png')
            }
    }
}
}
</script>
<style scope>
*{
    box-sizing: border-box;
}
    .menu_container{
        position:relative;
        overflow: hidden;
    }
    .menu_container>*>*{
        width:100%;
        margin: 0 auto;
        max-width: 1212px;
        position: relative;
    }
    .main_food{
        height: 649px;
        position: relative;
        background-color: #052b1d;
        overflow:hidden;
    }
    .ma_text{
        position: absolute;
        left:0;
        margin-top: 84px;
      } 
    .ma_text p {
        color:#997a00;
        font-weight:900;
        letter-spacing: 5px; 
        font-size: 3rem;
        font-family: 'Pacifico', cursive;
        writing-mode : vertical-rl;
    }
    .ma_pic{
        position: absolute;
        width: 600px;
        left: 50%;
        margin-left: -100px;
        margin-top: 24px; 
     }
    .eat_1{
        /* width:500px; */
        /* height:300px;
        position: absolute;
        left: 50%;
        margin-left: -100px;
        top:50%; */
        /* margin-top: -150px; */
    }
    .main_drink{
        height: 600px;
        overflow:hidden;
        position: relative;
    }
    .drink_fix{
        border:2px solid rebeccapurple;
        height:400px;
        margin-top: 100px;

    }
    .dr_text{
        color:white;
        font-size: 2rem;
    }
    .big{
        font-size: 7rem;
        font-weight: 700;
        line-height: 6rem;
    }
    .bev_box{
        position: relative;
        height:390px;
    }
    .bev_1{
        position:absolute;
        margin-left: 80px;
    }
    .bev_2{
        position:absolute;
        left: 50%;
    margin-left: -100px;
        }
    .bev_3{
        position:absolute;
        right:0;
    }
    .coffee_bean{
        height: 573px;
        overflow:hidden;
        position: relative;
    }
    .bean{
        position: absolute;
        top: 74px;
        left: 0;
    }
    .bean_text{
        position: absolute;
        top:154px;
        right:0;
    }
    .mascot{
        height: 390px;
        overflow:hidden;
        position: relative;
    }
    .mascot_circle{
        border:2px solid red; 
    }
    .mascot_front{
            height: 334px;
    width: 334px;
    transform-style: preserve-3d;
    position: absolute;
    transition: all 0.5s ease-out 0s;
    backface-visibility: hidden;
    transform: rotateY(0deg);

    }
    .mascot_back{
        transform: rotateY(180deg);
    height: 334px;
    width: 334px;
    transform-style: preserve-3d;
    position: absolute;
    transition: all 0.5s ease-out 0s;
    backface-visibility: hidden;

    }
</style>