/* eslint-disable */
<template>
  <div class="weight">
    <div class="layer">
      <div class="container">
        <div class="input_data p-2 rounded">
          <h1 class="text-center">طريقة حساب كمية الماء التي يحتاجها الجسم يومياً</h1>
              
            <p class="mb-3 text-right text-light lead">كشف أطباء من مركز الأبحاث الطبية "مايو كلينيك" بولاية مينيسوتا الأمريكية عن معادلة حسابية بسيطة لحساب كمية الماء المطلوب تناولها يوميًا.
                وقال الأطباء، وفقًا لصحيفة ديلى ميل البريطانية إن أجسام البشر تختلف فى كمية الماء التى تحتاجها، مشيرين إلى أن الرجال يحتاجون فى المتوسط 13 كوبًا يوميًا، فيما تحتاج النساء 9 أكواب فقط.
    ولمعرفة كمية الماء المطلوبة لوظائف جسمك الحيوية يوميًا، املأ البيانات أدناه:
            </p>
            <div class="form_2  rounded">
                <div class="row">
                    <div class="col-lg-6">
                    <form class="form">
                        <h4 class="text-center">اختر جنسك</h4>
                        <div class="inputGroup">
                            <input @change="change_gender" id="radio1" name="radio" type="radio" value="male"/>
                            <label for="radio1">ذكر</label>
                        </div>
                        <div class="inputGroup">
                            <input @change="change_gender" id="radio2" name="radio" type="radio" value="female"/>
                            <label for="radio2">أنثى</label>
                            <b-card v-if="female_special">
                                <b-card-body>
                                    <div class="container">
                                        <form class="form">
                                            <div class="switch-field row">
                                              <div class="col-md-6">
                                                <input @change="special_female" id="radio3" name="switch-one" type="radio" value="pregnant"/>
                                                <label for="radio3">حامل</label>
                                              </div>
                                              <div class="col-md-6">
                                                <input @change="special_female" id="radio4" name="switch-one" type="radio" value="feeder" />
                                                <label for="radio4">مرضعة</label>
                                              </div>
                                            </div>
                                        </form>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </div>
                    </form>
                    </div>
                    <div class="col-lg-6">
                        <form class="form text-center">
                            <h4 class="w-fit d-inline-block text-center">كم تمارس من الرياضة يومياً؟</h4>
                            <div class="mt-2 d-inline text-light mr-2">{{ value_sport }} دقيقة</div>
                            <b-form-input @change="change_sport" id="range-sport" v-model="value_sport" type="range" :value="value_sport" min="0" max="180" step="5"></b-form-input>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-lg-6 text-center py-5">
                    <h4 class="d-inline ml-3">كم عمرك</h4>
                        <div class="mt-2 d-inline text-light">{{ value_age }} سنة</div>
                        <b-form-input id="range-age" v-model="value_age" type="range" :value="value_age" min="1" max="120"></b-form-input>
                    </div>
                    <div class="col-lg-6 text-center py-5">
                    <h4 class="d-inline ml-3">وزنك الحالي بالكيلوجرام</h4>
                        <div class="mt-2 d-inline text-light">{{ value_kg }} كيلوجرام</div>
                        <b-form-input id="range-kg" v-model="value_kg" type="range" :value="value_kg" min="1" max="200"></b-form-input>
                    </div>
                </div>
                <div class="bmi container">
                    <button class="calc btn w-fit d-block px-5 mx-auto bg-color2 text-dark mb-2" @click="calc_water">احسب كمية الماء المطلوبة</button>
                </div>
                <div v-if="!hide" class="result container">
                    <div class="bmi_wt row bg-success my-3 text-light">
                        <div class="col-md-12 d-flex justify-content-center  py-2">
                            <label>أنت تحتاج شرب {{water_quantity.toFixed(2)}} لتر من الماء يوميا أو ما يعادل {{(water_quantity*4.22).toFixed(1)}} كوب</label>
                        </div>
                    </div>
                </div>
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
            title: '5 لصحتك | اعرف كمية الماء التي يحتاجها جسمك يومياً'
        }
    },
      data(){
          return{
          value_age: 33,
          value_kg: 100,
          hide: true,
          water_quantity: null,
          value_sport: 40,
          age_factor: 1.57,
          sport_factor: null,
          gender_factor: null,
          female_special: false,
          feeder: false,
          pregnant: false,
          special_factor: 1,
          }
      },
      methods:{
        change_sport(){ // this function increases the cups of water needed by 1.5 cup for each 30 mins sports
            // start for loop
            let length = document.getElementById('range-sport').max
            for (let i = 5; i <= length; i += 5) {               
                if (this.value_sport == i) {
                    this.sport_factor = 0.175 * (i / 5)
                }
            }
            //end for loop
        },
        calc_water(){
          var input1 = document.getElementById('radio1'),
              input2 = document.getElementById('radio2')
            // consider gender factor
            if (input1.checked) {
                this.gender_factor = 1
            }else if(input2.checked){
                this.gender_factor = 0.75
            }else{
                this.gender_factor = 1
            }

            // consider age factor in age 19+ 
            if(this.value_age >= 19){
                this.age_factor = 1
            }else{
                this.age_factor = 1.57
            }
            
            // calculate amount of water needed
            if (this.value_sport != 0) { // in case of sport activity
                this.water_quantity = (parseFloat((((this.value_kg * 30) / 1000) * this.age_factor)) + (this.sport_factor/4.22)) * (this.gender_factor) * (this.special_factor)
                console.log(this.gender_factor);
                
                this.hide = false
            }else{ // in case of no sport activity
                this.water_quantity = ((this.value_kg * 30)/1000) * this.age_factor * (this.gender_factor)
                this.hide = false
            }
        },
        change_gender(){
            var input1 = document.getElementById('radio1'),
                input2 = document.getElementById('radio2')
            if(input2.checked){
                this.female_special = true
                console.log('female selected');
                
            }
            else{
              this.female_special = false
              this.special_factor = 1
                console.log('male selected');
            }
        },
        special_female(){
          var input3 = document.getElementById('radio3'),
              input4 = document.getElementById('radio4')
          if(input3.checked){
            this.pregnant = true
            this.special_factor = 0.95
              console.log('female pregnant selected ' + this.feeder);
              
          }else if(input4.checked){
            this.feeder = true
            this.special_factor = 1.2
              console.log('female feeder selected ' + this.pregnant);
          }
        }
      }
    }
