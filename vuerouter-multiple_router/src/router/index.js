import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Left from '@/components/left'
import Right from '@/components/right'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Left,
        right: Right,
      } 
    },
    {
      path: '/swithposition',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Right,
        right: Left,
      } 
    },
  ]
})
