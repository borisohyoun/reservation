<template>
  <div>
    <div class="around_wrap">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <br>Ea, aliquid odio architecto, id minima error quis excepturi blanditiis <br>
        reiciendis asperiores, laudantium corrupti neque velit odit amet dicta dolores
        <br>labore qui placeat? Impedit quisquam natus neque consequuntur rem eaque pariatur! <br>
        Magni dolorum totam perferendis quo qui reprehenderit <br>
        quaerat molestiae doloribus recusandae.
      </p>

      <div class="carousel">
        <b-carousel id="carousel-1" 
            class="image_container" 
            v-model="slide" 
            v-bind:interval="4000" 
            background="rgba(0,0,0,0.6)"
            controls indicators fade
            v-on:sliding-start="onSlideStart"
            v-on:sliding-end="onSlideEnd"
            >
       <b-carousel-slide v-for="scene in scenes"
            v-bind:key="scene.id">
          <template v-slot:img>
            <img
              class="d-block w-100"
              v-bind:src="scene.src"
              v-bind:alt="scene.alt"
              width="1024"
              height="480"
            >
          </template>
        </b-carousel-slide> 
      </b-carousel>
        <p class="mt-4">
          Slide #: {{ slide }}<br>
          Sliding: {{ sliding }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'around',
    data() {
      return {
        scenes: [
            {
            src: require('../assets/around1.jpg'),
            alt: '1',
            caption:'편안함이 있는 공간'
          },
          {
            src: require('../assets/around2.jpg'),
            alt: '2',
            caption:'허버허버 '
          },
          {
            src: require('../assets/around3.jpeg'),
            alt: '3',
            caption:'2020년 '
          },
          {
            src: require('../assets/around4.jpeg'),
            alt: '4',
            caption:'새해복 많이 '
          },
          {
            src: require('../assets/around5.jpg'),
            alt: '5',
            caption:'받으세요? '
          },
          {
            src: require('../assets/around6.jpeg'),
            alt: '6',
            caption:'열어분덜?'
          }
        ],
        slide:0,
        sliding:null
      }
    },
    methods:{
        onSlideStart(event){
            this.sliding = true;
        },
        onSlideEnd(event){
            this.sliding = false;
        }
    }
  }
  
</script>
<style scoped>
  .around_wrap {
    border: 2px solid green;
    overflow: hidden;
  }
  .carousel{
    color:tomato;
  }
  .image_container {
    border: 2px solid blue;
    width: 100%;
    height: 480px;
    overflow: hidden;
  }
  .scene_box {
    color:honeydew;
  }
</style>
