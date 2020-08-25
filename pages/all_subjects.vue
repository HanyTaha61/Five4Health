<template>
  <div class="all-subjects">
    <div class="layer">
      <b-container>
        <div class="row" style="direction: rtl">
          <div class="col-lg-9">
            <p class="lead px-2 py-1 text-right">تجدون لدينا الجديد و المفيد في مجال الصحة و الجمال و التغذية السليمة, وكيفية التداوي بــ الاعشاب و مناقشات تهمك لـ صحتك عن الرشاقة و التخسيس و التسمين, نصائح للعناية بـ جمالك الاهتمام بالشعر, والبشرة, و كل ما يهم لزيادة جمالك , وكل ما يتعلق بمظهرك</p>
            <p class="lead px-2 py-1 text-right">كذلك لدينا نصائح و ارشادات للوقاية من فيروس كورونا و متابعات لآخر تطورات انتشار الفيروس في جميع دول العالم.</p>
          </div>
          <div class="col-lg-3">
            <b-img class="img-header d-block w-100 mx-auto" fluid src="../assets/all_subjects_header.jpeg" alt=""/>
          </div>
        </div>
        <div role="tablist" class="mt-3 tab-list">
  <!-- قسم العناية بالأسنان -->
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="info">قسم العناية بالأسنان</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-group deck>
                  <b-row class="w-100">
                    <b-col class="subject-card" md="6" lg="4" v-for="item in $store.getters.teeth_care" :key="item.id">
                      <router-link :to='"../subjects/" + item.title'>
                        <b-card class="mb-2 text-right" :title="item.title" :img-src="require(`../subjects/sections/${item.section}/${item.title}.jpeg`)" :img-alt="`image${item.title}`" img-top>
                          <b-card-text>
                              {{subject_head(item.id)}}
                              <!-- <a class="text-info" :href='"/subjects/" + item.id'><b>قراءة المزيد</b></a> -->
                          </b-card-text>
                          <template v-slot:footer>
                              المصدر: <small class="text-muted">{{item.source}}</small>
                              <p><small>{{item.date}}</small></p>
                          </template>
                        </b-card>
                      </router-link>
                    </b-col>
                  </b-row>
                </b-card-group> 
              </b-card-body>
            </b-collapse>
          </b-card>
          
  <!-- قسم العناية بالبشرة -->
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="info">قسم العناية بالبشرة</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-group deck>
                  <b-row class="w-100">
                    <b-col class="subject-card" md="6" lg="4" v-for="item in $store.getters.skin_care" :key="item.id">
                      <router-link :to='"../subjects/" + item.title'>
                        <b-card class="mb-2 text-right" :title="item.title" :img-src="require(`../subjects/sections/${item.section}/${item.title}.jpeg`)" :img-alt="`image${item.title}`" img-top>
                          <b-card-text>
                              <!-- {{subject_head(item.id)}} -->
                              <!-- <a class="text-info" :href='"/subjects/" + item.id'><b>قراءة المزيد</b></a> -->
                          </b-card-text>
                          <template v-slot:footer>
                              المصدر: <small class="text-muted">{{item.source}}</small>
                              <p><small>{{item.date}}</small></p>
                          </template>
                        </b-card>
                      </router-link>
                    </b-col>
                  </b-row>
                </b-card-group> 
              </b-card-body>
            </b-collapse>
          </b-card>

  <!-- قسم العناية بالشعر -->
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="info">قسم العناية بالشعر</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-group deck>
                  <b-row class="w-100">
                    <b-col class="subject-card" md="6" lg="4" v-for="item in $store.getters.hair_care" :key="item.id">
                      <router-link :to='"../subjects/" + item.title'>
                        <b-card class="mb-2 text-right" :title="item.title" :img-src="require(`../subjects/sections/${item.section}/${item.title}.jpeg`)" :img-alt="`image${item.title}`" img-top>
                          <b-card-text>
                              <!-- {{subject_head(item.id)}} -->
                              <!-- <a class="text-info" :href='"/subjects/" + item.id'><b>قراءة المزيد</b></a> -->
                          </b-card-text>
                          <template v-slot:footer>
                              المصدر: <small class="text-muted">{{item.source}}</small>
                              <p><small>{{item.date}}</small></p>
                          </template>
                        </b-card>
                      </router-link>
                    </b-col>
                  </b-row>
                </b-card-group> 
              </b-card-body>
            </b-collapse>
          </b-card>

  <!-- قسم المنظفات و المطهرات -->
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-4 variant="info">قسم المنظفات و المطهرات</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-group deck>
                  <b-row class="w-100">
                    <b-col class="subject-card" md="6" lg="4" v-for="item in $store.getters.detergents" :key="item.id">
                      <router-link :to='"../subjects/" + item.title'>
                        <b-card class="mb-2 text-right" :title="item.title" :img-src="require(`../subjects/sections/${item.section}/${item.title}.jpeg`)" :img-alt="`image${item.title}`" img-top>
                          <b-card-text>
                              <!-- {{subject_head(item.id)}} -->
                              <!-- <a class="text-info" :href='"/subjects/" + item.id'><b>قراءة المزيد</b></a> -->
                          </b-card-text>
                          <template v-slot:footer>
                              المصدر: <small class="text-muted">{{item.source}}</small>
                              <p><small>{{item.date}}</small></p>
                          </template>
                        </b-card>
                      </router-link>
                    </b-col>
                  </b-row>
                </b-card-group> 
              </b-card-body>
            </b-collapse>
          </b-card>

  <!-- قسم أمراض و أعراض -->
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-5 variant="info">قسم أمراض و أعراض</b-button>
            </b-card-header>
            <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-group deck>
                  <b-row class="w-100">
                    <b-col class="subject-card" md="6" lg="4" v-for="item in $store.getters.symptoms" :key="item.id">
                      <router-link :to='"../subjects/" + item.title'>
                        <b-card class="mb-2 text-right" :title="item.title" :img-src="require(`../subjects/sections/${item.section}/${item.title}.jpeg`)" :img-alt="`image${item.title}`" img-top>
                          <b-card-text>
                              <!-- {{subject_head(item.id)}} -->
                              <!-- <a class="text-info" :href='"/subjects/" + item.id'><b>قراءة المزيد</b></a> -->
                          </b-card-text>
                          <template v-slot:footer>
                              المصدر: <small class="text-muted">{{item.source}}</small>
                              <p><small>{{item.date}}</small></p>
                          </template>
                        </b-card>
                      </router-link>
                    </b-col>
                  </b-row>
                </b-card-group> 
              </b-card-body>
            </b-collapse>
          </b-card>

  <!-- قسم الأطفال -->
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-6 variant="info">قسم الأطفال</b-button>
            </b-card-header>
            <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-group deck>
                  <b-row class="w-100">
                    <b-col class="subject-card" md="6" lg="4" v-for="item in $store.getters.kids" :key="item.id">
                      <router-link :to='"../subjects/" + item.title'>
                        <b-card class="mb-2 text-right" :title="item.title" :img-src="require(`../subjects/sections/${item.section}/${item.title}.jpeg`)" :img-alt="`image${item.title}`" img-top>
                          <b-card-text>
                              <!-- {{subject_head(item.id)}} -->
                              <!-- <a class="text-info" :href='"/subjects/" + item.id'><b>قراءة المزيد</b></a> -->
                          </b-card-text>
                          <template v-slot:footer>
                              المصدر: <small class="text-muted">{{item.source}}</small>
                              <p><small>{{item.date}}</small></p>
                          </template>
                        </b-card>
                      </router-link>
                    </b-col>
                  </b-row>
                </b-card-group> 
              </b-card-body>
            </b-collapse>
          </b-card>

  <!-- قسم فيروس كورونا -->
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-7 variant="info">قسم فيروس كورونا</b-button>
            </b-card-header>
            <b-collapse id="accordion-7" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-group deck>
                  <b-row class="w-100">
                    <b-col class="subject-card" md="6" lg="4" v-for="item in $store.getters.corona" :key="item.id">
                      <router-link :to='"../subjects/" + item.title'>
                        <b-card class="mb-2 text-right" :title="item.title" :img-src="require(`../subjects/sections/${item.section}/${item.title}.jpeg`)" :img-alt="`image${item.title}`" img-top>
                          <b-card-text>
                              <!-- {{subject_head(item.id)}} -->
                              <!-- <a class="text-info" :href='"/subjects/" + item.id'><b>قراءة المزيد</b></a> -->
                          </b-card-text>
                          <template v-slot:footer>
                              المصدر: <small class="text-muted">{{item.source}}</small>
                              <p><small>{{item.date}}</small></p>
                          </template>
                        </b-card>
                      </router-link>
                    </b-col>
                  </b-row>
                </b-card-group> 
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-container>
    </div>

  </div>
