<template>
    <div class="calculators text-right mb-5">
        <h2 class="text-light bg-color2 w-fit rounded p-1">الحاسبات الطبية</h2>
        <div>
            <b-card-group deck class="">
                <b-row>
                    <b-col class="mb-3" md="4">
                        <b-card title="اعرف وزنك المثالي" :img-src="require('../assets/wight-card-bg.jpg')" img-alt="weight" img-top>
                            <b-card-text>
                                إن من أفضل الطرق التي يمكن أن تحدد إذا ما كان وزنك طبيعي أم لا هي ما تسمى بطريقة دليل كتلة الجسم Body Mass Index أو BMI
                            </b-card-text>
                            <b-button class="bg-color1"><nuxt-link class="text-light" to="/weight">اقرأ المزيد</nuxt-link></b-button>
                        </b-card>
                    </b-col>
                    <b-col class="mb-3" md='4'>
                        <b-card title="احسب احتياجك من الماء" :img-src="require('../assets/bg-water.jpg')" img-alt="water" img-top>
                            <b-card-text>
                                كشف أطباء من مركز الأبحاث الطبية "مايو كلينيك" بولاية مينيسوتا الأمريكية عن معادلة حسابية بسيطة لحساب كمية الماء المطلوب تناولها يوميًا.
                            </b-card-text>
                            <b-button class="bg-color1"><nuxt-link class="text-light" to="/water">اقرأ المزيد</nuxt-link></b-button>
                        </b-card>
                    </b-col>
                    <b-col class="mb-3" md="4">
                        <b-card title="هرم مايو كلينيك للوزن الصحي" :img-src="require('../assets/mayo2.png')" img-alt="mayo" img-top>
                            <b-card-text>
                                هل تبحث عن برنامج جديد وفعال لتخفيف الوزن؟ إذن، هرم مايو كلينيك هو الحل
                            </b-card-text>
                            <b-button class="bg-color1"><nuxt-link class="text-light" to="/mayo">اقرأ المزيد</nuxt-link></b-button>
                        </b-card>
                    </b-col>
                </b-row>
            </b-card-group>
        </div>
    </div>
</template>

<script>

</script>

<style lang='scss' scoped>
    .card-deck{

        .card{

            .card-body{

                .card-title{
                    font-size: 1.25em;
                    font-weight: bold;
                    color: var(--primary-color);
                }
            }
            button{

                &:hover a{
                    color: var(--secondary-color) !important;
                }
                
                a{
                    text-decoration: none;
                    transition: 0.25s;

                }
            }
        }
    }
</style>
