<!--
 * @Author: QuestionMark001
 * @Date: 2023-05-18 15:36:08
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-05-18 16:23:23
 * @FilePath: /LocalProjects/WebEx/src/Vue_3.x/vue-search/src/components/Search.vue
 * @Description: Search.vue
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
-->

<script>
export default {
    data() {
        return {
            searchString: '',
            articles: [
                {
                    "title": "Hello CSS",
                    "url": "https://developer.mozilla.org/docs/Web/CSS",
                    "image": "https://www.runoob.com/wp-content/uploads/2013/07/css-logo.png"
                },
                {
                    "title": "Hello JS",
                    "url": "https://developer.mozilla.org/docs/Web/JavaScript",
                    "image": "https://www.runoob.com/wp-content/uploads/2013/07/js-logo.png"
                },
                {
                    "title": "Hello HTML",
                    "url": "https://developer.mozilla.org/docs/Web/HTML",
                    "image": "https://www.runoob.com/wp-content/uploads/2013/06/image-icon.png"
                },
                {
                    "title": "Vue.js - The Progressive JavaScript Framework | Vue.js",
                    "url": "https://vuejs.org/",
                    "image": "https://vuejs.org/logo.svg"
                }
            ]
        }
    },
    computed: {
        filteredArticles: function () {
            var articles_arr = this.articles,
                searchString = this.searchString;
            
            if (!searchString) {
                return articles_arr;
            }
            searchString = searchString.trim().toLowerCase();
            articles_arr = articles_arr.filter(function (item) {
                if (item.title.toLowerCase().indexOf(searchString) !== -1) {
                    return item;
                }
            })

            // 返回过滤后的数据
            return articles_arr;
        }
    }
}
</script>

<template>
<form>
    <div class="bar">
        <input type="text" v-model="searchString" placeholder="请输入搜索内容...">
    </div>
    <ul>
        <li v-for="articles in filteredArticles">
            <a v-bind:href="articles.url"><img v-bind:src="articles.image" /></a>
            <p>{{articles.title}}</p>
        </li>
    </ul>
</form>
</template>

<style scoped></style>