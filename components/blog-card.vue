<template>
    <div class="blog pb-5">
        <div class="container">
            <b-card-group deck class="">
                <h4 class="d-block text-right mb-3 rounded w-fit p-1 bg-color2 text-light">آخر المواضيع</h4>
                <b-row>
                    <b-col md="6" lg="4" v-for="(item, i) in latest_articles" :key="i">
                        <router-link :to="`./subjects/${item.title}`">
                             <b-card class="mb-2 text-right" :title="item.title" :img-src="require(`../subjects/sections/${item.section}/${item.title}.jpeg`)" :img-alt="`${i+1}`" img-top>
                              <h6 class="bg-color1 w-fit p-1 text-light rounded">قسم {{item.section}}</h6>
                            <b-card-text>
                                {{item.head.substr(0, 100)}}
                                <nuxt-link class="text-info" :to="`./subjects/${item.title}`"><b>قراءة المزيد</b></nuxt-link>
                            </b-card-text>
                            <template v-slot:footer>
                                المصدر: <small class="text-muted">{{item.source}}</small>
                                <p><small>{{item.date}}</small></p>
                            </template> 
                            </b-card> 
                        </router-link>
                    </b-col>
                </b-row>
                <b-row class="w-md-25 mx-auto">
                    <b-col md="12">
                        <button class="btn mx-auto w-100 text-light all_subjects">
                            <nuxt-link class="d-block" to="/all_subjects">جميع المواضيع</nuxt-link>
                        </button>
                    </b-col>
                </b-row>
            </b-card-group>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            latest_articles: []
        }
    },
    computed:{
        teeth_care(){
            return this.$store.getters.teeth_care
        },
        skin_care(){
            return this.$store.getters.skin_care
        },
        detergents(){
            return this.$store.getters.detergents
        },
        corona(){
            return this.$store.getters.corona
        },
        kids(){
            return this.$store.getters.kids
        },
        symptoms(){
            return this.$store.getters.symptoms
        },
        all_subjects(){
            return this.$store.getters.all_subjects
        },
        get_latest(){
           var late = this.all_subjects.forEach(element =>{
               if(element.latest){
                   if(this.latest_articles.indexOf(element.latest === -1)){
                       this.latest_articles.push(element)
                   }
               }
            })
        }
        
    },
    methods:{
    },
    mounted(){
        this.get_latest
    }
}
</script>

<style lang='scss' scoped>
.blog{

    .card-deck{
        h4.title{
            color: red !important;
        }
        h6{
            font-size: 0.75em
        }
        a{
            text-decoration: none;
            color: unset;

            &:hover{
                color: var(--primary-color);
            }

            &:hover .card{
                transform: scale(1.05);
            }

            .card{
                box-shadow: 20px 20px 30px #000 !important;
                transition: 0.2s;
                margin-bottom: 20px !important;
                overflow: hidden;

                @media (max-width: 767px) {
                    width: 90%;
                    margin: auto !important;
                    margin-bottom: 20px !important
                }
                   
                    img{
                        transition: 0.2s;
                        height: 200px;

                        &:hover{
                            transform: scale(1.1);
                        }
                    }

                .card-body{

                    &:hover img{
                        transform: scale(1.1);
                    }

                    h4{
                        font-size: 1.3em !important;
                        text-align: center;

                        @media (max-width: 1197px) {
                            font-size: 1.1em !important;
                        }

                        @media (max-width: 767px) {
                            font-size: 1.5em !important;
                        }
                        
                        @media (max-width: 515px) {
                            font-size: 1.5em !important;
                        }
                    }
                    


                    .card-title{
                        color: var(--primary-color);
                        font-size: 1em;

                        @media (min-width: 992px) {
                            font-size: 1em
                        }
                    }

                    .card-text{
                        @media (min-width: 992px) {
                            font-size: 0.9em;
                        }
                    }
                }
            }
        }
        .all_subjects{
            margin-top: 20px;
            transition: 0.2s;
            background-color: var(--secondary-color);
            
            &:hover{
                background-color: var(--primary-color);
            }
            &:hover a{
                color: var(--secondary-color);
                transform: scale(1.1);

            }

            a{
                transition: 0.2s;
                color: #fff;

            }
        }
    }
}
</style>
