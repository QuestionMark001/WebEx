<!--
 * @Author: QuestionMark001
 * @Date: 2023-04-27 14:48:30
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-05-04 15:31:27
 * @FilePath: /LocalProjects/WebEx/src/Vue.js/12-hello-dog-2/src/components/dogCom2.vue
 * @Description: dogCom2.vue
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div class="div_dog">
        <img src="./../assets/2.png" alt="">
        <p class="dog_name" @click="btn" :style="{background: colorStr}">一只可爱的修狗</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colorStr: ''
        }
    },
    methods: {
        getColorStr() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            return `rgb(${r}, ${g}, ${b})`;
        },

        btn() {
            let color = this.getColorStr();
            this.colorStr = color;
        }
    }
}
</script>

<!-- scoped 可防止CSS全局污染 -->
<style scoped>
.div_dog {
    width: 200px;
    border: 1px solid black;
    text-align: center;
    float: left;
}

.div_dog img {
    width: 100%;
    height: 200px;
}

.dog_name {
    cursor: pointer;
    user-select: none;
}

.div_ul {
    display: flex;
    flex-direction: column;
}

.div_ul h4 {
    margin-left: 10px;
}
</style>