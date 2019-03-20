import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import VideoLive from '@/pages/VideoLive'
import CallCenter from '@/pages/CallCenter'
import VideoMetting from '@/pages/VideoMetting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/videolive',
      name: 'VideoLive',
      component: VideoLive
    },
    {
      path: '/callcenter',
      name: 'CallCenter',
      component: CallCenter
    },
    {
      path: '/videometting',
      name: 'VideoMetting',
      component: VideoMetting
    }
  ]
})
