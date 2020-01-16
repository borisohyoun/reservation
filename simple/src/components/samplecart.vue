<template>
    <div>
        <button v-on:click="addToCart">장바구니 </button>
 
    </div>
</template>
<script>
export default {
    data:{
        product:{
            id:1001,
            title:'the cat',
            description:'이거승ㄴ 고야이 사료 ',
            price:2000,
        },
        cart:[]
    },
    mehtods:{
        addToCart:function(){
            this.cart.push(this.product.id);
        }
    }
}
</script>