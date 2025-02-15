
//createRouter创建路由实例
//createWebHistory创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'

import Login_index from '../views/Login/Login_index.vue'
import Layout_index from '../views/Layout/Layout_index.vue'
import Category_index from '../views/Category/Category_index.vue'
import Home_index from '../views/Home/Home_index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout_index,
      children: [
        {
          path: '',//默认置空
          component: Home_index,
        },
        {
          path: 'Category/:id',
          component: Category_index,
        }
      ]
    },
    {
      path: '/Login',
      component: Login_index
    }
  ]
})

export default router