</template>

<script>
  export default {
    head(){
      return{
        title: '5 لصحتك | مواضيع تهمك'
        }
    },
    computed:{
      teeth_care(){
        return this.$store.getters.teeth_care
        }
    },
    methods:{
      subject_head(item){
        return this.teeth_care[item].head.substr(0,100) + '....'
        }
    },
    mounted(){
  
      },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .all-subjects{
    background: url("../assets/bg-all_subjects.jpeg") no-repeat center center;
    background-size: cover;
    width: 100%;    

  @media (min-width: 991px) {
    // min-height: 800px;

  }

    .layer{
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100% !important;
      background-color: rgba(1,1,1, 0.5);
      padding-top: 50px;
      padding-bottom: 50px;

      .container{
        background-color: rgba(1,1,1, 0.5);
        padding-top: 20px;
        padding-bottom: 20px;

        .img-header{
            height: 100%;

          @media (max-width: 991px) {
            width: 80% !important;
            height: 230px;

          }
        }


        p.lead{
          line-height: 2.5;
          color: aliceblue;
        }
        .tab-list{
          direction: rtl;

          .card{

            .card-header{

              button{
                background-color: var(--primary-color);

              }
            }
            .collapse{
              
              .card-body{
                
                h4{
                  // font-size: 1.3em !important;
                  // text-decoration: none;
                  color: var(--primary-color)
                }

                .card-deck{

                  .row{

                    .subject-card{

                      a{
                        text-decoration: none;
                        
                        &:hover img{
                          transform: scale(1.1);
                        }


                        .card{
                          overflow: hidden;

                          img{
                            transition: 0.25s linear;
                            height: 200px;

                          }
                          .card-body{

                            .card-title{

                            }
                            .card-text{

                            }
                          }
                          .card-footer{

                            small{

                            }
                            p{

                              small{
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
