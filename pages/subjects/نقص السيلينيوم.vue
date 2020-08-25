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
                                    <li class=""><a class="text-dark" href="#selinium_intro">مقدمة</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#selinium_1">أعراض نقص السيلينيوم</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#selinium_2">أطعمة غنية بمعدن السيلينيوم</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#selinium_3">فوائد السيلينيوم</a></li>
                                </div>
                            </div>
                        </ul>
                        <h5 id="selinium_intro">مقدمة</h5>
                        <p>{{subject.head}}</p>
                        <h5 id="selinium_1">أعراض نقص السيلينيوم </h5>
                        <p>
                            <ul>
                                <li>تساقط الشعر</li>
                                <li>ضعف جهاز المناعة</li>
                                <li>الدوار (الدوخة)</li>
                                <li>نزلات البرد المستمرة</li>
                                <li>الإعياء و الضباب العقلي</li>
                                <li>ضعف العضلات</li>
                                <li>ظهور الثآليل بالجسم</li>
                                <li>العقم عند الرجال والنساء</li>
                            </ul>
                        </p>
                        <h5 id="selinium_2">أطعمة غنية بمعدن السيلينيوم</h5>
                        <p>
                            <ul>
                                <li>الأرز البني</li>
                                <li>الفاصوليا – يفضل الحمراء</li>
                                <li>الخبز الأسمر</li>
                                <li>الجوز البرازيلي</li>
                                <li>سمك التونة و الهلبوت و السردين و المحار </li>
                                <li>البيض</li>
                                <li>الدجاج</li>
                                <li>الخبز الأبيض</li>
                                <li>بذور دوار الشمس</li>
                                <li>الشوفان</li>
                            </ul>
                        </p>
                        <h5 id="selinium_3">فوائد السيلينيوم</h5>
                        <p>
                            <ul>
                                <li>تحسين الخصوبة </li>
                                <li>تقوية جهاز المناعة</li>
                                <li>الحماية من السرطان</li>
                                <li>تحسين صحة القلب و الدورة الدموية</li>
                                <li>تحسين صحة الغدة الدرقية </li>
                                <li>حماية الدماغ والجهاز العصبي</li>
                                <li>تخفيف أعراض الربو</li>
                            </ul>
                        </p>
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
            return this.$store.getters.symptoms[3]
        },
        all_subjects(){
            return this.$store.getters.all_subjects
        }
    }
}
</script>
