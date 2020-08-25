<template>
    <div class="blog mt-4 mb-3">
        <b-container>
            <b-row style="direction: rtl" class="text-right">
                <b-col lg="9" class="border">
                    <h1 class="title text-center text-color1">{{subject.title}}</h1>
                    <div class="info">
                        <div class="source">المصدر: {{subject.source}}</div>
                        <div class="date">
                            تم النشر يوم: {{subject.date}}
                        </div>
                    </div>
                    <div class="my-2 mx-auto">
                        <img class="w-50 mx-auto d-block" :src="require(`../../subjects/sections/${subject.section}/${subject.title}.jpeg`)" alt="post-image">
                    </div>
                    <div class="content">
                        <h3>محتويات الصفحة</h3>
                        <ul class="list-group list_content list-unstyled">
                            <div class="row w-100">
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#hair_intro">مقدمة</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#hair_1">أسباب ظهورالشعر الأبيض</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#hair_2">أغذية تساهم في منع ظهور الشعر الأبيض</a></li>
                                </div>
                            </div>
                        </ul>
                        <p id="hair_intro">
                            {{subject.head}}
                        </p>
                        
                        <h3 id="hair_1">أسباب ظهورالشعر الأبيض </h3>
                        <h5><b>العامل الوراثي</b></h5>
                        <p>
                            يعتبر العامل الوراثي أحد أكثر العوامل التي تؤدي إلى ظهور الشعر الأبيض في سن مبكرة. وقد يعود ذلك إلى ظهور الشعر الأبيض في أحد الأبوين أو الأجداد.
                            حتى كتابة هذا المقال فإنه من غير الممكن التحكم في هذا السبب ولكن يمكن تغيير لون الشعر باستخدام صبغات الشعر
                        </p>

                        <h5><b>فقدان صبغة الميلانين</b></h5>
                        <p>
                            يؤدي نمو الشعر إلى انخفاض كمية صبغة الميلانين الموجودة في بصيلات الشعر و الأنسجة المحيطة بجذر الشعر مما يؤدي إلى تحوله إلى اللون الرمادي أو الأبيض بشكل كامل.
                            كما أن الشيخوخة المبكرة و الآثار الجانبية لبعض الأدوية تساهم أيضاً في ظهور الشعر الأبيض.
                        </p>

                        <h5><b>نقص الفيتامينات</b></h5>
                        <p>
                            يؤدي نقص فيتامين D6 و فيتامين B12 و فيتامين E إلى ظهور الشعر الأبيض في وقت مبكر.
                            كما أجريت دراسة عام 2016 أثبتت أن نقص مادة " serum ferritin " المسئولة عن تخزين الحديد في الجسم و فيتامين B12 و الكوليسترول المفيد "HDL-C" تعد من الأمور التي تساهم في ظهور الشيب مبكراً.
                        </p>

                        <h5><b>الإجهاد و التعب وبعض الأمراض الأخرى</b></h5>
                        <p>
                            من الممكن أن يتسبب الإجهاد و التعب في اضطرابات في النوم و ارتفاع ضغط الدم و أيضا ظهور الشعر الأبيض.
                            كما أن بعض الأمراض الأخرى مثل الثعلبة و البهاق تتسبب في ظهور الشيب حيث أن جهاز المناعة يقوم بمهاجمة الشعر و إزالة صبغته.<br>
                            تسبب الاضطرابات الهرمونيّة الناتجة عن مشاكل الغدة الدرقية سواء تمثلت هذه المشاكل بفرط أو قصور الغدة الدرقية تأثيراً على ظهور الشعر الأبيض مبكراً، كما يرتبط التدخين أيضاً مع ظهور الشعر الأبيض في وقت مبكر
                        </p>

                        <h3 id="hair_2">أغذية تساهم في منع ظهور الشعر الأبيض</h3>
                        <p>
                            <ul>
                                <li>الجزر والمشمش وجميع الفواكه البرتقالية</li>
                                <li>الكرز ، التوت ، الطماطم والفلفل</li>
                                <li>المكسّرات والفاصوليا جميعها والخضراوات الورقية الخضراء جميعها</li>
                                <li>الحبوب الكاملة و العسل الأسود و الكبده و ( الخميرة الغذائية أو الخميرة البيرة وليست_الخميرة_الجافة )</li>
                                <li>الزبادي أو الياغورت مخلوط بملعقة من الخميرة البيرة )) أو (( عسل وطحينية )) أو الكبدة المشوية </li>
                                <li>اللحم البلدي خصوصاً #الدجاج_البلدي</li>
                                <li>الخضار الورقية الداكنة اللون مثل الخس والملوخية والجرجير وغيرها</li>
                                <li>بذر الكتان و زيته و الأسماك الدهنية خصوصاً السلمون والمحار والسردين</li>
                                <li>المكسرات و خصوصاً ( #الجوز أو #عين_الجمل )</li>
                                <li>زيت حبة البركة أو الحبة السوداء</li>
                                <li>السبانخ</li>
                                <li>البيض</li>
                            </ul>
                        </p>
                    </div>
                </b-col>
                <b-col lg="3">
                    <b-card class="mt-1 mb-5 text-center" title="" header="مواضيع ذات صلة">
                        <div v-for="item in this.$store.getters.hair_care" :key="item.id">
                            <router-link :to='"/subjects/" + item.title'>
                                <img class="w-100" :src="require(`../../subjects/sections/${item.section}/${item.title}.jpeg`)" alt="">
                            </router-link>
                            <h6 class="w-fit mx-auto">{{item.title}}</h6>
                            <hr>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
      head(){
        return{
            title: `5 لصحتك | ${this.subject.title}`
        }
    },
    computed:{
      head(){
        return{
            title: `5 لصحتك | ${this.subject.title}`
        }
    },
        subject(){
            return this.$store.getters.hair_care[0]
        },
        all_subjects(){
            return this.$store.getters.all_subjects
        }
    }
}
</script>

<style src="./style.scss" lang="scss" />

