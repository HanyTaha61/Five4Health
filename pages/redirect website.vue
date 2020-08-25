<template>
        <div class="main">
            <div class="layer">
                <div class="interior w-100">
                    <b-container>
                        <div class="row input">
                                <input id="input" v-model="value" type="text" class="form-control mt-2 col-md-8 col-lg-9 mx-auto text-left" placeholder="enter url here | أدخل الرابط هنا">
                                <button @click="shorten_url(value)" class="btn btn-success mt-2 col-md-4 mx-auto col-lg-3 col-sm-6 col-6">shorten url | اختصر الرابط</button>
                        </div>
                        <div class="row mt-5 result mx-auto" v-if="short_url">
                                <input type="text" id="result" :value="short_url" class="col-md-9 form-control mt-2">
                                <b-button @click="copy(short_url)" class="mt-2 bg-info mr-auto"><i class="fas fa-copy"></i> copy link</b-button>
                        </div>
                    </b-container>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            value: '',
            short_url: ''
        }
    },
    layout: 'none',
    computed:{
        
    },
    methods:{
        toast(toaster, append = false) {
        this.counter++
        this.$bvToast.toast('Link Copied Successfully!', {
          title: 'copy link',
          autoHideDelay: 2000,
          toaster: toaster,
          solid: true,
          appendToast: append
        })
      },
        shorten_url(val){
            if(!this.value){
                alert('please enter value')
            }else{
                return this.short_url = 'https://five4health.netlify.app/redirect/?article=' + val.slice(-4)
            }
        },
        copy(link){
            var copyText = document.getElementById("result")
            copyText.select();
            // copyText.setSelectionRange(0, 99999); 
            document.execCommand("copy");
            this.toast('b-toaster-top-center')
        },
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
        
    }
}
</script>

<style lang='scss'>
    .b-toaster{
        .toast-body{
            background-color: #1e7e34 !important;
            color: aliceblue;

        }
    }
    .main{
        background: url("../assets/bg-short.jpg") no-repeat center center;
        background-size: cover;
        background-attachment: fixed;
        width: 100%;
        direction: rtl;
        // height: 1100px !important;

        @media (max-width: 1300px) {
            height: 920px !important;
        }
        @media (min-width: 1301px) and (max-width: 1950px){
            height: 940px !important;
        }
        @media (min-width: 1951px) and (max-width: 2200px){
            height: 1040px !important;
        }
        @media (min-width: 2201px) and (max-width: 2500px){
            height: 1180px !important;
        }
        @media (min-width: 2501px) and (max-width: 2800px){
            height: 1250px !important;
        }
        @media (min-width: 2801px) and (max-width: 3100px){
            height: 1405px !important;
        }
        @media (min-width: 3101px) and (max-width: 4000px){
            height: 1875px !important;
        }
        @media (min-width: 4001px) and (max-width: 6000px){
            height: 2810px !important;
        }
        @media (min-width: 6001px){
            height: 3748px !important;
        }
        

        


        .layer{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 100% !important;
            background-color: rgba(1,1,1, 0.5);

            .interior{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                
                .input{
                    direction: ltr;
                    
                    input{
                        
                    }
                    button{
                        

                    }
                }
                .result{
                    

                    input{
                        

                    }
                    button{
                        @media (max-width: 767px) {
                            margin-left: auto;
                            margin-right: auto
                        }
                    }
                }
            }
        }
    }
</style>
