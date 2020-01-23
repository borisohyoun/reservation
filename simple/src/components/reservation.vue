<template>
    <div>
        <div class="shop_wrap">
            <b-card-group deck class="shop_list"> 
                <b-card class="list_item" v-for="(value,index) in data" v-bind:key="value.name" >
                    <b-card-img v-bind:src="value.listImage" img-alt="Image" img-top></b-card-img>
                    <b-card-text class="bc_text" v-on:click="detail(index)">
                        <p class="item_title">{{ value.name }}</p>
                        <p class="item_explain">{{ value.explain }}</p>
                    </b-card-text>
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
            data : data,
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
            },
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
    position: relative;
}
.card-body{
    padding: 0.5rem 1rem;
}
img{
    height:160px;
}
.item_title{
    font-style: bold;
    font-size: 1.4rem;
}
.item_explain{
    font-size: 1rem;
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
.btn-primary:hover{
    background: darkgreen;
}

</style>