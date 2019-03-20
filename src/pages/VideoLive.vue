<template>
  <div>
    <Nav :isShow="show_box"></Nav>
    <Kinds :kinds_data="live_video" @show_nav="showNav_"></Kinds>
    <div style="padding: 0 8%;padding-bottom: 0.64rem;">
      <h3 style="padding: 0.48rem 0 0.32rem 0;color: #333;font-size: 0.32rem;text-align: center;">数据增值服务</h3>
      <swiper :options="swiperOption" :not-next-tick="notNextTick"  ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="slide_">
          <img src="../assets/1_get_content@2x.png" alt="">
          <div>
            帮助企业用户快速获取最佳视频内容及提供视频的组织、个人
          </div>
        </swiper-slide>
        <swiper-slide class="slide_">
          <img src="../assets/2_refresh_content@2x.png" alt="">
          <div>
            帮助企业用户找到完善视频内容的方法，不断优化场景营销
          </div>
        </swiper-slide>
        <swiper-slide class="slide_">
          <img src="../assets/3_analyse_content@2x.png" alt="">
          <div>
            基于视频内容分析，帮助企业用户精准寻找潜在客户
          </div>
        </swiper-slide>
        <swiper-slide class="slide_">
          <img src="../assets/4_analyse_user@2x.png" alt="">
          <div>
            基于用户群组行为分析，为客户定向精准推送视频内容
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="scene_box">
      <h3 style="padding: 0.48rem 0;color: #fff;text-align: center;font-size: 0.32rem;">适用于多种金融直播场景</h3>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">营销与推广</mt-tab-item>
        <mt-tab-item id="2">培训与沟通</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <h3 style="padding: 0.48rem 0 0.32rem 0;font-size: 0.32rem; color: #fff;">营销与推广</h3>
          <p style="color: #fff;font-size: 0.2rem;line-height: 0.28rem;">
            通过在线视频方式把线下营销线上化，即可通过在线视频方式直接进行产品营销推广，
            并直接完成营销转化；同时通过视频大数据精准分析获得客户线索，通过客户线索，
            事后进行线下营销与转化。
          </p>
          <p style="color: #fff;font-size: 0.16rem;margin-top: 0.2rem;">
            目标客群:
          </p>
          <p style="color: #A6D4E0;font-size: 0.16rem;margin-bottom: 0.2rem;">
            融行业品宣、银行客户经理、保险代理人、基金财富公司的投顾
          </p>
          <img src="../assets/1_market@2x.jpg" alt="">
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <h3 style="padding: 0.48rem 0 0.32rem 0;font-size: 0.32rem; color: #fff;">培训与沟通</h3>
          <p style="color: #fff;font-size: 0.2rem;line-height: 0.28rem;">
            客户经理是金融企业业绩的直接生产者，一对多的视频直播+互动，能完美地满足企业内部培训的需求，为企业营销转化助力。
          </p>
          <p style="color: #fff;font-size: 0.16rem;margin-top: 0.2rem;">
            目标客群:
          </p>
          <p style="color: #A6D4E0;font-size: 0.16rem;margin-bottom: 0.2rem;">
            金融行业品宣、银行客户经理、保险代理人、基金财富公司的投顾等
          </p>
          <img src="../assets/2_train@2x.jpg" alt="">
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div style="padding: 0 8%;padding-bottom: 0.48rem;">
      <h3 style="color: #333;font-size: 0.32rem;padding: 0.48rem 0 0.32rem 0;text-align: center;">直播端能力展示</h3>
      <div class="show_box">
        <div style="margin-right: 0.3rem;">
          <img src="../assets/1_pc@2x.png" alt="" style="height: 0.84rem;width: 0.84rem;">
          <p style="color: #0093d4">PC端直播</p>
        </div>
        <div style="width: 69%;font-size: 0.2rem;color: #888;">通过PC电脑自带摄像头、麦克风和外放音响等设备进行视频直播，在直播过程中可投放ppt、word等文档，同时可插播视频或广告等</div>
      </div>
      <div class="show_box">
        <div style="margin-right: 0.3rem;">
          <img src="../assets/2_mobile@2x.png" alt="" style="height: 0.84rem;width: 0.84rem;">
          <p style="color: #0093d4">移动端直播</p>
        </div>
        <div style="width: 69%;font-size: 0.2rem;color: #888;">通过手机等移动设备自带摄像头、麦克风、音响等设备进行视频直播，在直播过程中可添加美颜、前后置摄像头切换等效果。
        </div>
      </div>
      <div class="show_box">
        <div style="margin-right: 0.3rem;">
          <img src="../assets/1_pc@2x.png" alt="" style="height: 0.84rem;width: 0.84rem;">
          <p style="color: #0093d4">专业导播机</p>
        </div>
        <div style="width: 69%;font-size: 0.2rem;color: #888;">支持多种直播信号源，多机位信号切换、场景编辑与切换，多方视频互动等。</div>
      </div>
    </div>
    <Service></Service>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Kinds from '@/components/Kinds'
  import Service from '@/components/Service'
  import Nav from '@/components/Nav'
  import Bottom from '@/components/Bottom'
  import live_bj from '@/assets/1_video_live_banner@2x.jpg'
  import banner_icon from '@/assets/1_video_live@2x.png'
  import power1 from '@/assets/1_cloud_control@2x.png'
  import power2 from '@/assets/2_delay_play@2x.png'
  import power3 from '@/assets/3_emergency_cut@2x.png'
  import power4 from '@/assets/4_comments@2x.png'
  import power5 from '@/assets/5_ad@2x.png'
  import power6 from '@/assets/6_mini_window@2x.png'
  import power7 from '@/assets/7_double_orientation@2x.png'
  import power8 from '@/assets/8_video_interaction@2x.png'
  import power9 from '@/assets/9_cloud_encoding@2x.png'
  import focus1 from '@/assets/1_onestop_service@2x.png'
  import focus2 from '@/assets/2_vod@2x.png'
  import focus3 from '@/assets/3_servers@2x.png'
  import focus4 from '@/assets/4_interaction_ways@2x.png'
  import focus5 from '@/assets/5_controllable@2x.png'
  export default {
    name: 'VideoLive',
    data () {
      return {
        selected:"1",
        show_box:false,
        notNextTick:true,
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 2000,
          direction : 'horizontal',
          slidesPerView : 2,
          loop:true,
          autoplayDisableOnInteraction : false,
          spaceBetween : '10%',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
        },
        live_video:{
          bj:live_bj,
          banner_text:{
            text1:"青牛视频直播",
            text2:"在线视频营销平台",
            banner_icon:banner_icon
          },
          power:[
            {
              imgurl:power1,
              text:"云播控系统"
            },
            {
              imgurl:power2,
              text:"延时播出"
            },
            {
              imgurl:power3,
              text:"紧急切换"
            },
            {
              imgurl:power4,
              text:"弹幕评论"
            },
            {
              imgurl:power5,
              text:"产品推荐"
            },
            {
              imgurl:power6,
              text:"小窗悬浮"
            },
            {
              imgurl:power7,
              text:"横竖屏直播"
            },
            {
              imgurl:power8,
              text:"视频互动"
            },
            {
              imgurl:power9,
              text:"云转码"
            },
          ],
          focus_data:[
            {
              img_:focus1,
              txt:"采、编、播、看一站服务"
            },
            {
              img_:focus2,
              txt:"支持直播、录像、回放"
            },
            {
              img_:focus3,
              txt:"高清流畅、超大并发"
            }
            ,{
              img_:focus4,
              txt:"多维度的互动手段"
            },
            {
              img_:focus5,
              txt:"有效管控、权限可控"
            }
          ]
        }
      }
    },
    components: {
      Kinds,
      Service,
      Bottom,
      Nav
    },
    methods:{
      showNav_ (data) {
        if(data){
          this.show_box = true
        }else {
          this.show_box = false
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.slide_
  img
    height 1.22rem
  div
    background #008fd0
    color #fff
    padding 0.15rem
.scene_box
  padding 0 8%
  padding-bottom 0.48rem
  background url("../assets/blue_short_bg@2x.png") no-repeat center
  background-size cover
  color #fff
  .mint-navbar
    background:initial !important
    .mint-tab-item
      font-size 0.28rem!important
      .mint-tab-item-label
        font-size 0.28rem!important
    .mint-tab-item.is-selected
      border-bottom-color #fff
      color #fff
.show_box
  display flex
  flex-direction row
  justify-content space-between
  flex-wrap wrap
  padding-top 0.48rem
  padding-bottom 0.48rem
  border-bottom 1px solid #b5b5b5
  img
    margin-right 0.42rem
  p
    text-align justify
</style>
