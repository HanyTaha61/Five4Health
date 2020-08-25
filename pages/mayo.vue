<template>
    <b-container class="bg-light">
        <div class="mayo text-center pt-5">
            <h1>هرم مايو كلينيك للوزن الصحي</h1>
            <b-img-lazy class="w-75" src="../assets/mayo2.png"></b-img-lazy>
            <p class="h4 text-right font-weight-bold">
                هل تبحث عن برنامج جديد وفعال لتخفيف الوزن؟ إذن، هرم مايو كلينيك هو الحل.
            </p>
            <p class="text-right intro">
                .هرم مايو كلينيك هو عبارة عن أداة تساعدك في توجيهك إلى تناول نظام غذائي متوازن ومغذٍ مع الحصول على وزن صحي<br>
                ينبغي أن تحتل الخضراوات والفواكه، وهي أساس الهرم، موضع تركيزك. حيث تكون هذه الأطعمة منخفضة في كثافة الطاقة. وهذا يعني أنه يمكنك تناول الكثير منها لأنها لا تحتوي على الكثير من السعرات الحرارية. عندما ترتفع لأعلى في الهرم، تصبح مجموعات الطعام أعلى في كثافة الطاقة — حيث يوجد بها كمية أكبر من السعرات الحرارية بالنسبة لحجمها. لفقدان الوزن، يجب عليك تحديد عدد الحصص من تلك الأطعمة التي تتناولها.
                يتم تحديد عدد الحصص لكل مجموعة غذائية حسب مستواك اليومي من السعرات الحرارية المستهدفة. إذا كان هدفك هو 1200 سعرة حرارية، يجب أن تتضمن خطة وجباتك أربع حصص أو أكثر من الخضروات، وثلاث حصص من البروتين/الألبان وثلاث حصص من الدهون.
            </p>
            <p class="text-right mt-3">إذا أردت معرفة هدفك من السعرات الحرارية املأ الخانات التالية ثم اضغط (احسب)</p>
            <div class="w-50 mx-auto">
                <b-form-input type="number" @keyup="check_age" v-model="age" id="age" class="text-right mb-2" placeholder="اكتب عمرك بالسنوات"></b-form-input>
                <div v-if="age_limit == true" class="text-right mb-3 text-danger">العمر بين 19 و 99 عام</div>
                <b-form-input type="number" @keyup="check_length" v-model="length" id="length" class="text-right mb-2" placeholder="اكتب طولك بالسنتيمتر"></b-form-input>
                <div v-if="length_limit" class="text-right mb-3 text-danger">الطول بين 90 و 210 سم</div>
                <b-form-input type="number" @keyup="check_weight" v-model="weight" id="weight" class="text-right mb-2" placeholder="اكتب وزنك بالكيلوجرام"></b-form-input>
                <div v-if="weight_limit" class="text-right mb-3 text-danger">الوزن بين 50 و 250 كجم</div>
                <b-form-select id="gender" class="mb-3" v-model="gender">
                    <template v-slot:first>
                        <b-form-select-option :value="null" disabled>-- اختر جنسك --</b-form-select-option>
                    </template>
                    <b-form-select-option value="male">ذكر</b-form-select-option>
                    <b-form-select-option value="female">أنثى</b-form-select-option>
                </b-form-select>
                <div v-if="calc_all" class="text-right text-danger d-inline">يجب كتابة جميع البيانات بطريقة صحيحة</div>
                <div @click="calc_mayo" class="btn bg-color1 text-light my-1 mb-2">احسب</div>
            </div>
            <div v-if="val != null" class="result pb-3">
                <b-img class="w-75" :src="require(`../assets/mayo/${val}.png`)"></b-img>
                <div class="text-right py-2">
                    <h4 class="text-center mt-3 font-weight-bold text-color1">هدفك هو {{val}} سعر حراري</h4>
                    <h4>توضيح حصص الهرم الغذائي</h4>
                    <div>
                        <b-card-group deck>
                            <b-row class="w-100">
                                <b-col md="6">
                                    <b-card class="mb-2" title="حصة من الفواكة">
                                        <b-card-text>
                                            <ul style="direction:rtl" class="">
                                                <li>1تفاحة أو إجاصة صغيرة</li>
                                                <li>1/2 كوب عصير فواكة غير محلّى</li>
                                                <li>3/4كوب توت بري</li>
                                                <li>1 كوب شمام مكعبات</li>
                                            </ul>
                                        </b-card-text>
                                        </b-card>

                                    <b-card class="mb-2" title="حصة من الخضراوات">
                                        <b-card-text>
                                            <ul style="direction:rtl" class="">
                                                <li>1 كوب بروكولي</li>
                                                <li>1 جزر متوسط</li>
                                                <li>3/4كوب فاصوليا خضراء</li>
                                                <li>2كوب أوراق خضراء</li>
                                            </ul>
                                        </b-card-text>
                                    </b-card>

                                    <b-card class="mb-2" title="حصة من البروتين / منتجات الحليب">
                                        <b-card-text>
                                            <ul style="direction:rtl" class="">
                                                <li>1/2 كوب جبنة شيدار قليلة الدهون مبروش</li>
                                                <li>2 1/2 أونصة دجاج</li>
                                                <li>1/2 1 أونصة لحم بقري</li>
                                                <li>3 أونصة سمك</li>
                                                <li>1 كوب حليب خالي الدسم</li>
                                                <li>1 كوب لبن قليل السعرات , خالي السعرات</li>
                                            </ul>
                                    </b-card-text>
                                    </b-card>
                                </b-col>
                                <b-col md="6">
                                    <b-card class="mb-2" title="حصة من الكربوهيدرات">
                                        <b-card-text>
                                            <ul style="direction:rtl" class="">
                                                <li>1/2 كوب باستا أو حبوب مجففة</li>
                                                <li>1/2بيجل صغير حبوب كاملة</li>
                                                <li>1 شريحة خبز حبوب كاملة</li>
                                                <li>1/3 كوب أرز بني</li>
                                            </ul>
                                        </b-card-text>
                                        </b-card>

                                    <b-card class="mb-2" title="حصة من الدهون">
                                        <b-card-text>
                                            <ul style="direction:rtl" class="">
                                                <li>1/2 1ملعقة كبيرة زبدة الفستق</li>
                                                <li>3 ملعقة كبيرة.كريما حامضة خالية من الدهن</li>
                                                <li>1 ملعقة صغيرة زيت الزيتون أو الكانولا</li>
                                                <li>1 ملعقة صغيرة.زبدة أو مدهون خالي من الزيوت المتحولة</li>
                                            </ul>
                                        </b-card-text>
                                        </b-card>

                                    <b-card class="mb-2" title="حصة من الحلويات">
                                        <b-card-text>
                                            <ul style="direction:rtl" class="">
                                                <li>1/2 1 ملعقة كبيرة. من المربى أو الفاكهة</li>
                                                <li>1 شريحة مثلث صغيرة من الكعك</li>
                                                <li>1/3 سوربيت</li>
                                                <li>1 ملعقة كبيرة عسل</li>
                                            </ul>
                                        </b-card-text>
                                        </b-card>
                                </b-col>
                            </b-row>
                        </b-card-group>                        
                    </div>
                    <h4 class="">وجبات خفيفة صحية تساعدك في الشعور بالشبع</h4>
                    <p>
                        إذا شعرت بالجوع أثناء اتباع هرم الوزن الصحي لمايو كلينك، فتناول المزيد من الفاكهة والخضروات كوجبات خفيفة. فقط تأكد من أن الفاكهة إما طازجة أو معبأة في ماء أو عصير — وتخلص من السائل قبل تناولها.
                    </p>
                </div>
            </div>
        </div>
    </b-container>
