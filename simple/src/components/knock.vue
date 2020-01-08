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

export default{
    name:'knock',
    components:{
        'Navigation':Navigation,
        'Mainpage':Mainpage,
        'Footer':Footer,
        'around':around,
        'food':food,
        'reservation':reservation,
        'detail':detail
    },
    
}
</script>

<style>
.knock_wrap{
    /* border:2px solid blue; */
    width:90%;
    margin: 2rem auto;
    min-width:900px;
}



</style>