<template>
            <b-navbar toggleable="lg" type="dark" id="navbar" class="navbar py-0">
                <div class="col-lg-1 mb-1 text-right d-lg-block">
                    <nuxt-link to="/" class="logo">
                        <img src="../assets/logo.jpg" width="50px"/>
                    </nuxt-link>
                </div>
                <div class="col-lg-9 mb-1 text-right">
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="links py-2 mx-auto w-100 d-flex  justify-content-md-around">
                            <b-nav-item class="">
                                <nuxt-link class="text-center" exact to="/"><i class="fas fa-home ml-2"></i>الرئيسية</nuxt-link>
                            </b-nav-item>
                            <b-nav-item class="">
                                <nuxt-link class="text-center" to="/all_subjects"><i class="fas fa-pencil-alt ml-2"></i>مواضيع تهمك</nuxt-link>
                            </b-nav-item>
                            <b-nav-item class="">
                                <nuxt-link class="text-center" to="/about"><i class="fas fa-users ml-2"></i>من نحن</nuxt-link>
                            </b-nav-item>
                            <b-nav-item class="">
                                <nuxt-link class="text-center" to="/contact"><i class="fas fa-envelope ml-2"></i>تواصل معنا</nuxt-link>
                            </b-nav-item>
                            <div class="social_md mt-2 text-center ml-5">
                                <div class="justify-content-center d-block d-lg-none">
                                    <a target="_blank" href="https://www.facebook.com/Five4Health/">
                                        <img src="../assets/social/facebook.png" width="30"/>
                                    </a>
                                    <a href="/">
                                        <img src="../assets/social/youtube.png" width="30"/>
                                    </a>
                                    <a href="/">
                                        <img src="../assets/social/twitter.png" width="30"/>
                                    </a>
                                    <a href="/">
                                        <img src="../assets/social/instgram.png" width="30"/>
                                    </a>
                                </div>
                            </div>
                        </b-navbar-nav>
                    </b-collapse>
                </div>
                <div class="col-lg-2 justify-content-around social_lg d-none d-lg-flex px-xl-5">
                    <a target="_blank" href="https://www.facebook.com/Five4Health/">
                        <img src="../assets/social/facebook.png" width="30"/>
                    </a>
                    <nuxt-link to="/">
                        <img src="../assets/social/youtube.png" width="30"/>
                    </nuxt-link>
                    <nuxt-link to="/">
                        <img src="../assets/social/twitter.png" width="30"/>
                    </nuxt-link>
                    <nuxt-link to="/">
                        <img src="../assets/social/instgram.png" width="30"/>
                    </nuxt-link>
                </div>
                <div id="top" class="go-to-top" @click="goToTop"></div>
            </b-navbar>
</template>
<script>
    document.addEventListener('scroll', function(){
        let top = window.pageYOffset,
            top_btn = document.getElementById('top')
        if (window.pageYOffset >500){
            top_btn.style.display = 'block'
        }else{
            top_btn.style.display = 'none'
        }

    })
    export default {
        data(){
            return{
                
            }
        },
        methods:{
            goToTop(){
                window.scrollTo(0,0)
                
            }
        }
    }
</script>

<style lang='scss' scoped>

.navbar{
    background-color: var(--primary-color);
    direction: rtl;
    transition: 0.3s;

    .go-to-top{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: rgba(var(--primary-hexa), 0.75);
        z-index: 99999;
        cursor: pointer;
        display: none;

        &::before{
            content: "\f062";
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            font-size: 2em;
            display: block;
            position: relative;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
            text-decoration: inherit;
            color: var(--secondary-color);
        }
    }

    .navbar-toggler{
        background-color: rgba(3, 3, 3, 0.7)
    }
    .logo{
        @media (max-width: 991px) {
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    
    .links{
        // border: 3px dotted yellowgreen !important;
    
        @media (max-width: 991px) {
            margin-top: 10px;
        }

        .nav-item{
            transition: 0.4s;
            margin-bottom: 2px;

            &:hover .nav-link a{
                background-color:  var(--secondary-color);
            }

            .nav-link{

                a{
                    font-family: 'Cairo';
                    font-size: 1em;
                    text-decoration: none;
                    border-radius: 5px;
                    color: #111;
                    text-align: right;
                    padding: 5px;
                    transition: 0.3s;
                    color: #fff;

                    @media (min-width: 992px) and (max-width: 1180px) {
                        font-size: 0.75em;
                    }
                    @media (max-width: 402px) {
                        font-size: 0.75em;
                    }
                    @media (max-width: 338px) {
                        font-size: 0.6em;
                    }
                }
            }

            .nuxt-link-exact-active{
                transition: 0.4s;
                background-color:  var(--secondary-color);
                color: var(--tertiary-color);
                border-radius: 5px;
                padding: 5px;

            }
        }
    }
    
    .social_lg, .social_md{

        a{

            @media (max-width: 991px) {
                margin-left: 5px;
            }
            img{
            transition: 0.2s;

                &:hover{
                    transform: scale(1.25);
                }
            }
        }
    }
}



</style>

