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
            <ul class="list-group list_content list-unstyled">
                <div class="row w-100">
                    <div class="col-md-6 list-group-item">
                        <li class=""><a class="text-dark" href="#ch-exfoli_intro">مقدمة</a></li>
                    </div>
                    <div class="col-md-6 list-group-item">
                        <li class=""><a class="text-dark" href="#ch-exfoli_cure">العلاج</a></li>
                    </div>
                    <div class="col-md-6 list-group-item">
                        <li class=""><a class="text-dark" href="#ch-exfoli_symp">الأعراض</a></li>
                    </div>
                    <div class="col-md-6 list-group-item">
                        <li class=""><a class="text-dark" href="#ch-exfoli_danger">عوامل الخطر</a></li>
                    </div>
                </div>
            </ul>
            <h5 id="ch-exfoli_intro">مقدمة</h5>
            <p class="intro">{{subject.head}}</p>
            <h5>محتوى الموضوع</h5>
        </div>
    </b-col>
                <b-col lg="3">
                    <b-card class="mt-1 mb-5 text-center" title="" header="مواضيع ذات صلة">
                        <div v-for="item in this.$store.getters.kids" :key="item.id">
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
            return this.$store.getters.kids[1]
        },
        all_subjects(){
            return this.$store.getters.all_subjects
        }
    }
}
</script>
