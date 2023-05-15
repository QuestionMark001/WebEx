<!--
 * @Author: QuestionMark001
 * @Date: 2023-05-15 13:44:22
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-05-15 15:47:18
 * @FilePath: /LocalProjects/WebEx/src/Vue_3.x/vue-router-ex1/src/App.vue
 * @Description: Main Page Vue App
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
-->

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<ul>
    <router-link to="/about" custom v-slot="{ navigate }">
        <li @click="navigate">关于公司</li>
    </router-link>
    <router-link to="/contact" custom v-slot="{ navigate }">
        <li @click="navigate">联系我们</li>
    </router-link>
</ul>
<router-view></router-view>
</template>

<style scoped></style>
