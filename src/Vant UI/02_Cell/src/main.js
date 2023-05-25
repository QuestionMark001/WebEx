/*
 * @Author: QuestionMark001
 * @Date: 2023-04-30 20:52:39
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-05-02 20:53:44
 * @FilePath: /LocalProjects/WebEx/src/Vant UI/02_Cell/src/main.js
 * @Description: Vant UI Cell&CellGroup main.js
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
 */

import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'


// 全局引入 Vant UI

import { Cell, CellGroup } from 'vant' // 引入 Vant UI 组件库中的 Cell 单元格 以及 CellGroup(为 Cell 提供上下外边框) 组件
import 'vant/lib/index.css'; // 引入 Vant UI 组件库中的 所有CSS样式

createApp(App).use(Cell).use(CellGroup).mount('#app') // 注册 Cell 与 CellGroup
