<template>
  <div class="home">
    <div class="layer">
      <div class="container-fluid">
        <carousel/>
        <div class="container">
          <calculators/>
          <blog-card/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import carousel from '../components/carousel'
import blogCard from '../components/blog-card'
import calculators from '../components/calculators'

export default {
  components:{carousel, blogCard, calculators},
  head(){
    return{
      title: '5 لصحتك | الرئيسية'      
    }
  },
  created(){

  },
  methods:{
    
  }
}
</script>

<style lang='scss'>
html{
  scroll-behavior: smooth
}
.home{
  background: url("../assets/bg-home.webp") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: fit-content;
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
  }
}

  body{
    /* colors */
		--primary-color: rgb(27, 156, 196);
    --primary-hexa: 27, 156, 196;
		--secondary-color: rgb(241, 184, 28);
    --secondary-hexa: 241, 184, 28;
		--tertiary-color: rgb(79, 184, 161);
    --tertiary-hexa: 78, 184, 161;
    /*--------*/
    /* website main font */
    font-family: 'Cairo' !important;
  }
    /* custom framework */
  .bg-color1{background-color: var(--primary-color) !important;}
  .bg-color2{ background-color: var(--secondary-color) !important;}
  .bg-color3{background-color: var(--tertiary-color) !important;}
  .text-color1{color: var(--primary-color) !important}
  .text-color2{color: var(--secondary-color) !important}
  .text-color3{color: var(--tertiary-color) !important}
  .w-fit{width: fit-content !important;}
  .pos-a{position: absolute !important;}
  .pos-r{position: relative !important;}
/* ------------------------------ */

  .delay{
    animation-delay: 0.2s;
  }
</style>