</script>

<style lang='scss' scoped>
* {
  box-sizing: border-box;
}
.weight{
  background: url("../assets/water2.webp") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  // position: absolute;
  width: 100%;
  // height: fit-content;
  direction: rtl;

    @media (min-width: 990px) {
    height: 830px;
    
    }

  .layer{
    padding-top: 100px;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    background-color: rgba(1,1,1, 0.5);
    padding-bottom: 30px;

    @media (min-width: 990px) {
      height: 100%;
      
    }

    .input_data{
      background: rgba(var(--primary-hexa), 0.65);
      margin-top: -90px;

      h1, h4{
        direction: rtl;
        color: var(--secondary-color);
        font-family: 'Cairo';
      }

      h1{
        @media (max-width: 767px) {
          font-size: 1.4em;
          text-align: center !important;
          margin-bottom: 20px;
        }

      }

      ul{
        direction: rtl;
        list-style: none;

        li{
          font-size: 1.5em;
          font-weight: bold;
          width: fit-content;
          position: relative;
          font-family: 'Cairo';
        //   color: var(--secondary-color);
          
          padding: 5px 10px;
          border-radius: 5px;

        
        }
        p{
          font-family: 'Cairo';
        }
      }
      .form_2{

          .form{
            
            .inputGroup {
                background-color: #fff;
                display: block;
                margin: 10px 0;
                position: relative;

                label {
                  padding: 12px 30px;
                  width: 100%;
                  display: block;
                  text-align: right;
                  color: #3C454C;
                  cursor: pointer;
                  position: relative;
                  z-index: 2;
                  transition: color 200ms ease-in;
                  overflow: hidden;

                  &:before {
                    width: 100%;
                    height: 10px;
                    border-radius: 50%;
                    content: '';
                    // background-color: var(--secondary-color);
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%) scale3d(1, 1, 1);
                    transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
                    opacity: 0;
                    z-index: -1;
                  }

                  &:after {
                    width: 32px;
                    height: 32px;
                    content: '';
                    border: 2px solid var(--primary-color);
                    background-color: #fff;
                    background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
                    background-repeat: no-repeat;
                    background-position: 2px 3px;
                    border-radius: 50%;
                    z-index: 2;
                    position: absolute;
                    left: 30px;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;
                    transition: all 200ms ease-in;
                  }
                }

                input:checked ~ label {
                    color: #fff;
                    background-color: var(--secondary-color);

                  &:before {
                    transform: translate(-50%, -50%) scale3d(56, 56, 1);
                    opacity: 1;
                  }

                  &:after {
                    background-color: var(--secondary-color);
                    border-color: var(--tertiary-color);
                  }
                }

                input {
                  width: 32px;
                  height: 32px;
                  order: 1;
                  z-index: 2;
                  position: absolute;
                  right: 30px;
                  top: 50%;
                  transform: translateY(-50%);
                  cursor: pointer;
                  visibility: hidden;
                }
                .card{
                  position: absolute;
                  width: 100%;
                  z-index: 3;

                  .card-body{
                    padding: 5px !important;
                  }

                    .switch-field {
                        display: flex;
                        margin-bottom: 36px;
                        overflow: hidden;
                        margin-bottom: 5px !important;

                        input {
                            position: absolute !important;
                            clip: rect(0, 0, 0, 0);
                            height: 1px;
                            width: 1px;
                            border: 0;
                            overflow: hidden;
                            
                            &:checked + label {
                                background-color: #a5dc86;
                                box-shadow: none;
                                color: #fff;

                                &:before {
                                    transform: translate(-50%, -50%) scale3d(56, 56, 1);
                                    opacity: 1;
                                }

                                &:after {
                                    background-color: var(--secondary-color) !important;
                                    border-color: var(--tertiary-color) !important;
                                    color: #fff !important;
                                }
                            }
                        }
                        
                        label {
                            background-color: #e4e4e4;
                            color: rgba(0, 0, 0, 0.6);
                            font-size: 14px;
                            line-height: 1;
                            text-align: center;
                            margin-right: -1px;
                            border: 1px solid rgba(0, 0, 0, 0.2);
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
                            transition: all 0.1s ease-in-out;

                            padding: 10px;
                            margin-top: 0px;
                            margin-bottom: 0px;
                            
                            &:before {
                                width: 100%;
                                height: 10px;
                                border-radius: 50%;
                                content: '';
                                background-color: var(--secondary-color);
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%) scale3d(1, 1, 1);
                                transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
                                opacity: 0;
                                z-index: -1;
                            }

                            &:after {
                                width: 32px;
                                height: 32px;
                                content: '';
                                border: 2px solid var(--primary-color);
                                background-color: #fff;
                                background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
                                background-repeat: no-repeat;
                                background-position: 2px 3px;
                                border-radius: 50%;
                                z-index: 2;
                                position: absolute;
                                left: 30px;
                                top: 50%;
                                transform: translateY(-50%);
                                cursor: pointer;
                                transition: all 200ms ease-in;
                            }
                            
                            &:hover {
                                cursor: pointer;
                            }

                            &:first-of-type {
                                border-radius: 4px;
                            }

                            &:last-of-type {
                                border-radius: 4px;
                            }
                        }
                    }
                }   
        }
    }
          .calc{
            transition: 0.4s;

            &:hover{
              background-color: var(--tertiary-color) !important;
              color: #fff !important;
            }
          }

          .result{

            .table{

              tbody{

                tr{

                }
              }
              thead{
                
              }
            }
            .bmi_wt{
              background-color: #e756d4 !important;
              padding: 5px;
            }
          }
        }
    }
  }
}

</style>



