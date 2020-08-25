<template>
  <div class="weight">
    <div class="layer">
      <div class="container">
        <div class="input_data p-2 rounded">
          <h1 class="text-center">طرق حساب الوزن المثالي</h1>
            <ol class="text-right">
              <li class="mb-2">دليل كتلة الجسم (BMI)</li>
              <p class="mb-3 text-light lead">
                إن من أفضل الطرق التي يمكن أن تحدد إذا ما كان وزنك طبيعي أم لا هي ما تسمى بطريقة دليل كتلة الجسم Body Mass Index أو BMI.
                 <br>لحساب دليل كتلة جسمك ، املأ البيانات أدناه ، ثم اضغط "احسب الوزن المثالي"
              </p>
              <div class="form_1  rounded">
                <div class="row">
                  <div class="col-lg-4">
                    <form class="form">
                        <h4 class="text-center">اختر جنسك</h4>
                      <div class="inputGroup">
                        <input id="radio1" name="radio" type="radio"/>
                        <label for="radio1">ذكر</label>
                      </div>
                      <div class="inputGroup">
                        <input id="radio2" name="radio" type="radio"/>
                        <label for="radio2">أنثى</label>
                      </div>
                    </form>
                  </div>
                  <div class="col-lg-4">
                    <form class="form">
                        <h4 class="text-center">هل تمارس الرياضة</h4>
                      <div class="inputGroup">
                        <input id="radio3" name="radio" type="radio"/>
                        <label for="radio3">قليلاً</label>
                      </div>
                      <div class="inputGroup">
                        <input id="radio4" name="radio" type="radio"/>
                        <label for="radio4">أحياناً</label>
                      </div>
                      <div class="inputGroup">
                        <input id="radio5" name="radio" type="radio"/>
                        <label for="radio5">كثيراً</label>
                      </div>
                    </form>
                  </div>
                  <div class="col-lg-4">
                    <form class="form">
                        <h4 class="text-center">أيهما تأكل أكثر</h4>
                      <div class="inputGroup">
                        <input id="radio6" name="radio" type="radio"/>
                        <label for="radio6">لحم</label>
                      </div>
                      <div class="inputGroup">
                        <input id="radio7" name="radio" type="radio"/>
                        <label for="radio7">سمك</label>
                      </div>
                      <div class="inputGroup">
                        <input id="radio8" name="radio" type="radio"/>
                        <label for="radio8">دجاج</label>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-lg-6 text-center py-5">
                    <h4 class="d-inline ml-3">طولك بالسنتيمتر</h4>
                      <div class="mt-2 d-inline">{{ value_cm }} سنتيمتر</div>

                      <b-form-input id="range-cm" v-model="value_cm" type="range" :value="value_cm" min="150" max="220"></b-form-input>
                  </div>
                  <div class="col-lg-6 text-center py-5">
                    <h4 class="d-inline ml-3">وزنك الحالي بالكيلوجرام</h4>
                      <div class="mt-2 d-inline">{{ value_kg }} كيلوجرام</div>
                      <b-form-input id="range-kg" v-model="value_kg" type="range" :value="value_kg" min="50" max="300"></b-form-input>
                  </div>
                </div>
                <div class="bmi container">
                  <button class="calc btn w-fit d-block px-5 mx-auto bg-color2 text-dark mb-2" @click="calc_bmi">احسب الوزن المثالي</button>
                </div>
                <div v-if="!hide" class="result container">
                  <div class="bmi_wt row bg-success my-3 text-light">
                    <div class="col-md-5 d-flex justify-content-center  py-2">
                      <label>قيمة مؤشر كتلة الجسم</label>
                    </div>
                    <div class="col-md-1 w-fit mx-auto d-flex justify-content-center border py-2">
                      <span>{{bmi.toFixed(0)}}</span>
                    </div>
                    <div class="col-md-5 d-flex justify-content-center  py-2">
                      <label>الوزن المثالي بالكيلوجرام</label>
                    </div>
                    <div class="col-md-1 w-fit mx-auto d-flex justify-content-center border py-2">
                      <span>{{value_cm - 100}}</span>
                    </div>
                  </div>
                  <b-table hover :items="items"></b-table>
                </div>
              </div>
              <hr>
              <li class="my-2 mt-5">شريط القياس</li>
              <p class="mb-3 text-light lead">
                يعتبر شريط القياس من التقنيات المستخدمة في قياس الوزن، وذلك بقياس محيط الخصر. وتعتبر الدهون المتراكمة حول الخصر أشد خطرا من الدهون الموجودة في محيط الأرداف أو في أي جزء آخر في الجسم. فتراجع قياس الخصر يعني تراجع أو انخفاض كمية الدهون في الجسم. والجدول أدناه دليل مهم في هذا الصدد:
                  <b-table class="mt-5" hover :items="metering"></b-table>
              </p>
            </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    
