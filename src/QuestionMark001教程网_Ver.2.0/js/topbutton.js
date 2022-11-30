/*
 * @Author: QuestionMark001
 * @Date: 2022-11-30 10:31:27
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2022-11-30 10:59:45
 * @FilePath: /LocalProjects/WebEx/src/QuestionMark001教程网_Ver.2.0/js/topbutton.js
 * @Description: 返回顶部按钮js逻辑部分
 * 
 * Copyright (c) 2022 by QuestionMark001, All Rights Reserved. 
 */

// 当网页向下滑动 200px 时出现"返回顶部"按钮
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById('topBtn').style.display = 'block';
    }
    else {
        document.getElementById('topBtn').style.display = 'none';
    }
}

// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}