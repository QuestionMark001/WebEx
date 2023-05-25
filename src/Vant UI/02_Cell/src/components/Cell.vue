<!--
 * @Author: QuestionMark001
 * @Date: 2023-04-30 20:56:45
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-05-25 17:31:07
 * @FilePath: /LocalProjects/WebEx/src/Vant UI/02_Cell/src/components/Cell.vue
 * @Description: 02_Cell Components
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <h2>Vant UI 单元格组件</h2>
    <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/cell" target="_blank" rel="noopener" >Cell 官方文档</a>
    
    <hr />

    <!-- Cell 可以单独使用，也可以与 CellGroup 搭配使用，CellGroup 可以为 Cell 提供上下外边框 -->
    <span class="tip">基础用法</span><br />
    <van-cell-group>
        <van-cell title="单元格1" value="内容1" />
        <van-cell title="单元格2" value="内容2" label="描述信息" />
    </van-cell-group>

    <span class="tip">卡片风格（ CellGroup 的 inset 属性）</span><br />
    <van-cell-group inset>
        <van-cell title="单元格1" value="内容1" />
        <van-cell title="单元格2" value="内容2" label="描述信息" />
    </van-cell-group>

    <span class="tip">单元格大小（ size 属性， large 为大号单元格）</span><br />
    <van-cell-group>
        <van-cell title="单元格1" value="内容" label="描述信息" />
        <van-cell title="大号单元格" value="large" size="large" label="大号描述信息" />
    </van-cell-group>

    <span class="tip">单元格图标显示（ icon 属性）</span><br />
    <van-cell-group>
        <van-cell title="我的位置" value="xx区xx市xx县" icon="location-o" />
    </van-cell-group>

    <span class="tip">单元格箭头显示（ is-link 属性， arrow-direction 控制箭头方向）</span><br />
    <van-cell-group>
        <van-cell title="箭头向上" value="内容" is-link arrow-direction="up" />
        <van-cell title="箭头向左" value="内容" is-link arrow-direction="left" />
        <van-cell title="箭头向下" value="内容" is-link arrow-direction="down" />
        <van-cell title="箭头向右" value="内容" is-link arrow-direction="right" />
    </van-cell-group>

    <span class="tip">跳转（ url 属性进行 URL 跳转， to 属性进行路由跳转）</span><br />
    <van-cell-group>
        <van-cell title="URL 跳转" value="Vue.js" is-link url="https://vuejs.org/" />
        <van-cell title="路由跳转（仅供代码展示）" label="本案例无实际效果，实际工程中请加入路由插件（ 如 vue-router ）并自行配置路由" is-link to="index" />
    </van-cell-group>

    <span class="tip">分组标题（ CellGroup 组件中的 title 属性）</span><br />
    <van-cell-group title="分组1">
        <van-cell title="Vue.js" value="Vue.js" is-link url="https://vuejs.org/" />
    </van-cell-group>
    <van-cell-group title="分组2">
        <van-cell title="Vant UI" value="Vant UI" is-link url="https://vant-contrib.gitee.io/vant" />
    </van-cell-group>
    
    <span class="tip">插槽</span><br />
    <van-cell value="内容" is-link>
        <template #title> <!-- title 插槽可自定义标题 -->
            <span class="custom-title">单元格</span>
        </template>
    </van-cell>

    <span class="tip">垂直居中（ center 属性让左右内容都居中）</span><br />
    <van-cell icon="star" title="这是未居中的单元格" label="这是一段很长长长长长长长长长长长长长长长长长的话" value="内容" is-link />
    <van-cell center icon="star" title="这是居中的单元格" label="这是一段很长长长长长长长长长长长长长长长长长的话" value="内容" is-link />
</template>

<style>
.custom-title {
    font-size: larger;
    font-weight: bolder;
    color: cadetblue;
}
</style>