<template>
    <div>
        <div class="shop_wrap">
            <ul class="shop_list">
                <li class="list_item" v-for="item in list">
                    <b-card
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                    >
                        <img v-bind:src="item.url" v-bind:alt="item.alt" class="is"/>
                        <b-card-text>
                            <p class="item_title">{{ item.name }}</p>
                            <p>{{ item.explain }}</p>
                            <span> {{ item.price }}원 </span>
                        </b-card-text>
                        <b-button href="#" variant="primary">장바구니</b-button>
                        <b-button href="#" variant="primary">결제하기</b-button>
                    </b-card>
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
                { id:0, name:'사과', explain:'맛좋은 사과', price:'6500', url:'././assetes/1.png', alt:"apple"},
                { id:1, name:'딸기', explain:'겨울철 딸기', price:'4800', url:'././assetes/2.png', alt:"straberry"},
                { id:2, name:'배', explain:'나주 배 나주 곰탕', price:'2300', url:'././assetes/3.png', alt:"pear"},
                { id:3, name:'포도', explain:'씨있는 포도는 싫어', price:'1000', url:'././assetes/4.png', alt:"grape"}
            ]
        }
    }
}
</script>

<style scoped>
.shop_wrap{
    bordeR:2px solid brown;
}
.shop_list{
    border:2px solid navy;

}
.list_item{
    border:2px solid seagreen;
    list-style: none;

}
.is{
    color:skyblue;
    max-width: 20rem;
    height:200px;
    width:400px;
    bordeR:2px solid skyblue;
}
img{
    color:skyblue;
    max-width: 20rem;
    height:200px;
    width:400px;
    bordeR:2px solid skyblue;
}
</style>