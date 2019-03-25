<template>
  <div class="wrap" :class="{show_wrap:isShow}" >
    <h3 class="service ">
      产品与服务
    </h3>
    <div class="kinds">
      <router-link to="/videolive">
        <div class="go_link">
          <img src="../assets/1_video_live@2x.png" alt="">
          <p>青牛视频直播</p>
        </div>
      </router-link>
      <router-link to="callcenter">
        <div class="go_link">
          <img src="../assets/2_call_center@2x.png" alt="">
          <p>青牛呼叫中心</p>
        </div>
      </router-link>
      <router-link to="videometting">
        <div class="go_link">
          <img src="../assets/3_video_meeting@2x.png" alt="">
          <p>青牛视频会议</p>
        </div>
      </router-link>
    </div>
    <div>
      <h3 style="margin: 0.48rem 0 0.24rem 0;color: #fff;font-size: 0.36rem;">
        联系我们
      </h3>
      <a class="connect" href="tel">4000-825-114</a>
      <span class="connect">qnmarketing2018@channelsoft.com</span>
      <p style="color: #fff;font-size: 0.24rem;margin-top: 0.32rem;">地址:北京市石景山区田顺庄北路1号院古城创业大厦3号楼9层</p>
    </div>
    <div class="footer">
      <p>Copyright © 2016 channelsoft </p>
      <p>版权所有：青牛（北京）技术有限公司 </p>
      <p>京ICP备10016421号-6</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    data () {
      return {

      }
    },
    props:['isShow'],
    watch: {
      isShow(new_val,old_val) {
        console.log(new_val,old_val)
        if(new_val){
          console.log(new_val)
          //this.stop()
        }else {
          console.log(false)
          //this.move()
        }
      }
    },
    beforeRouteUpdate (to, from, next) {
      //this.move()
      next()
    },
    created(){
      this.move()
    },
    mounted () {
      this.move()
    },
    methods: {
      stop () {
        var mo = function (e) {
          e.preventDefault();
        };
        document.body.style.overflow = 'hidden';
        document.addEventListener("touchmove", mo, {passive:false});//禁止页面滑动
      },
      /***取消滑动限制***/
      move () {
        var mo = function (e) {
          e.preventDefault();
        };
        document.body.style.overflow = '';//出现滚动条
        document.removeEventListener("touchmove", mo, {passive:false});
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import "../css/nav.styl";
</style>
