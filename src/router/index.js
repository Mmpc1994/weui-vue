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
      }, {
        path: 'navbar',
        name: 'navbar',
        component: resolve => require(['../example/navbar/main.vue'], resolve)
      }, {
        path: 'popup',
        name: 'popup',
        component: resolve => require(['../example/popup/main.vue'], resolve)
      }, {
        path: 'actionsheet',
        name: 'actionsheet',
        component: resolve => require(['../example/actionsheet/main.vue'], resolve)
      }]
    }
  ]
})
