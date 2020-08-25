<template>
    <div id="contact" class="contact">
        <div class="layer">
            <div class="container form_frame">
                <div class="contact_form mt-5">                               
                    <h1 class="mb-5 pt-3 display-4">تواصل معنا</h1>
                    <div class="row">
                    <div class="col-lg-6 data d-flex flex-column">
                        <label class="label-name text-right">الاسم:</label>
                        <input type="text" v-model="name" class="name text-light mb-3" >
                        <label class="label-subject text-right">الموضوع</label>
                        <input type="text" v-model="subject" class="subject text-light" >
                    </div>
                    <div class="col-lg-9 mt-3 cont_message">
                        <label class="">من فضلك اكتب الرسالة</label>
                        <textarea
                                class="pt-3 pb-0 mb-0 message"
                                v-model="message"
                                rows="5"
                                :maxlength="maxLength"
                                @input="countChars"
                        >
                            
                        </textarea>
                        <span class="d-block text-right mb-4">
                            الحروف المتبقية:
                            <p
                                class="d-inline font-weight-bold"
                                :class="{'zero': reachZero}"
                            >
                                {{remainingChars}} حرف
                            </p>
                        </span>
                    </div>

                    </div>
                    <input
                        @click="send_mail"
                        type="submit"
                        value="ارسل ايميل"
                        class="w-50 send btn"
                    >

                   <span class="text-center mt-5 mb-2 social_links">أو يمكنكم مراسلتنا على صفحتنا على فيسبوك
                       <a target="_blank" href="https://www.facebook.com/Five4Health/"><i class="fab fa-facebook fa-2x facebook"></i></a>
                            
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            subject: '',
            message: '',
            maxLength: 200,
            remainingChars: 200,
            reachZero: false
        }
    },
    methods:{
        send_mail(){
            if(this.name != '' && this.subject != '' && this.message != '')
            {
                window.open("mailto: hanygrand1980@gmail.com?subject=" + this.subject + "&body=" + this.message)
                this.name = ''
                this.subject = ''
                this.message = ''
                this.remainingChars = 200
            }
        },
        countChars(){
            this.remainingChars = this.maxLength - this.message.length
            this.reachZero = this.remainingChars === 0
        }
    },
    head(){
        return{
            title: '5 لصحتك | تواصل معنا'
        }
    }
}
</script>

<style lang='scss' scoped>
.contact{
    background: url('../assets/contact.jpg')no-repeat center center;
    background-size: cover;
    background-size: cover;
    width: 100%;

        .label-name, .label-subject, .cont_message label, .cont_message span, .contact_form .send, .social_links, .contact_form input, .contact_form .message{
            @media (max-width: 767px) {
                font-size: 0.75em !important;
            }
        }

    .layer{
        padding-top: 50px;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgba(33, 109, 144, 0.3);

        .form_frame{
            margin-top: 100px;
            padding-bottom: 30px;
            .contact_form{
                direction: rtl;
                box-shadow: 20px 20px 40px #000;
                border-radius: 10px;
                font-size: 25px !important;
                padding-bottom: 10px;
                background-color: rgba(var(--primary-hexa),0.2);
                

                ::placeholder{
                    color: #888;
                    font-size: 1.5em;
                }
                .data{            
                    .name, .subject{
                        padding: 5px 10px;
                        border-radius: 5px;
                        box-shadow: 5px 5px 10px #444;
                        background-color: transparent;
                        font-size: 20px;
                        font-family: 'Cairo';
                        font-weight: bold;
                    }
                }

                h1{
                    color: var(--secondary-color);
                    width: fit-content;
                    margin: auto;
                    font-family: 'Cairo';
                    text-shadow: 2px 2px 2px #000;

                    @media (max-width: 767px) {
                        font-size: 1.5em;
                    }
                }
                .row{
                    margin-left: 0 !important;
                    margin-right: 0 !important
                }

                .cont_message{
                    direction: rtl;

                    label{
                        direction: rtl;
                        width: 100%;
                        text-align: right;
                    }
                    
                    .message{
                        background-color: transparent;
                        width: 100%;
                        border-radius: 5px;
                        box-shadow: 5px 5px 10px #444;
                        background-color: transparent;
                        color: #fff;
                        font-size: 24px;
                        font-family: 'Cairo'

                    }
                    span{

                        .zero{
                            color: var(--primary-color);
                        }
                    }
                }

                .cont_message, .data{

                    @media (max-width: 400px) {
                        
                    }
                }

                .send{
                    background-color: var(--secondary-color);
                    color: #fff;
                    display: block;
                    font-family: 'Cairo';
                    margin: auto;
                    font-size: 1.5em;
                    border-radius: 10px;
                    
                    &:hover{
                        background-color: var(--primary-color);
                    }
                }

                .social_links{
                    display: block;

                    @media (max-width: 767px) {
                        font-size: 0.5em !important
                    }

                    i.linkedin{
                        color: #0077b5;
                    }
                    i.github{
                        color: #24292e;
                    }
                    i.facebook{
                        color: #4d74b5;
                    }
                }
            }
        }
    }
}
</style>