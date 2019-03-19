<template>
  <div style="background: #0093d4;padding: 0 8%;padding-bottom: 0.48rem;margin-bottom: 0.1rem;">
    <h5 style="color: #fff;font-size: 0.32rem;padding: 0.48rem 0 0.32rem 0;text-align: center;">服务模式</h5>
    <div class="service_mode">
      <div>
        <img src="../assets/1_private_cloud@2x.png" alt="">
        <p style="margin: 0.14rem 0">私有云模式</p>
        <p>私网部署，安全可控，建设规模和License数量需求由企业自己掌握，License一次购买永久使用。</p>
      </div>
      <div>
        <img src="../assets/2_public_cloud@2x.png" alt="">
        <p style="margin: 0.14rem 0">公有云模式</p>
        <p>标准的SaaS直播服务，用户无需投入平台建设和维护成本，按License服务收费，按需使用，随用随租。</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Service',
    data () {
      return {

      }
    }
  }
</script>

<style lang="stylus">
@import "../css/service.styl";
</style>
