<!--
 * @Author: QuestionMark001
 * @Date: 2023-05-04 20:29:51
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-05-04 21:04:56
 * @FilePath: /14-hello-dog-final/src/components/dogComFinal.vue
 * @Description: dogComFinal.vue
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div class="div_dog">
        <img :src="dogobj.dogImgUrl" alt="">
        <p class="dog_name" @click="btn($event)" :style="{background: colorStr}">{{dogobj.dogName}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colorStr: '',
            dogName: ''
        }
    },
    props: {
        dogobj: Object
    },
    mounted() {
        this.dogName = this.dogobj.dogName;
    },
    methods: {
        getColorStr() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            return `rgb(${r}, ${g}, ${b})`;
        },

        btn(e) {
            let color = this.getColorStr();
            this.colorStr = color;

            let name = e.target.innerHTML;
            this.$emit('dog', name);
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
</style>