</template>

<script>
export default {
    data(){
        return{
            age: null,
            age_limit: null,
            length: null,
            length_limit: null,
            weight: null,
            weight_limit: null,
            gender: null,
            val: null,
            calc_all: null
        }
    },
    methods:{
        check_age(){
            if(this.age < 19 || this.age > 99){
                this.age_limit = true
            }else{
                this.age_limit = false
            }

        },
        check_length(){
            if(this.length < 90 || this.length > 210){
                this.length_limit = true
            }else{
                this.length_limit = false
            }

        },
        check_weight(){
            if(this.weight < 50 || this.weight > 250){
                this.weight_limit = true
            }else{
                this.weight_limit = false
            }
        },
        calc_mayo(){
            if(this.weight_limit == false && this.age_limit == false && this.length_limit == false && this.gender != null){
                if(this.weight <= 113){
                    if(this.gender == 'female'){
                        this.val = 1200
                    }else{
                        this.val = 1400
                    }
                }else if(this.weight > 113 && this.weight <= 135){
                    if(this.gender == 'female'){
                        this.val = 1400
                    }else{
                        this.val = 1600
                    }
                }else if(this.weight > 135){
                    if(this.gender == 'female'){
                        this.val = 1600
                    }else{
                        this.val = 1800
                    }
                }
                this.calc_all = false
            }else{
                this.calc_all = true
            }
        }
    }
}
</script>

<style lang='scss' scoped>
    .mayo{
        
        h1{
            
            @media (max-width: 767px) {
                font-size: 1.8em;
            }
        }
        .intro{
            line-height: 35px;
        }
        .result{

            .card-deck{

                .card{

                    .card-body{

                        .card-title{
                            font-size: 1em;
                            font-weight: bold;
                            text-align: center;
                        }
                        // .card-text{

                        // }
                    }

                }
            }
        }
        .custom-select{
            direction: rtl;
        }
    }
</style>
