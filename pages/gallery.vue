<template>
  <div class="gal">
    <div class="layer">
      <div class="container mx-auto">
        <p class="head display-4 text-light text-center mb-4">معرض الصور</p>
        <div id="gallery">
          <div v-for="(img,i) in images" :key="i">
            <img :src="require(`../assets/gallery/${i+1}.webp`)"/>
            <a :href="`#lightbox-${i+1}`">{{img.title}}</a>
          </div>
        </div>

        <div class="lightbox" :id="`lightbox-${x+1}`" v-for="(light,x) in images" :key="x">
          <div class="content">
            <img :src="require(`../assets/gallery/${x+1}.webp`)"/>
            <div class="title">{{light.title}}</div>
            <a class="close" href="#gallery"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head(){
        return{
          title: '5 لصحتك | معرض الصور'
        }
      },
  data(){
    return{
      fluidText: true,
      images:[
        {title: 'مأكولات السعادة'},
        {title: 'فوائد الرمان'},
        {title: 'فواكه متعددة'},
        {title: 'ألوان الطعام'},
        {title: 'مشروبات تقوية المناعة'},
        {title: 'زيوت الأوميجا'},
        {title: 'فوائد التين الشوكي'},
        {title: 'فوائد الشيكولاتة الداكنة'},
        {title: 'أطعمة هرمون السعادة'},
        {title: 'مراحل نضوج الموز'},
        {title: 'فوائد البطيخ'},
        {title: 'أعراض تكيسات المبايض'},
        {title: 'مصادر البروتين النباتي'},
        {title: 'تنظيف القولون'},
        {title: 'فوائد الزبادي'},
        {title: 'عادات تدمر الكلى'},
        {title: 'أطعمة تعزز المناعة'},
        {title: 'مؤشرات الأنيميا'},
        {title: 'فوائد فواكه متعددة'},
        {title: 'فوائد الأسماك'},
        {title: 'فوائد فواكه متعددة'},
        {title: 'فوائد الجوز'},
        {title: 'فوائد الزبادي'},
        {title: 'فوائد شرب الماء والليمون'},
        {title: 'رافعات المناعة'},
        {title: 'أطعمة البشرة الصحية'},
        {title: 'أنواع الزيوت الصحية'},
        {title: 'أطعمة ترفع مناعة الكبار'},
        {title: 'أطعمة تحارب تساقط الشعر'},
        {title: 'أطعمة تحارب تساقط الشعر'},
        {title: 'أطعمة تحارب تساقط الشعر'}
      ]
    }
  },

  methods:{
    textFluid(){
      let width = window.innerWidth
      return {fontSize: width/400}
      
    }
  }
}
</script>
<style lang="scss" scoped>

* {
  box-sizing: border-box;
}

.gal{
  background: url("../assets/bg-gallery.webp") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  // position: absolute;
  width: 100%;
  direction: rtl;
  height: 6000px !important;

  @media (max-width: 350px) {
    height: 3600px !important;
  }
  @media (min-width: 351px) and (max-width: 400px) {
    height: 1500px !important;
  }
  @media (min-width: 401px) and (max-width: 767px) {
    height: 2600px !important;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    height: 3800px !important;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 6000px !important;
  }
  @media (min-width: 1200px) {
    height: 4400px !important;
  }

  .layer{
    padding-top: 20px;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
    background-color: rgba(1,1,1, 0.5);

    .container{
      .head{
        margin-top: 100px;

        @media (max-width: 1199px) {
          font-size: 3em
        }
        @media (max-width: 991px) {
          font-size: 2.5em
        }
        @media (max-width: 767px) {
          font-size: 2em
        }
        @media (max-width: 375px) {
          font-size: 1.5em
        }
        @media (max-width: 250px) {
          font-size: 1em
        }
      }

      #gallery {
        display: grid;
        height: calc(100vh - 10px);
        // grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0.5em;

        @media (max-width: 1199px) {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          // font-size: 1em;
          & > div {
            width: 31%;
            margin: 1%;
            @media (max-width: 350px) {
              width: 98%;
            }
          }
        }
        & > div {
          height: 500px; 

          @media (max-width: 991px) {
            height: 300px;  
          }     
          @media (max-width: 767px) {
            height: 200px;  
          }     
          @media (max-width: 400px) {
            height: 100px;  
          }     
        // Grid Structure
          // &:nth-child(#{$size}n + 1) {
            // grid-column: span 1;
            // grid-row: span 6;
          // }
          // &:first-child {
          //   grid-column: span 1;
          //   grid-row: span 3;
          // }
          // &:last-child {
          //   grid-column: span 1;
          //   grid-row: span 3;
          // }
          & > a {
            opacity: 0;
            position: absolute;
            color: #000;
            background-color: #000;
            font: bold 4em "Helvetica";
            $shadow: 5px #fff;
            text-shadow:  0 -1px $shadow,
                          -1px 0px $shadow,
                          0 1px $shadow,
                          1px 0px $shadow;
            text-align: center;
            padding: 2rem;
            font-size: 3em;
            mix-blend-mode: difference;
            width: 100%;
            height: 100%;
            transition: all ease 1s;

            @media (max-width: 767px) {
              font-size: 2em;
            }
            @media (max-width: 400px) {
              font-size: 1em;
            }


          }
          & > img {
            width: 100%;
            min-height: 100%;
            transition: all ease 1s;
          }
          &:hover {
            img {
              filter: blur(4px);
            }
            a {
              opacity: 1;
            }
          }
        }
        & > div {
          overflow: hidden;
          position: relative;
          box-shadow: 0 2px 8px 0 rgba(#000, 0.2), 0 3px 20px 0 rgba(#000, 0.19);
        }
        div,
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
        }
      }
    }
  }
}

//
// lightbox
//
[id^="lightbox-"] {
  &:target {
    opacity:1;
    pointer-events:inherit;
    img{
      filter:blur(0);
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(black, 0.5);
  display: flex;
  opacity:0;
  transition: opacity 450ms ease-in-out;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  .content {
    max-width: 90%;
    position: relative;
    color: #fff;
    margin-top: 5%;

    &:hover > a.close {
      opacity: 1;
      transform: scale(1, 1);
    }
    &:hover > .title {
      opacity: 1;
      transform: translateY(-3px); //Fix extra line at end

      &::after{
        opacity:1;
      }
    }
    & > * {
      transition: all 450ms ease-in-out;
    }
  }
  .title {
    display: block;
    margin: 0;
    padding: 1em;
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateY(50%);
    font-size: 1.5em;
    opacity:0;

    &::after{
      content: ' ';
      background-color: rgba(black, 0.4);
      bottom:0;
      left:0;
      height:100%;
      width:100%;
      position:absolute;
      transition: all 350ms ease-in-out 250ms;
      opacity:0;
      transform-origin:bottom;
      mix-blend-mode: soft-light;
    }
  }
  img {
    max-height: 90vh;
    max-width: 100%;
    margin: 0;
    padding: 0;
    filter: blur(50px);
  }
  a.close {
    width: 2em;
    height: 2em;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(black, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0, 0);
    opacity: 0;
    transform-origin: right top;
    text-decoration:none;
    color:#fff;
    &::after {
      content: "X";
    }
  }
}

</style>
