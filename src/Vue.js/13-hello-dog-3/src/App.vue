<!--
 * @Author: QuestionMark001
 * @Date: 2023-05-04 15:20:01
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-05-04 20:01:11
 * @FilePath: /13-hello-dog-3/src/App.vue
 * @Description: 13-hello-dog-3 App.vue
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div>
        <DogCom3 v-for="(obj, index) in dogsArr" :key="index" :dogobj="obj"></DogCom3>
    </div>
</template>

<script>
import axios from 'axios';
import DogCom3 from './components/dogCom3.vue'

export default {
    components: {
        DogCom3
    },
    data() {
        return {
            dogsArr: []
        }
    },
    mounted() {
        // 不建议将图片直接放入到 /public（资源文件夹）中
        // 实际生产中请使用 图床 或 对象存储 作为图片的 url 地址！！！

        // Q: axios.get('...') 中的路径为什么要加 ../ ？
        // A: 这行代码打包后会混淆到 打包后的文件夹(如：dist)/js/某个js文件中 ，
        //    而 dogsList.json 文件会被直接打包到 打包后的文件夹(dist)/dogsList.json ，
        //    因此这里要用 ../ 来返回到 打包后的文件夹(dist) 下
        axios.get('../dogsList.json').then((res) => {
            this.dogsArr = res.data;
            // console.log(this.dogsArr);
        }).catch(() => {
            console.log('数据请求失败，请稍后重试！');
        });
    }
}
</script>

<style scoped></style>
