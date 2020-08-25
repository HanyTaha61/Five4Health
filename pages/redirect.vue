<template>
    <div class="main">
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            white_teeth: "gGg3",
            drop_teeth: "gGKQ",
            oily_skin: "gGBn",
            heels_roughness: "gG8t",
            sanitizer: "gHqr",
            vit_D: "gHeB",
            anemia: "gHth",
            headache: "gHu5",
            selinium: "gHkn",
            ch_press: "gHzh",
            gold_drink: "gHvB",
            homePage: "gKPa",
            value: ''
        }
    },
    layout: 'none',
    computed:{
        setUrl(){
            return 'https://five4health.netlify.app/redirect/?article=zKPa'
        }
    },
    methods:{
        redirect(){
            if(this.$route.query.article == 'gGg3'){
                document.location.href="http://gestyy.com/ewgGg3"
            }else if(this.$route.query.article == 'gGKQ'){
                document.location.href="http://gestyy.com/ewgGKQ"
            }else if(this.$route.query.article == 'gGBn'){
                document.location.href="http://gestyy.com/ewgGBn"
            }else if(this.$route.query.article == 'gG8t'){
                document.location.href="http://gestyy.com/ewgG8t"
            }else if(this.$route.query.article == 'gHqr'){
                document.location.href="http://gestyy.com/ewgHqr"
            }else if(this.$route.query.article == 'gHeB'){
                document.location.href="http://gestyy.com/ewgHeB"
            }else if(this.$route.query.article == 'gHu5'){
                document.location.href="http://gestyy.com/ewgHu5"
            }else if(this.$route.query.article == 'gHkn'){
                document.location.href="http://gestyy.com/ewgHkn"
            }else if(this.$route.query.article == 'gHzh'){
                document.location.href="http://gestyy.com/ewgHzh"
            }else if(this.$route.query.article == 'gHvB'){
                document.location.href="http://gestyy.com/ewgHvB"
            }else if(this.$route.query.article == 'zKPa'){
                document.location.href="http://gestyy.com/ewzKPa"
            }
        }
    },
    mounted(){
        this.redirect()
    }
}
</script>

<style>

</style>
