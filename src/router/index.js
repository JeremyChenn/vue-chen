import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index.vue'
import TodoList from '@/page/todoList'
import Content from '@/page/content'
import User from '@/page/user'
import UserAdd from '@/page/useradd'
import UserShow from '@/page/usershow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Vue
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/todoList',
      component: TodoList
    },
    {
      path: '/content/:id',  // 一般动态路由
      /* path: '/content', */
      component: Content
    },
    {
      path: '/user',
      component: User,
      children: [
        {path: 'useradd', component: UserAdd},
        {path: 'usershow', component: UserShow}
      ]

    }
  ]
})
