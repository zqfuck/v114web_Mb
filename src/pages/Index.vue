<template>
<div>
  <div class="banner">
    <div style="position: relative;">
      <img class="img_logo" src="../assets/logo.png" alt="">
      <div class="nav">
        <button class="btn-nav">
          <span class="icon-bar top"></span>
          <span class="icon-bar middle"></span>
          <span class="icon-bar bottom"></span>
        </button>
      </div>
    </div>
    <h1 style="font-size: 0.64rem;color: #fff; text-align:center;margin-top: 0.54rem;">青牛视频服务</h1>
    <h3 class="font32" style="color: #fff;margin-top: 0.48rem;margin-bottom: 1.24rem;">面向金融行业打造在线视频营销平台</h3>
    <div class="nice_box">
      <dl v-for="(item,index) in niceArr">
        <dt>
          <img :src="item.niceImg" alt="">
        </dt>
        <dd>{{item.title}}</dd>
      </dl>
    </div>
  </div>
  <div class="productKind">
    <h3 style="color: #333;font-size: 0.32rem;margin: 0.48rem 0;text-align: center;">产品与服务</h3>
    <div class="product_box" v-for="(item,index) in productArr">
     <router-link :to="item.path_">
       <img :src="item.url" alt="">
       <img :src="item.img_png" class="png_left" alt="">
       <span class="product_tit">{{item.title}}</span>
     </router-link>
    </div>
  </div>
  <div class="solve_box">
    <h3 style="text-align: center;font-size: 0.32rem;color: #fff;padding: 0.48rem 0;padding-bottom: 0.24rem;">支持金融业务场景的一站式解决方案</h3>
    <div v-for="(item,index) in solveArr">
      <div class="kind_title" @click="toggleBox(index)">
        <img :src="item.img_png" alt="" style="width: 0.38rem;vertical-align: middle;margin:-0.1rem 0.5rem 0 0.31rem;margin-top: -0.1rem;">
        <span style="color: #0093d4;font-size: 0.32rem;">{{item.title}}</span>
        <span v-if="show_index!=index" style="float: right;margin-right: 0.24rem;font-size: 0.64rem;color: #666;">+</span>
        <span v-else style="float: right;margin-right: 0.28rem;font-size: 0.8rem;color: #666;">-</span>
      </div>
      <transition name="fade" mode="out-in">
        <div class="card_box"  v-show="show_index==index">
          <img :src="item.url" alt="" style="width: 100%;height: 100%;">
        </div>
      </transition>
    </div>
  </div>
  <Bottom></Bottom>
</div>


</template>

<script type="text/ecmascript-6">
  import Bottom from '@/components/Bottom'
  import niceP1 from '@/assets/1_network.png'
  import niceP2 from '@/assets/2_service@2x.png'
  import niceP3 from '@/assets/3_low_delay@2x.png'
  import niceP4 from '@/assets/4_ability@2x.png'
  import niceP5 from '@/assets/1_video_live_thumb@2x.jpg'
  import niceP6 from '@/assets/2_call_center_thumb@2x.jpg'
  import niceP7 from '@/assets/3_video_meeting_thumb@2x.jpg'
  import png1 from '@/assets/1_video_live@2x.png'
  import png2 from '@/assets/2_call_center@2x.png'
  import png3 from '@/assets/3_video_meeting@2x.png'
  import solve1 from '@/assets/1_bank_card@2x.jpg'
  import solve2 from '@/assets/2_insurance_card@2x.jpg'
  import solve3 from '@/assets/3_stock_card@2x.jpg'
  import solve4 from '@/assets/4_financial_card@2x.jpg'
  import solve_1 from '@/assets/1_bank@2x.png'
  import solve_2 from '@/assets/2_insurance@2x.png'
  import solve_3 from '@/assets/3_stock@2x.png'
  import solve_4 from '@/assets/1_bank@2x.png'
  export default {
    name:'Index',
    data () {
      return {
        img1:niceP1,
        show_index:5,
        active_show_index:null,
        niceArr:[
          {
            niceImg:niceP1,
            title:"专有的企业视频通信网络"
          },
          {
            niceImg:niceP2,
            title:"全面完整的企业视频服务能力"
          },
          {
            niceImg:niceP3,
            title:"低带宽、低时延、高可靠"
          },
          {
            niceImg:niceP4,
            title:"专业的音视频呼叫服务能力"
          }
        ],
        productArr:[
          {
            url:niceP5,
            img_png:png1,
            title:"青牛视频直播",
            path_:'/videolive'
          },
          {
            url:niceP6,
            img_png:png2,
            title:"青牛视频呼叫中心",
            path_:'/callcenter'
          },
          {
            url:niceP7,
            img_png:png3,
            title:"青牛视频会议",
            path_:'/videometting'
          }
        ],
        solveArr:[
          {
            url:solve1,
            img_png:solve_1,
            title:"银行"
          },
          {
            url:solve2,
            img_png:solve_2,
            title:"保险"
          },
          {
            url:solve3,
            img_png:solve_3,
            title:"证券"
          },
          {
            url:solve4,
            img_png:solve_4,
            title:"互联网金融"
          }
        ]
      }
    },
    components:{
      Bottom
    },
    methods:{
      toggleBox (index) {
        if(this.active_show_index == index){
          this.show_index = 5
          this.active_show_index = null
        }else{
          this.active_show_index = index
          this.show_index = index
        }


      }
    }
  }

</script>

<style lang="stylus" scoped>
@import "../css/common.styl";
.banner
  height: 6.95rem
  background:url("../assets/banner_bg.jpg") no-repeat center
  background-size:cover
  padding:0.28rem 8% 0
  .img_logo
    height:0.6rem
    margin-left:-0.2rem
  .nav
    width:0.6rem
    height: 0.6rem
    position: absolute
    right: -0.2rem
    top: 0
    .btn-nav
      width:100%
      height:100%
      background: transparent
      border: none
      outline: none
      -webkit-transition: all .5s ease
      -moz-transition: all .5s ease
      -ms-transition: all .5s ease
      -o-transition: all .5s ease
      transition: all .5s ease
      z-index: 99999
  .nice_box
    width:100%
    color:#fff
    display:flex
    dl
      width:25%
      dt
        height:1.46rem
      dd
        font-size:0.14rem
        padding:0 0.1rem
        text-align:center
        line-height:0.28rem
.productKind
  background:#fff
  padding:0 8%
  margin-bottom:0.64rem
  .product_box
    width:100%
    height:2.1rem
    position:relative
    margin-bottom:0.32rem
    .png_left
      position:absolute
      left:0.22rem
      top:0.16rem
      height:1.1rem
    .product_tit
      position:absolute
      right:0.24rem
      bottom:0.16rem
      font-size:0.4rem
      color:#fff
.solve_box
  background:url("../assets/blue_full_bg_texture@2x.jpg") no-repeat center
  background-size:cover
  padding:0 8%
  padding-bottom:0.64rem
  margin-bottom:0.1rem
  .kind_title
    height:0.7rem
    line-height:0.7rem
    margin-top:0.24rem
    background:#fff
    border-bottom:2px solid #c0c0c0
.fade-enter-active,.fade-leave-active
  transition: opacity 0.5s
.fade-enter,.fade-leave-active
  opacity:0


</style>
