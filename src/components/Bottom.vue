<template>
  <div class="bottom_box">
    <div class="er_code">
      <img src="../assets/qr_code@2x.png" alt="">
    </div>
    <div class="address">
      <img src="../assets/channel_logo.png" alt="" style="height: 0.6rem;margin-bottom: 0.16rem;">
      <p>北京·海淀区阜成路73号世纪裕惠大厦A座9层</p>
      <p style="margin: 0.08rem 0"><a href="tel">4000-825-114</a></p>
      <p>marketing@channelsoft.com</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'Bottom',
    data () {
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>
.bottom_box
  padding:0.4rem 8%
  background:url("../assets/blue_short_bg@2x.png") no-repeat center
  background-size:cover
  display:flex
  flex-direction:start
  .er_code
    height:2rem
    width:56%
    margin-right:0.32rem
    img
      height:100%
  p
    color:#fff
    a
      color:#fff
</style>
