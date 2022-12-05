/*
 * @Author: QuestionMark001
 * @Date: 2022-11-29 08:36:55
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2022-12-05 20:30:01
 * @FilePath: /LocalProjects/WebEx/src/QuestionMark001教程网_Ver.2.0/js/messageboard.js
 * @Description: 留言板_Ver.2.0
 * 
 * Copyright (c) 2022 by QuestionMark001, All Rights Reserved. 
 */

// 获取元素
var comment_btn = document.querySelector('.comment_button');
var comment_ul = document.querySelector('.comment_ul');
var comment_text = document.querySelector('#comment');

// 给alert弹窗绑定事件监听器
comment_btn.addEventListener('click', function() {

    if (!comment_text.value.length) {
        alert('请输入内容！');
        return;
    }

    var comment_li = document.createElement('li');

    comment_li.className = 'comment_li';
    comment_li.innerHTML = comment_text.value + "<a class='comment_a' href='javascript:;'>删除</a>";
    comment_ul.insertBefore(comment_li, comment_ul.children[0]);

    var del = comment_li.querySelector('.comment_a');

    // 给删除按钮绑定事件监听器
    del.addEventListener('click', function(evt) {
        evt.preventDefault();
        comment_ul.removeChild(this.parentNode);
    });

});