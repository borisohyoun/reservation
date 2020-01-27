<template>
    <div>
        <div class="shop_wrap">
            <b-card-group deck class="shop_list"> 
                <b-card class="list_item" v-for="(value,index) in data" v-bind:key="value.name" v-on:click="detail(index)">
                    <b-card-img v-bind:src="value.listImage" img-alt="Image" img-top></b-card-img>
                    <b-card-text class="bc_text">
                        <div class="shoem">
                            <p class="item_title">{{ value.name }}</p>
                            <p class="item_em">{{ value.em }}</p>
                        </div>
                    </b-card-text>
                    <template v-slot:footer>
                        <em class="sd">>>자세히보기</em>
                    </template>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>

<script>
import data from '../data/itemdetail'
import counter from './counter'
export default {
    name:'reservation',
    components:{
        'counter':counter
    },
    data(){
        const index = this.$route.params.contentId
        return{
            counter:0 ,
            data : data

        }
    },
    methods:{
        detail(index){
            this.$router.push({
                name:'detail',
                params:{
                    contentId :index
                }
            })
        }
    }
}
</script>

<style scoped>
.shop_wrap{
    overflow: hidden;
    min-width:1024px;
    width:90%;
    margin: auto;
}
.shop_list{
    min-width:1024px;
    overflow: hidden;
    margin:0  auto;
}
.list_item{
    border:1px solid seagreen;
    margin: 0.8rem;
    float: left;
    max-width:260px;
    height:330px;
    position: relative;
}
.card-body{
    padding: 0.5rem 1rem;
}
img{
    height:160px;
}
.item_title{
    font-weight:700;
    font-size: 1.4rem;
}
.item_em{
    font-size: 1rem;
    color: darkgreen;

}
.item_price{
    font-size: 0.8rem;
}
.if{
    display: inline-block;
    font-size: 10px;
    margin-bottom: 0;
}
.btn-primary{
    border-color: none;
    float:right;
    background:	#6B8E23
}
.sd{
    font-size: 0.6rem;
    float: right;
}

</style>