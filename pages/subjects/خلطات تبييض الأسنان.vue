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
                        <ul class="list-group mb-2 list_content">
                            <div class="row w-100">
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="" href="#whiten-teeth_1">مقدمة</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="" href="#whiten-teeth_2">قشر الموز</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="" href="#whiten-teeth_3">صودا الخبز</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="" href="#whiten-teeth_4">قشر_البرتقال</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="" href="#whiten-teeth_5">الفراولة</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="" href="#whiten-teeth_6">الليمون</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="" href="#whiten-teeth_7">الملح</a></li>
                                </div>
                            </div>
                        </ul>
                        
                        <h5 id="whiten-teeth_1">مقدمة </h5>
                        <div>{{subject.head}}</div>
                        <h5 id="whiten-teeth_2">قشر الموز</h5>
                        <p>
                            يتميز قشر الموز بفوائده في تبييض الأسنان، وذلك لاحتوائه على العديد من المعادن الضرورية كالبوتاسيوم والمغنيسيوم، والتي يتم امتصاصها عن طريق الأسنان
                        </p>
                        <h5 id="whiten-teeth_3">صودا الخبز </h5>
                        <p>
                            <ol>
                            <li>يمكنك مزج ربع ملعقة صغيرة من صودا الخبز مع إضافة القليل من معجون الأسنان، ثم ضع هذا الخليط لمرة أو مرتين في الأسبوع.</li>
                            <li>يمكنك إستخدام غسول الفم مع صودا الخبز لتبييض أسنانك عن طريق خلط ملعقة كبيرة من صودا الخبز ونصف ملعقة من بيروكسيد الهيدروجين مع كوب واحد من الماء البارد، لمدة ثلاث مرات في اليوم.</li>
                            <li>يمكنك فرك أسنانك بلطف لمدة دقيقتين على الأقل مع صودا الخبز المخفف. يمكن القيام بذلك مرتين في الأسبوع الأول، وبعد ذلك كل 15 يوما.</li>
                            </ol>
                        </p>
                        <h5 id="whiten-teeth_4">قشر البرتقال</h5>
                        <p>
                            <ol>
                                <li>عليك فرك قشر البرتقال بأسنانك كل ليلة قبل النوم. فيتامين C والكالسيوم المتواجدان في قشر البرتقال سوف يحارب الكائنات الدقيقة طوال الليل.</li>
                                <li>في حال لم يتوفر لديك قشر البرتقال الطازج، يمكنك استخدام مسحوق قشر البرتقال المجفف.</li>
                            </ol>
                        </p>
                        <h5 id="whiten-teeth_5">الفراولة</h5>
                        <p>
                            <ol>
                                <li>طحن عدد قليل من الفراولة إلى عجينة، ثم فرك العجينة على أسنانك بلطف مرتين يوميا لبضعة أسابيع، حتى تختفي المسحة الصفراء على أسنانك</li>
                                <li>يمكنك خلط لب حبة الفراولة مع نصف ملعقة صغيرة من صودا الخبز ونشر الخليط على أسنانك لبضع دقائق، ثم شطف فمك باستخدام فرشاة أسنانك مع المعجون للتخلص من أي بقايا.</li>
                            </ol>
                        </p>
                        <h5 id="whiten-teeth_6">الليمون</h5>
                        <p>
                            <ol>
                                <li>يمكنك الغرغرة بعصير الليمون</li>
                                <li>فرك أسنانك بقشر الليمون هي واحدة من أفضل الطرق لجعل أسنانك بيضاء اللون.</li>
                                <li>مزج بضع قطرات من عصير الليمون وبعض الملح. ومن ثم فركها ولصقها بقوة على أسنانك واللثة. وتركه لبضع دقائق ثم شطف فمك جيدا بالماء.</li>
                                <li>مسح الاسنان بعصير الليمون باستخدام قطنة.</li>
                                <p>
                                    تحذير: لا ينصح الإفراط باستخدام الليمون لأنه قد يؤثرعلى طبقة المينا، الأمر الذي يعرض أسنانك للإصابة بالحساسية.
                                </p>
                            </ol>
                        </p>
                        <h5 id="whiten-teeth_7">الملح</h5>
                        <p>
                            <ol>
                                <li>يمكنك الغرغرة بعصير الليمون</li>
                                <li>يمكنك استخدام الملح بانتظام كل صباح كمسحوق للأسنان بدلاً من معجون الأسنان.</li>
                                <li>يمكنك خلط الملح بالفحم وتنظيف أسنانك به بانتظام</li>
                                <li>يمكنك أيضًا خلط الملح مع صودا الخبز وفركه على أسنانك بلطف.</li>
                                <p>
                                    تحذير: يجب عدم الإفراط باستخدام الملح وصودا الخبز لأنه يمكن أن يسبب ضررا على اللثة ومينا الأسنان
                                </p>
                            </ol>
                        </p>
                    </div>
                </b-col>
                <b-col lg="3">
                    <b-card class="mt-1 mb-5 text-center" title="" header="مواضيع ذات صلة">
                        <div v-for="item in this.$store.getters.teeth_care" :key="item.id">
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
            return this.$store.getters.teeth_care[0]
        },
        all_subjects(){
            return this.$store.getters.all_subjects
        }
    }
}
</script>

<style src="./style.scss" lang="scss" />

