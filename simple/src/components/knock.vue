<template>
    <div class="knock_wrap"> 
        <Navigation></Navigation>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
import Navigation from '././Navigation.vue'
import Mainpage from '././mainpage.vue'
import Footer from '././footer.vue'
import around from './around.vue'
import food from './food.vue'
import reservation from './reservation.vue'
import detail from './detail.vue'
import cart from './cart.vue'
import payment from './payment.vue'

export default{
    name:'knock',
    components:{
        'Navigation':Navigation,
        'Mainpage':Mainpage,
        'Footer':Footer,
        'around':around,
        'food':food,
        'reservation':reservation,
        'detail':detail,
        'cart':cart,
        'payment':payment
    },
    
}
</script>

<style>
.knock_wrap{
    margin: 0.5rem auto 5rem auto ;
    min-width:1100px;
}



</style>