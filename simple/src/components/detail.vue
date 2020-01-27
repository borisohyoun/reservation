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
                            <em>{{ data.price }}원</em>
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
import data from '../data/itemdetail'
import counter from './counter'

export default {
    name:'detail',
    data(){
        const index = this.$route.params.contentId
        return{
            data : data[index],
            counter:0
        }   
    },
    components:{
        'counter':counter
    },
    methods:{
        minusCart:function(){
            this.counter -= 1;
        },
        plusCart:function(){
            this.counter += 1
        }
    }

}
</script>
<style scoped>
    .cnt_wrap{
        padding-top: 80px;
    }
    .mainTop{
    }
    .top_wrap{
    }
    .main_img{
        float: left;
        width: 477px;
        height: 358px;
        overflow: hidden;
    }
    .main_img img{
        margin:auto;
        display: block;
        position: relative;
        height: 100%;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .main_exp{
        float: left;
    }
    .exp_container{
        padding-top:115px;
        text-align: center;
    }
    .exp_wrap{
    }
     em {
        font-size: 20px;
        vertical-align: middle;
        font-style: normal;
    }
    .qua{
        border:2px solid green;
        width: 103px;
        text-align: center;
        position: absolute;
        top:50%;
        margin-top: -42px;
    }
    .detail_wrap > em{
        font-size: 16px;
        font-style: normal;
    }
    .detail_wrap > strong{
        display: block;
        margin-top: 4px;
        color: #00000a;
        font-size: 30px;
    }
    .detail_wrap > p {
        padding-top: 15px;
        color: #999;
    }
    .detail_price{
        font-size: 0.8rem;
        margin-top: 20px;
        padding: 0 0 15px 0;
        border-width: 1px 0 0 0;
        border-style: solid;
        border-color: #f1f1f1;
        position: relative;
    }
    .detail_price>em {
        font-size: 24px;
        font-style: normal;
    }
    .cart_wrap{
        margin-top: 16px
    }
</style>