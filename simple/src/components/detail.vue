<template>
    <div>
        <b-container fluid class="cnt_wrap">
            <b-row class="mainTop">
                <b-col offset="1" cols="10" md="10" class="top_wrap" >
                <b-col cols="12" md="6" class="main_img">
                    <img v-bind:src="data.listImage">
                </b-col>
                <b-col cols="12" md="6" class="main_exp">
                    <div class="detail_wrap">
                        <em>{{ data.em }}</em>
                        <strong>{{ data.name }}</strong>
                        <p>{{ data.explain }}</p> 
                    </div>
                    
                    <div class="detail_price">
                        <div>{{ data.price }}원(계산되는 버튼)</div>
                        <counter></counter>
                    </div>
                </b-col>
                </b-col>
            </b-row>
            <b-row class="exp_container">
                <b-col offset="2" cols="8" md="8" class="exp_wrap">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nobis molestiae totam soluta commodi corrupti distinctio veniam et rem sed iste minima provident impedit, eum rerum nulla quo ullam cumque necessitatibus quaerat nihil quod. Ratione dolore quam illo officiis vitae inventore tempore magni omnis rerum. Fugit, ea sunt. Tenetur exercitationem dolor quibusdam, quae officia libero dolorem fuga expedita, sequi obcaecati porro eius illum odio voluptatem id deserunt! Expedita animi minus fugit nihil aperiam repudiandae atque minima. Ex sunt reiciendis quia mollitia voluptate cumque, suscipit commodi officia sint rerum porro illo ad harum quas minus reprehenderit fugiat doloribus aliquam dolorum qui.</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import { eventBus } from '../main'
import data from '../data/itemdetail'
import counter from './counter'

export default {
    name:'detail',
    // props:['name','price','explain','listImage'],
    data(){
        const index = this.$route.params.contentId
        return{
            data : data[index]
        }   
    },
    methods:{
    },
    components:{
        'counter':counter
    }

}
</script>
<style scoped>
    .cnt_wrap{
        padding-top: 80px;
    }
    .mainTop{
        /* border:2px solid red;     */
    }
    .top_wrap{
        /* border:2px solid hotpink; */
    }
    .main_img{
        /* bordeR:2px solid yellow; */
        float: left;
    }
    .main_img img{
        /* border:2px solid slateblue; */
        width: 477px;
        height: 358px;
        margin:auto;
        display: block;
    }
    .main_exp{
        /* border:2px solid green; */
        float: left;
    }
    .exp_container{
        /* border:2px solid wheat; */
        padding-top:190px;
        text-align: center;
    }
    .exp_wrap{
        /* border:2px solid slateblue; */
    }
    .detail_wrap > em{
        font-size: 16px;
        font-style: normal;
    }
    .detail_wrap > strong{
        /* border:2px solid red; */
        display: block;
        margin-top: 4px;
        color: #00000a;
        font-size: 30px;
    }
    .detail_wrap > p {
        /* border:2px solid yellow; */
        padding-top: 25px;
        color: #999;
    }
    .detail_price{
        /* border:2px solid green; */
        font-size: 0.8rem;
        margin-top: 30px;
        padding: 15px 0;
        border-width: 1px 0 0 0;
        border-style: solid;
        border-color: #f1f1f1;
    }
    .cart_wrap{
        /* border:2px solid gold; */
        margin-top: 16px
    }
</style>