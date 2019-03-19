import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import VideoLive from '@/pages/VideoLive'
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
    }
  ]
})
