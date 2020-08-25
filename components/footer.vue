<template>
    <footer class="container-fluid">
        <div class="row py-2">
            <div class="col-lg-3 social_links text-center">
                <a class="mr-1" target="_blank" href="https://www.facebook.com/Five4Health/">
                    <img src="../assets/social/facebook.png" width="30"/>
                </a>
                <a class="mr-3" href="/">
                    <img src="../assets/social/youtube.png" width="30"/>
                </a>
                <a class="mr-3" href="/">
                    <img src="../assets/social/twitter.png" width="30"/>
                </a>
                <a class="mr-3" href="/">
                    <img src="../assets/social/instgram.png" width="30"/>
                </a>
            </div>
            <div class="col-lg-9 menu_links text-center">
                <div class="row">
                    <div class="menu col-md-2">
                        <router-link class="px-2" exact to="/"><i class="fas fa-home ml-2"></i>الرئيسية</router-link>
                    </div>
                    <div class="menu col-md-3">
                        <router-link class="px-2" exact to="/all_subjects"><i class="fas fa-pencil-alt ml-2"></i>مواضيع تهمك</router-link>
                    </div>
                    <div class="menu col-md-3">
                        <router-link class="px-2" to="/about"><i class="fas fa-users ml-2"></i>من نحن</router-link>
                    </div>
                    <div class="menu col-md-4">
                        <router-link class="px-2" to="/contact"><i class="fas fa-envelope ml-2"></i>تواصل معنا</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="copy_rights pt-3 col-12 text-center">
                <p> جميع الحقوق محفوظة <a href="/">5 لصحتك</a> 2020</p>
            </div>
        </div>
        


        <!-- <div class="row">
            <div class="col-lg-10 menu justify-content-around row">
                <router-link class="d-block text-center" exact to="/"><i class="fas fa-home ml-2"></i>الرئيسية</router-link>
                <router-link class="d-block text-center" to="/weight"><i class="fas fa-weight ml-2"></i>اعرف وزنك المثالي</router-link>
                <router-link class="d-block text-center" to="/water"><i class="fas fa-tint ml-2"></i>اعرف كمية الماء التي يحتاجها جسمك</router-link>
            </div>
            <div class="col-lg-2 text-center  social">
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
        </div> -->
    </footer>
</template>

<script>
export default {

}
</script>

<style lang='scss'>

footer{
    direction: rtl;
    background-color: var(--primary-color);
    line-height: 30px;
    padding-top: 10px auto;

    .social_links{

        a{
            &:hover img{
                transform: scale(1.2)
            }

            img{
                transition: 0.3s;
                
            }
        }
    }
    .menu_links{

        .menu{


            a{
                color: #fff;
                transition: 0.4s;
                text-decoration: none;
                font-size: 0.92em;

                // @media (min-width: 992px) and (max-width: 1246px) {
                //     font-size: 0.6em;
                // }
                // @media (min-width: 768px) and (max-width: 991px) {
                //     font-size: 0.65em;
                // }

                &:hover{
                    background-color:  var(--secondary-color);
                    color: #fff;
                    border-radius: 5px;
                    padding: 5px;
                    transition: 0.2s;
                }

                i{

                }
            }
        }
    }
    .copy_rights{
        background-color: var(--secondary-color);
        color: #000;
        line-height: 0px;
        padding-top: 15px;

        p{

            a{
                color: #fff

            }
        }
    }
}

</style>
