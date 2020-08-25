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
                                    <li class=""><a class="text-dark" href="#heel-roughness_1">مقدمة</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#heel-roughness_2">أسباب مرضية وعادات خاطئة</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#heel-roughness_3">مضاعفات كثيرة</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li class=""><a class="text-dark" href="#heel-roughness_4">نصائح ووسائل علاجية</a></li>
                                </div>
                            </div>
                        </ul>
                        
                        <h5 id="heel-roughness_1">مقدمة </h5>
                        <div>{{subject.head}}</div>
                        <h5 id="heel-roughness_2">أسباب مرضية وعادات خاطئة</h5>
                        <p>
                            يقول الدكتور هاني وشاحي، أستاذ الأمراض الجلدية بكلية الطب جامعة القاهرة، إن تشققات القدم أو الكعب تختلف أسبابها من حالة لأخرى، ففي بعض الأحيان ترجع لأسباب مرضية، كالصدفية أو أمراض وراثية تؤدي إلى زيادة سماكة طبقة الجلد (الكيراتين)، حيث يظهر فيه بقع سمراء بها قشور واحمرار، وإذا زادت سماكة الجلد لحد كبير فإنها تؤدي إلى تشققات وألم عند الوقوف أو المشي.
                        </p>
                        <p>
                            ويضيف أستاذ الأمراض الجلدية أن هذه التشققات يمكن أن تحدث بسبب التغيرات الهرمونية التي تتعرض لها المرأة بعد سن اليأس وانقطاع الدورة الشهرية، أو بسبب زيادة الوزن، وفي أحيان أخرى يكون السبب احتكاك القدمين بالأرض مباشرة أو بأسطح صلبة، كالمشي حافي القدمين في المنزل أو الأعمال التي تفرض على أصحابها ذلك، فضلًا عن أن جفاف الجلد يسبب هذه المشكلة ويزيد من حدتها.
                        </p>
                        <h5 id="heel-roughness_3">مضاعفات كثيرة </h5>
                        <p>
                            لا يجب الاستهانة بالأمر، فلابد من معالجة المشكلة لأن التشققات العميقة يمكن أن تصل للطبقة التي تحتوي على الأوعية الدموية، الأمر الذي يسبب نزيف ويؤدي إلى تراكم الميكروبات التي تسبب تقرحات في الجلد، وفقًا لما أوضحه «وشاحي».
                        </p>
                        <h5 id="heel-roughness_4">نصائح ووسائل علاجية</h5>
                        <p>
                            تشققات القدم أو الكعب يمكن علاجها بتجنب أسبابها، ويوصي «وشاحي» بضرورة ارتداء أحذية مناسبة، وتجنب المشي حافي القدمين، واستخدام الكريمات المرطبة، موضحًا أن الحالات المرضية تستدعي استخدام كريمات أو مراهم مضادات حيوية توضع في التشققات لمنع حدوث الالتهابات، وبعد التئام هذه التشققات لابد من استخدام كريمات أخرى تحتوي على مواد معينة تساعد في تقليل سماكة الجلد في هذه المنطقة.
                        </p>
                    </div>
                </b-col>
                <b-col lg="3">
                    <b-card class="mt-1 mb-5 text-center" title="" header="مواضيع ذات صلة">
                        <div v-for="item in this.$store.getters.skin_care" :key="item.id">
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
            return this.$store.getters.skin_care[1]
        },
        all_subjects(){
            return this.$store.getters.all_subjects
        }
    }
}
</script>
