<template>
  <div class="about">
    <div class="layer">
      <b-container>
        <b-row>
          <b-col lg="10">
            <h5 class="text-center mt-3">من نحن</h5>
            <p class="text-right">5 لصحتك هو واحد من أفضل المواقع الطبية التي توفر معلومات صحية موثوق بها من قِبَل كل من المرضى و العاملين في مجال الصحة في جميع أنحاء العالم العربي.</p>
            <h5 class="text-center">رؤيتنا</h5>
            <p class="text-right">يعمل موقع 5 لصحتك على تطوير مجال الرعاية الصحية و النصائح الطبية في العالم العربي.</p>
            <h5 class="text-center">رسالتنا</h5>
            <p class="text-right">يسعى موقع 5 لصحتك جاهداً لتوفير معلومات صحية باللغة العربية عالية الجودة وموثوق بها ويمكن الوصول إليها بسهولة.</p>
            <p class="text-right">يعتقد موقع 5 لصحتك أنه يجب على جميع الأشخاص الاعتناء بصحتهم. ولتحقيق هذا الهدف، يجب توفير معلومات موثوقة وسهلة الفهم باللغة العربية، مما يساعد على تحسين صحة جميع الأشخاص الناطقين بالعربية.</p>
            <h5 class="text-center">كيف يمكننا تحقيق رؤيتنا؟</h5>
            <p class="text-right">
              <ul>
                <li><b>الجودة العالية</b>
                <p>
                  نحصل على محتوياتنا المعلوماتية من أكبر مواقع الصحة و الغذاء في العالم بعد ترجمتها ترجمة دقيقة و مراجعتها من قبل متخصصين في مجال الصحة و الغذاء.
                </p>
                </li>
                <li>
                  <b>المصداقية</b>
                  <p>كل ما نقدم من محتوى هو:</p>
                  <ul>
                    <li>أحدث ما تم التوصل إليه من المعلومات والأدلة والتوجيهات الطبية العالمية</li>
                    <li>معلومات يتم مراجعتها من قِبَل لجنة متخصصة قبل النشر.</li>
                    <li>معلومات يتم رصدها ومتابعتها بشكل دوري من قِبَل مراقبين متخصصين للتأكد من تقديم آخر وأحدث المعلومات الطبية على مستوى العالم.</li>
                  </ul>
                </li>
                <li>
                  <b>سهولة الفهم</b>
                  <p>
                  ما نقدمه يكون مكتوب باللغة العربية وموجه إلى الجمهور العام. ويعني ذلك أننا ندقق في جميع مقالاتنا للتأكد من أن جميع المعلومات التي نوفرها على موقعنا دقيقة وجذابة وذات صلة.
                  نتجنب الإفراط في استخدام المصطلحات الطبية الطويلة جداً والتي لا تساعدك على فهم الحالة الصحية.
                  </p>
                  <p>
                    وبناءً على رغبتنا في تحسين صحتك، يوفر 5 لصحتك مجموعة واسعة من الأدوات والطرق المبتكرة والتفاعلية لمساعدتك على الحفاظ على صحتك من خلال المشاركة والرد على جميع أسئلتك عن طريق التواصل معنا على  <a target="_blank" href="https://www.facebook.com/Five4Health/">صفحتنا على موقع فيسبوك</a>.
                </p>
                </li>
              </ul>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
    
export default {
    head(){
        return{
            title: `5 لصحتك | من نحن`
        }
    },
  data(){
    return{
     related: []
    }
  },
  methods:{
    
  },
  computed:{
    get_latest(){
      var late = this.$store.state.subjects.forEach(element =>{
        
          if(element.latest){
              if(this.related.indexOf(element.latest === -1)){
                 return this.related.push(element)
              }
          }
      })
    }
  },
  mounted(){
    return this.get_latest
    
  }
}
</script>

<style lang='scss' scoped>
.container{
  background-color:rgba(rgb(12, 162, 199), 0.25);
}
.about{
  direction: rtl;
  line-height: 2.5;
  background: url("../assets/About-Us.webp") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  color: aliceblue;


  .layer{
    position: relative;
    padding-top: 40px;
    padding-bottom: 40px;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(1,1,1, 0.75);

    @media (min-width: 992px) {
      // height: 2000px
    }
    h5{
      background-color: var(--secondary-color);
      padding: 5px 10px;
      width: fit-content;
      color: #000
    }
  }

}
</style>



