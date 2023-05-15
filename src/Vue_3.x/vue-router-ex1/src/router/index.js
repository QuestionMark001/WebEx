/*
 * @Author: QuestionMark001
 * @Date: 2023-05-15 13:44:22
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-05-15 14:47:46
 * @FilePath: /LocalProjects/WebEx/src/Vue_3.x/vue-router-ex1/src/router/index.js
 * @Description: 路由配置
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
 */

import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Detail from '../components/Detail.vue'
import Governance from '../components/Governance.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      component: About,
      children: [
        { path: 'detail', component: Detail },
        { path: 'governance', component: Governance }
      ]
    },
    {
      path: '/contact',
      component: Contact,
    }
  ]
})

export default router
