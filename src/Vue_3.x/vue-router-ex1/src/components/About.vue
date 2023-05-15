<!--
 * @Author: QuestionMark001
 * @Date: 2023-05-15 13:44:22
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-05-15 15:41:47
 * @FilePath: /LocalProjects/WebEx/src/Vue_3.x/vue-router-ex1/src/components/About.vue
 * @Description: 关于 组件
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
-->

<script setup></script>

<template id="about-tmp">
<div class="about-detail">
    <h1>北京xx科技有限公司简介</h1>
    <router-link to="/about/detail">公司简介</router-link>
    <span> | </span>
    <router-link to="/about/governance">公司治理</router-link>
    <router-view></router-view>
</div>
</template>

<style scoped></style>