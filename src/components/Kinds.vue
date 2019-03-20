<template>
  <div>
    <div class="banner" :style="{backgroundImage:'url(' + kinds_data.bj + ')'}">
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
      <div style="text-align: center;margin-top: 0.8rem;">
        <img :src="kinds_data.banner_text.banner_icon" alt="" style="width: 1.3rem">
      </div>
      <p class="font32" style="color: #fff;margin-top: 0.12rem;text-align: center;">{{kinds_data.banner_text.text1}}</p>
      <p class="font16" style="color: #fff;margin-top: 0.16rem;text-align: center;">{{kinds_data.banner_text.text2}}</p>
    </div>
    <div>
      <h3 style="color:#333;font-size: 0.32rem;margin:0.48rem 0;text-align: center;font-weight: bold;">产品功能</h3>
      <div class="power_box">
        <ul>
          <li v-for="(item, index) in kinds_data.power" :key="index">
            <img :src="item.imgurl" alt="">
            {{item.text}}
          </li>
        </ul>
      </div>
    </div>
    <div class="focus_box">
      <h3 style="color: #fff;font-size: 0.32rem;padding: 0.48rem 0;text-align: center;">亮点</h3>
      <div class="all_box">
        <div class="focus_kind" v-for="(item, index) in kinds_data.focus_data">
          <img :src="item.img_" alt="">
          <p style="color: #0093d4;">{{item.txt}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Kinds',
    data () {
      return {

      }
    },
    props:[
      'kinds_data'
    ],
    mounted () {

    }
  }
</script>

<style lang="stylus">
@import "../css/common.styl";
@import "../css/kinds.styl";
</style>

