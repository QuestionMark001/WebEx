/*
 * @Author: QuestionMark001
 * @Date: 2022-06-05 17:15:46
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2022-06-06 16:30:31
 * @FilePath: \LocalProjects\WebEx\src\QuestionMark001教程网\js\mobile.js
 * @Description: 移动端适配
 * 
 * Copyright (c) 2022 by QuestionMark001, All Rights Reserved. 
 */

function myFunction(mobileMenu) {

    var menu = document.getElementById("menu_hide");
    if (mobileMenu.classList.toggle("change")) {
        menu.style.display = "inline-flex"; /* 菜单可见 */
    }
    else {
        menu.style.display = "none"; /* 菜单不可见 */
        menu.style.display = ""; /* 清除display属性 */
    }
}