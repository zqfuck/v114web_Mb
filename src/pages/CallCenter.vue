<template>
  <div>
    <Kinds :kinds_data="live_video"></Kinds>
    <div class="scene_box">
      <h3 style="padding: 0.48rem 0;color: #fff;text-align: center;font-size: 0.32rem;">适用于多种金融直播场景</h3>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">远程开户</mt-tab-item>
        <mt-tab-item id="2">视频客服</mt-tab-item>
        <mt-tab-item id="3">远程协助</mt-tab-item>
        <mt-tab-item id="4">远程定损</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <h3 style="padding: 0.48rem 0 0.32rem 0;font-size: 0.32rem;color: #0093d4; ">远程开户</h3>
          <p style="font-size: 0.2rem;line-height: 0.28rem;margin-bottom: 0.2rem">
            通过远程视频坐席对客户身份核实、业务事项核对、资料签署、场景见证等在线进行面签操作。此新模式全程线上办理，高效灵活，用户足不出户。
          </p>
          <img src="../assets/1_remote_open_account@2x.jpg" alt="">
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <h3 style="padding: 0.48rem 0 0.32rem 0;font-size: 0.32rem; color: #0093d4;">视频客服</h3>
          <p style="font-size: 0.2rem;line-height: 0.28rem;margin-bottom: 0.2rem">
            可视沟通，一对一服务，身临其境的VIP级体验。
          </p>
          <img src="../assets/2_video_custom_services@2x.jpg" alt="">
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <h3 style="padding: 0.48rem 0 0.32rem 0;font-size: 0.32rem; color: #0093d4;">远程协助</h3>
          <p style="font-size: 0.2rem;line-height: 0.28rem;margin-bottom: 0.2rem">
            远程一对一连线，实时指导，便捷高效。
          </p>
          <img src="../assets/4_remote_help@2x.jpg" alt="">
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <h3 style="padding: 0.48rem 0 0.32rem 0;font-size: 0.32rem; color: #0093d4;">远程定损</h3>
          <p style="font-size: 0.2rem;line-height: 0.28rem;margin-bottom: 0.2rem">
            保险公司定损员可远程通过视频坐席指导用户，对事故现场的车辆进行拍摄和鉴定，无需亲临事故现场，节约时间，杜绝骗保，高效快捷。
          </p>
          <img src="../assets/5_remote_damage_claims@2x.jpg" alt="">
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <Service></Service>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Kinds from '@/components/Kinds'
  import Service from '@/components/Service'
  import Bottom from '@/components/Bottom'
  import live_bj from '@/assets/1_call_center_banner@2x.jpg'
  import banner_icon from '@/assets/2_call_center@2x.png'
  import power1 from '@/assets/1_multimedia_mixed@2x.png'
  import power2 from '@/assets/2_smart_router@2x.png'
  import power3 from '@/assets/3_realtime_double_record@2x.png'
  import power4 from '@/assets/4_professional_running@2x.png'
  import power5 from '@/assets/5_multi_plantform@2x.png'
  import power6 from '@/assets/6_api_integrated@2x.png'
  import focus1 from '@/assets/1_professional_call_center@2x.png'
  import focus2 from '@/assets/2_reliable@2x.png'
  import focus3 from '@/assets/3_infinite_meeting@2x.png'
  export default {
    name: 'VideoLive',
    data () {
      return {
        selected:"1",
        live_video:{
          bj:live_bj,
          banner_text:{
            text1:"青牛视频呼叫中心",
            text2:"打造远程在线视频协同服务平台",
            banner_icon:banner_icon
          },
          power:[
            {
              imgurl:power1,
              text:"多媒体混合通讯"
            },
            {
              imgurl:power2,
              text:"智能路由功能"
            },
            {
              imgurl:power3,
              text:"实时双录"
            },
            {
              imgurl:power4,
              text:"专业运营管理"
            },
            {
              imgurl:power5,
              text:"全平台支持"
            },
            {
              imgurl:power6,
              text:"API、SDK快速集成"
            }
          ],
          focus_data:[
            {
              img_:focus1,
              txt:"专业的视频通讯平台"
            },
            {
              img_:focus2,
              txt:"安全可靠"
            },
            {
              img_:focus3,
              txt:"低成本、高效率"
            }
          ]
        }
      }
    },
    components: {
      Kinds,
      Service,
      Bottom
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
  background #fff
  background-size cover
  .mint-navbar
    background:initial !important
    .mint-tab-item-label
      font-size 0.28rem
    .mint-tab-item.is-selected
      border-bottom-color #0093d4
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
