<template>
    <div>
        <div class="shop_wrap">
            <b-card-group deck class="shop_list"> 
                <b-card class="list_item" v-for="(value,index) in data" v-bind:key="value.name" >
                    <b-card-img v-bind:src="value.listImage" img-alt="Image" img-top></b-card-img>
                    <b-card-text class="bc_text" v-on:click="detail(index)">
                        <p class="item_title">{{ value.name }}</p>
                        <p class="item_explain">{{ value.explain }}</p>
                        <p class="item_price if"> {{ value.price }}원 </p>
                    </b-card-text>
                    <template v-slot:footer>
                        <span class="text-muted">
                            <button v-on:click="minusCart" ><i class="fas fa-minus"></i></button>
                            <span class="show_count">{{ counter }}</span>
                            <button v-on:click="plusCart"> <i class="fas fa-plus"></i></button>
                        </span>
                        <b-button cols="12" sm="4" href="#" variant="primary" class="if" >결제하기</b-button>
                        <b-button cols="12" sm="4" href="#" variant="primary" class="if" ><i class="fas fa-cart-plus"></i></b-button>
                    </template>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>

<script>
import data from '../data/itemdetail'
export default {
    name:'reservation',
    data(){
        return{
            counter:0 ,
            data: data
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