<template>
    <div>
        <div class="shop_wrap">
            <ul class="shop_list">
                <li class="list_item" v-for="item in list">
                    <b-card-group deck>
                    <b-card  img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
                    <!-- <b-card
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    > -->
                        <img v-bind:src="images.url" v-bind:alt="item.alt" class="is"/>
                    <b-card-text>
                            <p class="item_title">{{ item.name }}</p>
                            <p class="item_explain">{{ item.explain }}</p>
                            <p class="item_price if"> {{ item.price }}원 </p>
                    </b-card-text>
                    <b-button href="#" variant="primary" class="if" v-on:mouseover="hove_btn" v-on:mouseleave="hove_btn" >결제하기</b-button>
                    <b-button href="#" variant="primary" class="if" v-on:mouseover="hove_btn" v-on:mouseleave="hove_btn" ><i class="fas fa-cart-plus"></i></b-button>
                    </b-card>
                </b-card-group>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'reservation',
    data(){
        return{
            list:[
                { id:0, name:'사과', explain:'맛좋은 사과', price:'6500', url:'https://picsum.photos/300/300/?image=41', alt:"apple"},
                { id:1, name:'딸기', explain:'겨울철 딸기', price:'4800', url:'././assetes/2.png', alt:"straberry"},
                { id:2, name:'배', explain:'나주 배 나주 곰탕', price:'2300', url:'././assetes/3.png', alt:"pear"},
                { id:3, name:'포도', explain:'씨있는 포도는 싫어', price:'1000', url:'././assetes/4.png', alt:"grape"}
            ],
            images:{
                    mascot:require('@/assets/1.png'),
                    menu:require('@/assets/apple.jpg'),
                    around:require('@/assets/lboricat.jpg'),
                    reserve:require('@/assets/nanacat.jpg'),
                },
            
        }
    },
    methods:{
            hove_btn:function(event){
			this.timer= setInterval(3000);
            }
        }
}
</script>

<style scoped>
.shop_wrap{
    border:2px solid brown;
}
.shop_list{
    border:2px solid navy;
    margin: 1rem auto;
    padding: 0;
}
.list_item{
    border:2px solid seagreen;
    list-style: none;
    display: inline-flex;
    margin: 0.5rem;
    min-width: 250px;
}
.is{
    color:skyblue;
    /* max-width: 20rem; */
    /* height:200px;
    width:400px; */
    border:2px solid skyblue;
}
img{
    color:skyblue;
    /* max-width: 20rem; */
    height:200px;
    /* width:400px; */
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
</style>