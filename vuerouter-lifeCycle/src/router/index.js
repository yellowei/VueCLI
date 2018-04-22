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
      component: HelloWorld
    },
    {
      path: '/news/:id(\\d+)/:title',
      // path: '/news',
      name: 'News',
      component: News,
      beforeEnter: (to, from, next) => {
        console.log(to);
        console.log(from);
        console.log(next);
        next();
      }
    },
  ]
})
