<template>
    <div>
        <b-container fluid >
            <b-row class="mainTop">
                <b-col cols="12" md="6" class="main_img">tkwls</b-col>
                <b-col cols="12" md="6" class="main_exp">rmf</b-col>
            </b-row>
            <b-row class="exp_wrap">
                tjfaud
            </b-row>
        </b-container>
    </div>
</template>
<script>
import reservation from '././reservation.vue'
export default {
    name:'detail'

}
</script>
<style scoped>
    .mainTop{
        border:2px solid red;
        
    }
    .main_img{
        bordeR:2px solid yellow;
        float: left;
    }
    .main_exp{
        border:2px solid green;
        float: left;
        
    }
    .exp_wrap{
        border:2px solid slateblue;
    }
</style>