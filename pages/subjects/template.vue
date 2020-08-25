<template>
    <div class="blog mt-4 mb-3">
        <div class="container cont">
            <b-row>
                <b-col lg="9" class="border" style="direction: rtl">

                    <!-- subject component here -->
                    <div v-if="$route.params.id=='نقص السيلينيوم'">
                        <vitamins/>
                    </div>

                    <div v-if="$route.params.id=='ارتفاع ضغط الدم عند الأطفال'">
                        <childrenPressure/>
                    </div>

                    <div v-if="$route.params.id=='فقر الدم'">
                        <Anemia/>
                    </div>

                    <div v-if="$route.params.id=='الصداع أسبابه وعلاجه'">
                        <headache/>
                    </div>

                    <div v-if="$route.params.id=='أطعمة تحارب الشعر الأبيض'">
                        <white-hair/>
                    </div>

                    <div v-if="$route.params.id=='نقص السيلينيوم'">
                        <selinium/>
                    </div>

                    <div v-if="$route.params.id=='طريقة عمل معقم لليدين'">
                        <hand-sanitizer/>
                    </div>

                    <div v-if="$route.params.id=='المشروب الذهبي'">
                        <golden-drink/>
                    </div>

                    <div v-if="$route.params.id=='خلطات تبييض الأسنان'">
                        <whiten-teeth/>
                    </div>

                    <div v-if="$route.params.id=='تسلخات الأطفال'">
                        <exfoliation/>
                    </div>

                    <div v-if="$route.params.id=='أسباب تساقط الأسنان'">
                        <teeth-drop/>
                    </div>

                    <div v-if="$route.params.id=='أسباب خشونة الكعبين'">
                        <heel-roughness/>
                    </div>

                    <div v-if="$route.params.id=='علاج البشرة الدهنية'">
                        <oily-skin/>
                    </div>

                </b-col>
                <b-col lg="3" class="">
                    <b-card class="mt-1 mb-5 text-center" title="" header="كل المواضيع">
                        <div v-for="subject in subjects" :key="subject.id">
                            <router-link :to='"/subjects/" + subject.id'>
                                <!-- <img class="w-100" :src='require(`../../subjects/image${subject.id+1}.jpeg`)' alt=""> -->
                            </router-link>
                            <h6 class="w-fit mx-auto">{{subject.title}}</h6>
                            <hr>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import vitamins from './نقص فيتامين د'
import childrenPressure from './ارتفاع ضغط الدم عند الأطفال'
import Anemia from './فقر الدم'
import headache from './الصداع أسبابه وعلاجه'
import whiteHair from './أطعمة تحارب الشعر الأبيض'
import selinium from './نقص السيلينيوم'
import handSanitizer from './طريقة عمل معقم لليدين'
import goldenDrink from './المشروب الذهبي'
import whitenTeeth from './خلطات تبييض الأسنان'
import exfoliation from './تسلخات الأطفال'
import teethDrop from './أسباب تساقط الأسنان'
import heelRoughness from './أسباب خشونة الكعبين'
import oilySkin from './علاج البشرة الدهنية'

export default {
    components: {vitamins ,childrenPressure, Anemia, headache, whiteHair, selinium, handSanitizer, goldenDrink, whitenTeeth, exfoliation, teethDrop, heelRoughness, oilySkin},
    data(){
        return{
          
        }
    },
    computed:{
        subjects(){
            return this.$store.state.subjects
        }
    }
}
</script>

<style lang='scss'>
.blog{

    .cont{

        h3{
            color: var(--primary-color);
            background-color: #ddd;
            width: fit-content;
            padding: 5px 10px;
        }
        .post_body{

            .content{

                
                .list_content{

                    .list-group-item{
                        background-color: #fdfdfd;
                        transition: 0.3s;

                        &:hover{
                            background-color: var(--secondary-color);
                        }
                        li{

                            a{
                                text-decoration: none;
                                display: block;
                            }
                        }
                    }
                }
            }
        }

        .card{
            h6{
                transition: 0.3s;
                position: relative;
                padding: 5px 10px;
            }
            a{
                display: block;
                overflow: hidden;


                img{
                    transition: 0.3s;

                    &:hover{
                        transform: scale(1.5);
                        filter: blur(3px) grayscale(0.5);
                    }

                }

                &:hover + h6{
                    color: #fff;
                    background-color: rgba(1,1,1,0.5);
                    top: -30px;
                }
            }
        }
    }
}
</style>
