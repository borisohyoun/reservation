<template>
<div>
    <Navigation></Navigation>
    <div class="around_wrap">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            <br>Ea, aliquid odio architecto, id minima error quis excepturi blanditiis <br>
            reiciendis asperiores, laudantium corrupti neque velit odit amet dicta dolores 
            <br>labore qui placeat? Impedit quisquam natus neque consequuntur rem eaque pariatur! <br>
            Magni dolorum totam perferendis quo qui reprehenderit <br>
            quaerat molestiae doloribus recusandae.
        </p>
        <div class="image_container" v-for="scene in scenes">
            <img v-bind:src="scene.url" v-bind:alt="scene.alt" class="scene_pic"/>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'around',
    data(){
        return{
            scenes:[
                {url:'././asssets/1.png',alt:'1'},
                {url:'././asssets/2.png',alt:'2'},
                {url:'././asssets/3.png',alt:'3'},
                {url:'././asssets/4.png',alt:'4'},
                {url:'././asssets/1.png',alt:'5'},
                {url:'././asssets/2.png',alt:'6'}
            ]
        }
    }
}
</script>
<style scoped>
    .around_wrap{
        border:2px solid green;
        overflow: hidden;
    }
    .image_container {
        border:2px solid blue;
        width: 200px;
        height: 100px;
        float: left;
    }
    .scene_pic{
        border:2px solid red;
    }
</style>