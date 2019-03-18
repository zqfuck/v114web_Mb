<template>
  <div>
    <Kinds :kinds_data="live_video"></Kinds>
  </div>
</template>

<script>
  import Kinds from '@/components/Kinds'
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
  export default {
    name: 'VideoLive',
    data () {
      return {
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
          ]
        }
      }
    },
    components: {
      Kinds
    }
  }
</script>

<style lang="stylus">

</style>