export default {
    head(){
        return{
            title: '5 لصحتك | اعرف وزنك المثالي'
        }
    },
  data(){
    return{
      value_cm: 170,
      value_kg: 80,
      hide: true,
      bmi: 0,
      items: [
          { "قيمة BMI": 20, الدلالة: 'الوزن دون الطبيعي', _rowVariant: ''},
          { "قيمة BMI": "20-25"	, الدلالة: 'الوزن طبيعي', _rowVariant: ''},
          { "قيمة BMI": "25-30", الدلالة: 'الوزن زائد عن الطبيعي', _rowVariant: ''},
          { "قيمة BMI": "30-35", الدلالة: 'الشخص يعتبر بدينا', _rowVariant: ''},
          { "قيمة BMI": "35-40", الدلالة: 'الشخص يعتبر بدينا جدا', _rowVariant: ''},
          { "قيمة BMI": "أكثر من 40", الدلالة: 'الشخص يعتبر مفرط في البدانة', _rowVariant: ''}
        ],
        metering:[
          { "الجنس": "ذكر", "خطر شديد": 'أكثر من 94 سم', "خطر شديد جدا": 'أكثر من 102 سم'},
          { "الجنس": "أنثى", "خطر شديد": 'أكثر من 80 سم', "خطر شديد جدا": 'أكثر من 88 سم'}
        ]
    }
  },
  methods:{
    calc_bmi(){
      this.bmi = this.value_kg / (Math.pow((this.value_cm/100).toFixed(2),2))
      
      let x = this.items[1]._rowVariant

      if (this.bmi <= 20) {
        this.items[0]._rowVariant = 'danger'
        this.items[1]._rowVariant = ''
        this.items[2]._rowVariant = ''
        this.items[3]._rowVariant = ''
        this.items[4]._rowVariant = ''
        this.items[5]._rowVariant = ''

      } else if (this.bmi > 20 && this.bmi <= 25) {
        this.items[0]._rowVariant = ''
        this.items[1]._rowVariant = 'success'
        this.items[2]._rowVariant = ''
        this.items[3]._rowVariant = ''
        this.items[4]._rowVariant = ''
        this.items[5]._rowVariant = ''
      } else if (this.bmi > 25 && this.bmi <= 30) {
        this.items[0]._rowVariant = ''
        this.items[1]._rowVariant =  ''
        this.items[2]._rowVariant = 'warning'
        this.items[3]._rowVariant = ''
        this.items[4]._rowVariant = ''
        this.items[5]._rowVariant = ''
      } else if (this.bmi > 30 && this.bmi <= 35) {
        this.items[0]._rowVariant = ''
        this.items[1]._rowVariant = ''
        this.items[2]._rowVariant =  ''
        this.items[3]._rowVariant = 'danger'
        this.items[4]._rowVariant = ''
        this.items[5]._rowVariant = ''
      } else if (this.bmi > 35 && this.bmi <= 40) {
        this.items[0]._rowVariant = ''
        this.items[1]._rowVariant = ''
        this.items[2]._rowVariant = ''
        this.items[3]._rowVariant =  ''
        this.items[4]._rowVariant = 'danger'
        this.items[5]._rowVariant = ''
      }else if (this.bmi > 40) {
        this.items[0]._rowVariant = ''
        this.items[1]._rowVariant = ''
        this.items[2]._rowVariant = ''
        this.items[3]._rowVariant = ''
        this.items[4]._rowVariant =  ''
        this.items[5]._rowVariant = 'danger'
      }
      
      this.hide = false
    }
  }
}
</script>

<style lang='scss' scoped>
* {
  box-sizing: border-box;
}
.weight{
  background: url("../assets/bg-balance.webp") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  // position: absolute;
  width: 100%;
  height: fit-content;
  direction: rtl;

  .layer{
    padding-top: 100px;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    background-color: rgba(0,0,0, 0.35);
    padding-bottom: 30px;

    @media (min-width: 990px) {
      height: 100%;
      
    }

    .input_data{
      background: rgba(var(--primary-hexa), 0.85);
      margin-top: -90px;

      h1, h4{
        direction: rtl;
        color: var(--secondary-color);
        font-family: 'Cairo';
      }

      h1{
        @media (max-width: 767px) {
          font-size: 1.8em;
          text-align: center !important;
          margin-bottom: 20px;
        }

      }
      ol{
        direction: rtl;
        list-style: none;
        counter-reset: li;

        li{
          font-size: 1.5em;
          font-weight: bold;
          width: fit-content;
          position: relative;
          font-family: 'Cairo';
          color: var(--primary-color);
          background-color: var(--secondary-color);
          padding: 5px 10px;
          border-radius: 5px;
          counter-increment: li;

          &::before{
            content: counter(li);
            color: var(--secondary-color) !important;
            display: inline-block; width: 1em;
            margin-right: -1.1em;
            font-size: 1.2em;
          }
        }
        p{
          font-family: 'Cairo';
        }
        .form_1{

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
                }

                input:checked ~ label {
                  color: #fff;

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
}

</style>



