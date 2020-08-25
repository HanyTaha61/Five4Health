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
                        <ul class="list-group list_content">
                            <div class="row w-100">
                                <div class="col-md-6 list-group-item">
                                    <li><a href="#sanitizer_1">مقدمة</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li><a href="#sanitizer_2">الطريقة الأولى</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li><a href="#sanitizer_3">الطريقة الثانية</a></li>
                                </div>
                            </div>
                        </ul>
                        
                        <h5 id="sanitizer_1">مقدمة </h5>
                        <div>
                            <p>{{subject.head}}</p>
                            <p>ملاحظة: جميع المكونات متوفرة في الصيدليات ومحلات العطارة الكبيرة.</p>
                        </div>
                        <h5 id="sanitizer_2">الطريقة الأولى:</h5>
                        <p>
                            خذ 1/2 كوب من جل الصبار الطبيعي ، والذي يمكنك الحصول عليه عن طريق فتح ورقة الصبار الطازجة من المنتصف ، ثم استخلاص الجل الموجود بها ، ثم إضافة مقدار 1/2 كوب من كحول الأيزوبروبيل ، نخلط المكونين سوياً حتى تمتزج تماماً
                        </p>
                        <p>
                            بإمكانك إضافة نحو 10 قطرات من زيت اللافندر أو أي زيت عطري آخر إلى المعقم في حال كانت رائحة الكحول نفاذة بالنسبة لكِ، كما أن هذا الزيت يعتبر من الزيوت المضادة للبكتيريا والجراثيم ، وبالتالي ستحصل على معقم يدين ومطهر مثالي شبيه لذلك الموجود في الأسواق
                        </p>
                        <p>
                            في النهاية احفظ المعقم في علبة نظيفة أو علبة بخاخ رذاذ. ولكن احرص على اتباع النسب الصحيحة لتحصل على أفضل معقم.
                        </p>
                        <h5 id="sanitizer_3">الطريقة الثانية:</h5>
                        <p>
                            اخلط 2 ملعقة كبيرة من الكحول مع 1 ملعقة كبيرة من جل الصبار ، و 1 كوب من الماء المقطر ، و 10 قطرات من زيت القرفة ، و 1/2 ملعقة صغيرة من فيتامين  E، و 5 قطرات من زيت إكليل الجبل ، و 5 قطرات من زيت القرنفل ، و 5 قطرات من زيت الكافور ، و 10 قطرات من زيت شجرة الشاي ، ثم اخلطهم جيداً حتى تمتزج جميع المكونات ، ثم اسكب المزيج في علبة بخاخ رذاذ ، و استخدمه بالشكل المناسب.
                        </p>
                    </div>
                </b-col>
                <b-col lg="3">
                    <b-card class="mt-1 mb-5 text-center" title="" header="مواضيع ذات صلة">
                        <div v-for="item in this.$store.getters.detergents" :key="item.id">
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
            return this.$store.getters.detergents[0]
        },
        all_subjects(){
            return this.$store.getters.all_subjects
        }
    }
}
</script>
