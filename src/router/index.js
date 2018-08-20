import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Landing from '../views/Landing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Landing
    }
  ],
  mode: 'history'
})
