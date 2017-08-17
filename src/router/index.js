import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/example',
      component: {
        template: '<router-view></router-view>'
      },
      children: [{
        path: 'tabs',
        name: 'tabs',
        component: resolve => require(['../example/tabs/main.vue'], resolve),
        children: [{
          path: 'hello',
          name: 'hello',
          component: hello
        }]
      }]
    }
  ]
})
