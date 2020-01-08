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

      <div>
        <b-carousel id="carousel-1" 
            class="image_container" 
            v-model="slide" 
            v-bind:interval="4000" 
            controls indicators fade
            background="black"
            v-on:sliding-start="onSlideStart"
            v-on:sliding-end="onSlideEnd"
            >
          <b-carousel-slide v-for="scene in scenes" v-html="scene.caption" v-bind:alt="scene.alt"
          img-src="scene.src" class="scene_box">
          </b-carousel-slide>

          <!-- <hr>
          이건 이미지 호출 됨 
          <div v-for="scene in scenes" >
              <img v-bind:src="scene.src">
          </div> -->

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
            src: require('../assets/1.png'),
            alt: '1',
            caption:'편안함이 있는 공간'
          },
          {
            src: require('../assets/2.png'),
            alt: '2',
            caption:'허버허버 '
          },
          {
            src: require('../assets/3.png'),
            alt: '3',
            caption:'2020년 '
          },
          {
            src: require('../assets/4.png'),
            alt: '4',
            caption:'새해복 많이 '
          },
          {
            src: require('../assets/apple.jpg'),
            alt: '5',
            caption:'받으세요? '
          },
          {
            src: require('../assets/around.jpg'),
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

  .image_container {
    border: 2px solid blue;
    width: 100%;
    height: 480px;
  }

  .scene_box {
    color:honeydew;
  }
</style>
