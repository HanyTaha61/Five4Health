<template>
  <div>
        <b-carousel
        class="home_carousel mx-auto"
        id="carousel-1"
        :interval="4000"
        controls
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
              v-for="(img,i) in 6" :key="i"
              :img-src='require(`../assets/carousel/${i+1}.jpg`)'
              @click="go_gallery"
            >
              <div class="see_more">
                <router-link to="/gallery">شاهد كل الصور</router-link>
              </div>
            </b-carousel-slide>
        </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      go_gallery(){
       return console.log('---------------------');
        
      }
    }
  }
</script>

<style lang="scss">
.home_carousel{

    margin-top: -90px;
    margin-bottom: 50px;
    box-shadow: 20px 20px 30px #000 !important;
    width: 1300px !important;
    height: 100%;

      @media (max-width: 1064px) {
        // margin-top: -25px;
      }

      @media (max-width: 767px) {
        // margin-top: -36px;
      }
      @media (max-width: 1326px) {
        width: 100% !important;
      }


      @media (max-width: 1280px) {
        height: fit-content;
      }
      @media (max-width: 510px) {
        // width: 350px !important;
      }

      .carousel-inner{
        height: 100% !important;

      @media (max-width: 767px) {
        // height: 470px !important;
      }
      @media (max-width: 510px) {
        // height: 350px !important;
      }
        .carousel-item{
          position: relative;

          &:hover ::before{
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background-color: #000;
          }

          &:hover .carousel-caption{
            opacity: 1;
          }

          

          .carousel-caption{
            height: fit-content;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            position: absolute;
            text-decoration: none;
            background-color: rgba(var(--secondary-hexa), 0.8);
            transition: 0.4s;
            opacity: 0;

            &:hover{
              background-color: rgba(var(--primary-hexa), 0.8);
            }

            .see_more{

              a{
                color: #000;
                font-weight: bold;
                text-decoration: none;
              }
            }
          }

          img{
            position: relative !important;
            transition: 0.5s !important;

          }
        }
      }

    .carousel-control-prev{
      background: linear-gradient(to left, transparent, #222) !important;
    }

     .carousel-control-next{
      background: linear-gradient(to right, transparent, #222) !important;

     }
}
</style>
