<template>
    <div>
        <div class="goPay_wrap">
            <em>{{ data.price }}원</em>
            <div class="total">    
                <p class="total_price">
                    총 상품 금액 <span> {{ totalPrice }}</span>
                </p>
            </div>
            <div class="btn">
                <button v-on:click="buyNow" href="" class="buy">바로구매</button>
                <button v-on:click="addToCart" href="" class="cart">장바구니</button>
            </div>
        </div>
    </div>
</template>
<script>
import data from '../data/itemdetail'
export default {
    name:'counter',
    props:{
        counterChild : Number
    },
    data(){
        const index = this.$route.params.contentId
        return{
            data : data[index],
            payPrice : this.totalPrice
        } 
    },
    methods:{
        addToCart:function(){
            this.items.push(this.item.id);
        },
        buyNow:function(){
            this.items.push()
        }
        
    },
    computed:{
        totalPrice:function(){
            // console.log(this.counterChild)
            // console.log(this.data.price)
            // console.log(this.counterChild * this.data.price)
            return this.counterChild * this.data.price
        }
    }
}
</script>
<style scoped>
    .goPay_wrap{
        border-top: 1px solid #f1f1f1;
    }
    .total{
        /* border:2px solid red; */
        position: relative;
        padding: 15px 0;
    }
    .total_price{
        border:2px solid yellow;
        position: absolute;
        right:0;
        top:20px;
    }
    .btn{
        border-top: 1px solid #f1f1f1;
        margin-top: 25px;
        padding:15px 0;
        display: block;
        /* position:absolute; */
        right:0;
    }
    .btn button {
    display: inline-block;
    width: 132px;
    height: 44px;
    margin-left: 9px;
    border-radius: 4px;
    padding:15px;
    border: 1px solid #004700;
    color: #004700;
    line-height: 42px;
    text-align: center;
    box-sizing: border-box;
    vertical-align: middle;
    text-decoration: none;
    -webkit-transition: background-color 300ms ease-in-out, -webkit-box-shadow 300ms ease;
    transition: background-color 300ms ease-in-out, -webkit-box-shadow 300ms ease;
    }
    .btn .cart:hover{
        background-color: #004700;
        color: #fff;
        border: 1px solid #fff;
    }
    .btn .buy {
        background-color: #004700;
        border: none;
        color: #fff;
    }
    .btn .buy:hover{
        background-color: #fff;
        color:#004700;
        border:1px solid #004700;
    }

</style>