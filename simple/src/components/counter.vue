<template>
    <div>
        <div class="goPay_wrap">   
                <p class="total_price">
                    총 상품 금액 <span> {{ totalPrice }}원</span>
                </p>
                <div class="cart_btn">
                    <button v-on:click="minusCart" v-if="minCount"><i class="fas fa-minus"></i></button>
                    <button disabled="true" v-else ><i class="fas fa-minus"></i></button>
                    <span class="show_count">{{ counter }}</span>
                    <button v-on:click="plusCart" v-if="canAddCart"><i class="fas fa-plus"></i></button>
                    <button disabled="true" v-else ><i class="fas fa-plus"></i></button>
                    <span>(주문 가능 갯수:{{ data.availableInventory }})</span>
                </div>
            <div class="btn">
                <button v-on:click="buyNow" href="" class="buy">바로구매</button>
                <button v-on:click="addToCart"  href="" class="cart">장바구니</button>
            </div>
        </div>
    </div>
</template>
<script>
import data from '../data/itemdetail'
export default {
    name:'counter',
    data(){
        const index = this.$route.params.contentId
        return{
            data : data[index],
            counter:0,
        } 
    },
    methods:{
        addToCart:function(){
            console.log("clicked")
            console.log(this.counter)
            this.$router.push({
                name:'cart'
            })
        },
        buyNow:function(){
            this.$router.push({
                name:'payment'
            })
        },
         minusCart:function(){
            this.counter -= 1;
        },
        plusCart:function(){
            this.counter += 1
        }
    },
    computed:{
        totalPrice:function(){
            console.log(this.data.price);
            console.log(this.counter)
            return this.counter * this.data.price;
        },
        canAddCart:function(){
            return this.data.availableInventory > this.counter;
        },
        minCount:function(){
            return this.counter > 1
        }
    }
}
</script>
<style scoped>
    .goPay_wrap{
        border-top: 1px solid #f1f1f1;
    }
    .total{
        position: relative;
        padding: 15px 0;
    }
    .total_price{
        position: absolute;
        right:0;
        top:54px;
    }
    .cart_btn{
        border-width: 0 0 1px 0;
        border-style: solid;
        border-color: #f1f1f1;
        padding: 16px 0;
    }
    .btn{
        margin-top: 10px;
    }
    .btn button {
        border-radius: 4px;
        padding: 0 15px;
        width:132px;
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
        margin-right: 20px;
    }
    .btn .buy:hover{
        background-color: #fff;
        color:#004700;
        border:1px solid #004700;
    } 

</style>