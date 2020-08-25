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
                        <ul class="list-group mb-2 list_content ">
                            <div class="row">
                                <div class="col-md-6 list-group-item">
                                    <li><a href="#drop-teeth_1">مقدمة</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li><a href="#drop-teeth_2">مرض السكري</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li><a href="#drop-teeth_3">الحمل</a></li>
                                </div>
                                <div class="col-md-6 list-group-item">
                                    <li><a href="#drop-teeth_4">أمراض اللثة</a></li>
                                </div>
                            </div>
                        </ul>
                        
                        <h5 id="drop-teeth_1">مقدمة </h5>
                        <p>{{subject.head}}</p>
                        <h5  id="drop-teeth_2">مرض السكري</h5>
                        <p>
                            وأكد «كامل» أن مريض السكري من النوع الثاني يتعاطى الإنسولين، ويحدث له مضاعفات ويكون خارج السيطرة وغير متحكم به، وبالتالي يتعرض للإصابة بالتهابات اللثة فيشعر بتضخم فيها يؤدي إلى تهتك الأنسجة التي تمسك الأسنان بالعظام وتتعرض لعملية اللخلخة وبعدها تبدأ في التساقط.
                        </p>
                        <h5  id="drop-teeth_3">الحمل</h5>
                        <p>
                            وأوضح «كامل» أنه في أثناء فترة الحمل عند السيدات تحدث تغيرات هرمونية في جسم المرأة، في وقت يكون إهمال الأسنان هو الطريقة التي تتبعها الحالة دون الاهتمام بغسلها بالفرشاة تؤدي إلى خروج دم بين الأسنان واللثة، ما يؤدي إلى تهتكها وبالتالي تحدث عملية سقوط الأسنان، ودائمًا ما يحدث تورم في اللثة للأم الحامل.
                        </p>
                        <h5  id="drop-teeth_4">أمراض اللثة</h5>
                        <p>
                            وأشار «كامل» إلى أن حدوث الجيوب اللثوية مع تقطع طبقة أو الخيوط المتصلة بين السن والعظام يؤدي إلى تساقط الأسنان، مؤكدًا أن التهاب اللثة مع وجود الجير على الأسنان يُحدث تضخم في اللثة ويبدأ الجير في الانتشار وأخذ مكان أكبر فيقوم بفصل اللثة عن الأسنان، وبالتالي يحدث تساقط الأسنان.ولفت «كامل» إلى أن انحسار اللثة من بين أسباب تساقط الأسنان، وتنكمش اللثة في تلك الحالة، ما يسبب انتشاف للجذر الخاص بالسن ويحدث ضمور للأنسجة وتبدأ السن في اللخلخة ثم السقوط
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
            return this.$store.getters.teeth_care[1]
        },
        all_subjects(){
            return this.$store.getters.all_subjects
        }
    }
}
</script>

<style src="./style.scss" lang="scss" />
