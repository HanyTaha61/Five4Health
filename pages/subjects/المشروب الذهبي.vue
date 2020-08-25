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
                        <ul class="list-group mb-2 list_content list-unstyled">
                            <div class="row w-100">
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#golden-drink_1">مقدمة</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#golden-drink_2">فوائد المشروب الذهبي</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#golden-drink_3">المقادير</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#golden-drink_4">طريقة التحضير</a></li>
                                </div>
                            </div>
                        </ul>
                        
                        <h5 id="golden-drink_1">مقدمة </h5>
                        <div>{{subject.head}}</div>
                        <h5 id="golden-drink_2">فوائد المشروب الذهبي:</h5>
                        <p>
                            <ul>
                                <li>تحسين وظائف المخ و تقوية الذاكرة</li>
                                <li>الوقاية من السرطانات الأورام الخبيثة</li>
                                <li>التخفيف من ألم التهاب المفاصل</li>
                                <li>تحتوي على نسبة كبيرة من  الحديد و البوتاسيوم و الكالسيوم و فيتامين سي و فيتامين ب و فيتامين أ و مضادات الأكسدة</li>
                                <li>فقدان الوزن</li>
                                <li>التحكم في معدل السكر بالدم</li>
                                <li>تحسين عملية الهضم ويحمي من أمراض القولون وتكون الحصوات والامساك</li>
                                <li>تعزيز صحة القلب ويساعد على التقليل من معدل الكوليسترول المرتفع بالدم والدهون الثلاثية</li>
                                <li>علاج الأمراض الجلدية والتقليل من الحساسية والحكة والالتهابات</li>
                                <li>تقوية العظام</li>
                                <li>الحماية من أمراض الشتاء مثل نزلات البرد وغيرها</li>
                            </ul>
                        </p>
                        <p>
                            بإمكانك إضافة نحو 10 قطرات من زيت اللافندر أو أي زيت عطري آخر إلى المعقم في حال كانت رائحة الكحول نفاذة بالنسبة لكِ، كما أن هذا الزيت يعتبر من الزيوت المضادة للبكتيريا والجراثيم ، وبالتالي ستحصل على معقم يدين ومطهر مثالي شبيه لذلك الموجود في الأسواق
                        </p>
                        <p>
                            في النهاية احفظ المعقم في علبة نظيفة أو علبة بخاخ رذاذ. ولكن احرص على اتباع النسب الصحيحة لتحصل على أفضل معقم.
                        </p>
                        <h5 id="golden-drink_3">المقادير:</h5>
                        <p>
                            <ul>
                                <li>كوب من الحليب المفضل لديك وننصح بالأصلي الطازج</li>
                                <li>ملعقة صغيرة من الكركم</li>
                                <li>ربع ملعقة صغيرة من الفلفل الأسود</li>
                                <li>نصف ملعقة صغيرة من القرفة</li>
                                <li>ربع ملعقة صغيرة من الزنجبيل المطحون أو الطازج</li>
                                <li>ربع ملعقة صغيرة من الهيل</li>
                                <li>ملعقة صغيرة من زيت جوز الهند</li>
                                <li>حبة واحده من ينسون النجمة</li>
                                <li>5 حبات من القرنفل أو المسمار.</li>
                            </ul>
                        </p>
                        <h5 id="golden-drink_4">طريقة التحضير:</h5>
                        <p>
                            <ol>
                                <li>يتم وضع الحليب على النار وتضاف إليه جميع التوابل</li>
                                <li>يترك على النار الهادئة مع التقليب حتى الغليان.</li>
                                <li>يتم تصفية المشروب ويصب في الكوب ، ثم يحلى بعسل النحل الأصلي حسب الرغبة.</li>
                                <li>يقدم ساخناً في الصباح مع وجبة الإفطار أو قبل النوم.</li>
                            </ol>
                        </p>
                    </div>
                </b-col>
                <b-col lg="3">
                    <b-card class="mt-1 mb-5 text-center" title="" header="مواضيع ذات صلة">
                        <div v-for="item in this.$store.getters.corona" :key="item.id">
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
            return this.$store.getters.corona[0]
        },
        all_subjects(){
            return this.$store.getters.all_subjects
        }
    }
}
</script>
