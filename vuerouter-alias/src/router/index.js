import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      alias: '/aliasHome'
    },
    {
      path: '/news/:id/:title',
      name: 'News',
      component: News
    },
    {
      path: '/redirectToHome',
      redirect: '/'
    },
    {
      path: '/redirectToNews/:id/:title',
      redirect: '/news/:id/:title',
      alias: '/aliasNews002'
    }
  ]
})
