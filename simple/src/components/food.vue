<template>
<div>
    <div class="menu_container">
        <b-container class="main_food" v-bind:style="{backgroundImage:'url(' + bgImage.bgFood + ')',backgroundSize: 'cover',backgroundRepeat:'no-repeat'}">
            <b-row align-h="around">
                <div class="ma_text">
                    <p>
                        별 하나에 추억과 <br>
                        별 하나에 사랑과 <br>
                        별 하나에 쓸쓸함과<br>
                        별 하나에 동경과 <br>
                        별 하나에 시와<br>
                        별 하나에 어머니, 어머니
                    </p>
                </div>
                <b-col class="ma_pic">food</b-col>
            </b-row>
        </b-container>
        <b-container class="main_drink" v-bind:style="{backgroundImage:'url(' + bgImage.bgDrink + ')',backgroundSize: 'cover',backgroundRepeat:'no-repeat'}">
            drink
        </b-container>
        <b-container class="coffee_bean" v-bind:style="{backgroundImage:'url(' + bgImage.bgBean + ')',backgroundSize: 'cover',backgroundRepeat:'no-repeat'}">
            bean
        </b-container>
        <b-container class="mascot" v-bind:style="{backgroundImage:'url(' + bgImage.bgMascot + ')',backgroundSize: 'cover',backgroundRepeat:'no-repeat'}">
            mascot
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
            }
        }
    }
}
</script>
<style scope>
    .menu_container{
        border:3px solid red;
    }
    .main_food{
        border:2px solid orange;
        height: 400px;
        position: relative;
        background-color: 	#004d00;
    }
    .ma_text{

        position: absolute;
        left:100px;
        top:50%;
        margin-top: -100px;
        display: inline-block;
    }
    .ma_text p {
        color:#b38f00;
        font-weight:900;
        letter-spacing: 5px; 
        font-size: 1.3rem;
    }
    .main_drink{
        border:2px solid yellow;
        height: 390px;
    }
    .coffee_bean{
        border:2px solid green;
        height: 258px;
    }
    .mascot{
        border:2px solid blue;
        height: 282px;
    }
</style>