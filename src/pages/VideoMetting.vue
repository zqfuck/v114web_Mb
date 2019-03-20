<template>
  <div>
    <Kinds :kinds_data="live_video"></Kinds>
    <div class="scene_box">
      <h3 style="padding: 0.48rem 0;color: #fff;text-align: center;font-size: 0.32rem;">适用于多种视频会议场景</h3>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">主持人会议</mt-tab-item>
        <mt-tab-item id="2">头脑风暴会议</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <h3 style="padding: 0.48rem 0 0.32rem 0;font-size: 0.32rem;color: #0093d4; ">主持人会议</h3>
          <p style="font-size: 0.2rem;line-height: 0.28rem;margin-bottom: 0.2rem">
            设定视频会议的发言方，保持发言方的视频不被切换，同时只有发言方能发言，其他参会方都被禁言。
          </p>
          <img src="../assets/1_video_meeting@2x.jpg" alt="">
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <h3 style="padding: 0.48rem 0 0.32rem 0;font-size: 0.32rem; color: #0093d4;">头脑风暴会议</h3>
          <p style="font-size: 0.2rem;line-height: 0.28rem;margin-bottom: 0.2rem">
            视频会议中的每一方都是开放式的和均等的，任何一方都可以抢麦进行发言而不受约束。
          </p>
          <img src="../assets/2_brain_storm.jpg@2x.jpg" alt="">
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
  import live_bj from '@/assets/1_video_meeting_banner@2x.jpg'
  import banner_icon from '@/assets/3_video_meeting@2x.png'
  import power1 from '@/assets/1_double_stream_operation@2x.png'
  import power2 from '@/assets/2_screen_share@2x.png'
  import power3 from '@/assets/3_cloud_meeting_record@2x.png'
  import power4 from '@/assets/4_double_cloud_deploy@2x.png'
  import focus1 from '@/assets/1_separate@2x.png'
  import focus2 from '@/assets/2_media_cdn@2x.png'
  import focus3 from '@/assets/3_infinite_meeting@2x.png'
  import focus4 from '@/assets/4_infinite_conferree@2x.png'
  export default {
    name: 'VideoLive',
    data () {
      return {
        selected:"1",
        live_video:{
          bj:live_bj,
          banner_text:{
            text1:"青牛视频会议",
            text2:"打造无处不在的视频会议服务",
            banner_icon:banner_icon
          },
          power:[
            {
              imgurl:power1,
              text:"双流数据操作"
            },
            {
              imgurl:power2,
              text:"屏幕共享"
            },
            {
              imgurl:power3,
              text:"会议云端录制"
            },
            {
              imgurl:power4,
              text:"双云部署"
            }
          ],
          focus_data:[
            {
              img_:focus1,
              txt:"信令与媒体分离"
            },
            {
              img_:focus2,
              txt:"媒体资源下沉,不消耗骨干网络的带宽"
            },
            {
              img_:focus3,
              txt:"会议室数量无限制"
            },
            {
              img_:focus4,
              txt:"参会方数无限制"
            },
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
