<!--
 * @Author: QuestionMark001
 * @Date: 2023-04-27 13:57:02
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-04-27 14:39:23
 * @FilePath: /11-hello-dog-1/src/components/dogCom1.vue
 * @Description: dogCom1.vue
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div class="div_dog">
        <img src="./../assets/1.png" alt="">
        <p class="dog_name">一只可爱的修狗</p>
    </div>
</template>

<script>
export default {

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