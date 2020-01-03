<template>
    <div class="around_wrap">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, aliquid odio architecto, id minima error quis excepturi blanditiis reiciendis asperiores, laudantium corrupti neque velit odit amet dicta dolores labore qui placeat? Impedit quisquam natus neque consequuntur rem eaque pariatur! Magni dolorum totam perferendis quo qui reprehenderit quaerat molestiae doloribus recusandae.</p>
        <ul class="inside_wrap">
            <li v-for="pic in insides"  alt="">
               <p>{{ pic.url }}</p> 
               <img v-bind:src="insides.url" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'around',
    data(){
        return{
            insides:[
                { url:'../assets/1.png' },
                { url:'../assets/2.png' },
                { url:'../assets/3.png' },
                { url:'../assets/4.png' }

            ],
            images:{
                around:require('@/assets/lboricat.jpg')
            }
        }
    }
}
</script>
<style scoped>
    img{
        widows: 200px;
        height: 100px;
    }
    ul li {
        border:2px solid red;
        width:200px;
        height: 200px;
        float:left;
    }
</style>