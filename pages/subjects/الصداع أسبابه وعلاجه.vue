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
                    <div class="my-2 mx-auto w-fit">
                        <img :src="require(`../../subjects/sections/${subject.section}/${subject.title}.jpeg`)" alt="post-image">
                    </div>
                    <div class="content">
                        <h5>محتويات الصفحة</h5>
                        <ul class="list-group list_content mb-2">
                            <div class="row w-100">
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#headache_intro">مقدمة</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#headache_1">صداع التوتر و صداع الشد العصبي</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#headache_2">الصداع النصفي</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#headache_3">الصداع العنقودي </a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#headache_4">صداع الجيوب الأنفية </a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#headache_5">ملاحظة مهمة</a></li>
                                </div>
                            </div>
                        </ul>
                        <h5 id="headache_intro">مقدمة</h5>
                        <p>{{subject.head}}</p>
                        
                        <h5 id="headache_1">صداع التوتر و صداع الشد العصبي </h5>
                        <p>يحدث عندما تضيق العضلات حول الرأس والرقبة والأسباب وراء هذا النوع من الصداع هي :: الضغط العصبي، القلق، التعرض لموقف سيئ أو إجهاد العين و ينصح بتناول مشروبات مثل النعناع و الزنجبيل و البابونج و موز بالحليب ثم الاسترخاء أو النوم وعندما تستيقظ تخلص من سبب الصداع 
                        </p>
                        
                        <h5 id="headache_2">الصداع النصفي  </h5>
                        <p>يحدث يحدث بسبب عوامل عدة ، فمنها مثلاً الإجهاد العاطفي أو البدني، بعض الأطعمة، تغيير أنماط النوم والتغيرات الهرمونية والعوامل البيئية مثل الضوضاء العالية والأضواء الساطعة. يمكن الراحة في غرفة مظلمة أو إضاءة بسيطة وتجنب الأضواء الساطعة والأصوات المزعجة وتناول التفاح أو عصير التفاح ثم الاسترخاء أو النوم وعندما تستيقظ تخلص من سبب الصداع 
                        </p>

                        <h5 id="headache_3">الصداع العنقودي  </h5>
                        <p>ينشأ بسبب خطأ في وظيفة العصب، ولا توجد مسببات معروفة للصداع العنقودي ولكن يفضل أن ترتاح العين ويتناول المريض للمشروبات و الأطعمة التي تحتوي على القرفة.
                        </p>

                        <h5 id="headache_4">صداع الجيوب الأنفية   </h5>
                        <p>يحدث غالباً أثناء أو بعد نزلات البرد ويكون نتيجة تراكم و ضغط المخاط في الجيوب الأنفية
                            يفضل عدم ميلان الرأس للأمام و إبقائها للخلف قليلاً وهذا يساعد على اخراج المخاط وتفريغ الجيوب الأنفية ، ينصح أيضاً بتناول البصل و الثوم و أطعمة تحتوي على فيتامين C مثل الفواكه الحمضية كما يساعد استنشاق البخار أو مزيلات الاختناق في تخفيف احتقان الجيوب الأنفية
                        </p>

                        <h5 id="headache_5">ملاحظة مهمة</h5>
                        <p>أصحاب الصداع المزمن و المتواصل ننصحهم بعمل حجامة على يد خبير مرةً واحده كل شهرين</p>
                    </div>
                </b-col>
                <b-col lg="3">
                    <b-card class="mt-1 mb-5 text-center" title="" header="مواضيع ذات صلة">
                        <div v-for="item in this.$store.getters.symptoms" :key="item.id">
                            <router-link :to='"/subjects/" + item.title'>
                                <img class="w-100" :src='require(`../../subjects/sections/${item.section}/${item.title}.jpeg`)' alt="">
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
        subject(){
            return this.$store.getters.symptoms[2]
        },
        all_subjects(){
            return this.$store.getters.all_subjects
        }
    }
}
</script>
