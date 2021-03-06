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
      }, {
        path: 'button',
        name: 'button',
        component: resolve => require(['../example/button/main.vue'], resolve)
      }, {
        path: 'search',
        name: 'search',
        component: resolve => require(['../example/search/main.vue'], resolve)
      }, {
        path: 'checkbox',
        name: 'checkbox',
        component: resolve => require(['../example/checkbox/main.vue'], resolve)
      }, {
        path: 'preview',
        name: 'preview',
        component: resolve => require(['../example/preview/main.vue'], resolve)
      }, {
        path: 'cell',
        name: 'cell',
        component: resolve => require(['../example/cell/main.vue'], resolve)
      }, {
        path: 'radio',
        name: 'radio',
        component: resolve => require(['../example/radio/main.vue'], resolve)
      }, {
        path: 'radioList',
        name: 'radioList',
        component: resolve => require(['../example/radioList/main.vue'], resolve)
      }, {
        path: 'carousel',
        name: 'carousel',
        component: resolve => require(['../example/carousel/main.vue'], resolve)
      }, {
        path: 'loadmore',
        name: 'loadmore',
        component: resolve => require(['../example/loadmore/main.vue'], resolve)
      }, {
        path: 'spinner',
        name: 'spinner',
        component: resolve => require(['../example/spinner/main.vue'], resolve)
      }, {
        path: 'toast',
        name: 'toast',
        component: resolve => require(['../example/toast/main.vue'], resolve)
      }, {
        path: 'picker',
        name: 'picker',
        component: resolve => require(['../example/picker/main.vue'], resolve)
      }]
    }
  ]
})
