<template>
    <div>
        <div class="shop_wrap">
            <b card group deck class="shop_list"> 
                <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top class="list_item" v-for="item in items">
                    <b-card-text class="bc_text">
                        <p class="item_title">{{ item.name }}</p>
                        <p class="item_explain">{{ item.explain }}</p>
                        <p class="item_price if"> {{ item.price }}원 </p>
                    </b-card-text>
                    <template v-slot:footer>
                        <span class="text-muted">
                            Parent counter : {{ $store.state.counter }} <br />
                            <button v-on:click="minusCart" ><i class="fas fa-minus"></i></button>
                            <span class="show_count">{{ counter }}</span>
                            <button v-on:click="plusCart"> <i class="fas fa-plus"></i></button>

                            <child></child>
                        </span>
                        <b-button href="#" variant="primary" class="if" >결제하기</b-button>
                        <b-button href="#" variant="primary" class="if" ><i class="fas fa-cart-plus"></i></b-button>
                    </template>
                </b-card>
            </b>
        </div>
    </div>
</template>

<script>
import Child from './Child.vue'
export default {
    name:'reservation',
    data(){
        return{
            items:{
                apple:{ id:0, name:'사과', explain:'맛좋은 사과', price:'6500', url:'https://picsum.photos/300/300/?image=41', alt:"apple"},
                strawbrerry:{ id:1, name:'딸기', explain:'겨울철 딸기', price:'4800', url:'././assetes/2.png', alt:"straberry"},
                pear:{ id:2, name:'배', explain:'나주 배 나주 곰탕', price:'2300', url:'././assetes/3.png', alt:"pear"},
                grape:{ id:3, name:'포도', explain:'씨있는 포도는 싫어', price:'1000', url:'././assetes/4.png', alt:"grape"}
            },
            images:{
                    mascot:require('@/assets/1.png'),
                    menu:require('@/assets/apple.jpg'),
                    around:require('@/assets/lboricat.jpg'),
                    reserve:require('@/assets/nanacat.jpg'),
                },
            // counter:0 vuex에서 밑에 methods로 넘겨받게 됨. 
        }
    },
    components:{
        child:Child
    },
    methods:{
            minusCart(){
                this.$store.state.counter--;
            },
            plusCart(){
                this.$store.state.counter++;
            }
        }
}
</script>

<style scoped>
.shop_wrap{
    border:2px solid brown;
    overflow: hidden;
    min-width:1024px;
}
.shop_list{
    border:2px solid navy;
    /* width:px; */
    /* min-width:1024px; */
    overflow: hidden;
    margin:0  auto;
    
}
.list_item{
    border:2px solid seagreen;
    margin: 1rem;
    float: left;
    max-width:260px;
    height:400px;
    position: relative;
}
.card-body{
    padding: 0.5rem 1rem;
}
.is{
    color:skyblue;
    border:2px solid skyblue;
}
img{
    color:skyblue;
    /* max-width: 20rem; */
    height:160px;
    border:2px solid skyblue;
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
    bordeR:2px solid red;
    display: inline-block;
}
.btn-primary{
    border-color: none;
    float:right;
    background:	#6B8E23
}
.btn-primary:hover{
    background: darkgreen;
}
.text_muted{
    border:2px solid red;
}

</style>