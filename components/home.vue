<template>
  <div class="home">
    <div class="layer">
      <div class="container-fluid">
        <!-- <carousel-home/> -->
        <div class="container">
          <!-- <b-jumbotron class="text-info text-right" header="خمسة لصحتك" lead="نهتم بالصحة والجمال و الغذاء">
            <div class="row mt-5">
              <div class="col-md-3">
            <p class="lead">الفوائد الصحية للفواكه و الخضروات</p>
              </div>
              <div class="col-md-3">
            <p class="lead">نصائح للحفاظ على الصحة العامة </p>
              </div>
              <div class="col-md-3">
            <p class="lead">نصائح للوقاية من الأمراض</p>
              </div>
              <div class="col-md-3">
            <p class="lead">نصائح للتخلص من الوزن الزائد </p>
              </div>
            </div>
          </b-jumbotron> -->
        <!-- <blog-card/> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import carouselHome from "./carousel";
  import blogCard from "./blog-card";

  export default {
    components: { carouselHome, blogCard}
  }
</script>

<style lang='scss' scoped>
* {
  box-sizing: border-box;
}
.home{
  background: url("../assets/water2.webp") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  // position: absolute;
  width: 100%;
  // height: fit-content;
  direction: rtl;

     @media (min-width: 1200px) {
      height: fit-content !important;
    }

  .layer{
    padding-top: 100px;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content !important;
    background-color: rgba(1,1,1, 0.35);

    // .jumbotron{
    //   padding-top: 30px;
    //   background-color: rgba(26, 71, 110, 0.74) !important;
    //   direction: rtl !important;

    //   @media (max-width: 767px) {
    //     padding-top: 30px;
    //   }  

          h1,p{
            font-family: 'Cairo';
            color: var(--tertiary-color);
          }

          h1 + p{
            @media (max-width: 570px) {
              font-size: 1em !important;
            }

          }

          h1{
            @media (max-width: 767px) {
              font-size: 3em !important;
            }
            @media (max-width: 570px) {
              font-size: 1.8em !important;
            }
          }
      .row{

        div{


          p{
            font-size: 1em;
            
            &:not(first-child){
              color: var(--secondary-color);
            }
          }
        }
      }
    }
  }

</style>