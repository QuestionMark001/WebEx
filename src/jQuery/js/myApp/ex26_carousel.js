/*
 * @Author: QuestionMark001
 * @Date: 2024-03-13 18:30:08
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-03-15 17:54:33
 * @FilePath: \LocalProjects\WebEx\src\jQuery\js\myApp\ex26_carousel.js
 * @Description: jQuery 实现轮播图
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
 */

/* TODO:
 * 功能说明:
 * 1. 点击向右(左)的图标, 平滑切换到下(上)一页
 * 2. 无限循环切换: 第一页的上一页为最后页, 最后一页的下一页是第一页
 * 3. 每隔3s自动滑动到下一页
 * 4. 当鼠标进入图片区域时, 自动切换停止, 当鼠标离开后,又开始自动切换
 * 5. 切换页面时, 下面的圆点也同步更新
 * 6. 点击圆点图标切换到对应的页
 * 
 * bug: 快速点击时, 翻页不正常
 */

$(function () {
    var $container = $('#container');
    var $list = $('#list');
    var $points = $('#pointsDiv>span');
    var $prev = $('#prev');
    var $next = $('#next');
    var imgCount = $points.length;       // 通过圆点数量获取原本真实的图片数量
    var offset = 0;                      // 设置初始总偏移量
    const IMG_WITH = 600;                // 照片的宽度
    const TIME = 500;                    // 用于切换图片的持续总时间
    const ITEM_TIME = 10;                // 循环定时器的单位时间
    
    // 1. 点击向右(左)的图标, 平滑切换到下(上)一页
    // 上一页（加上一个照片的宽度）
    $prev.click(function () {
        nextPage(false);
    });
    // 下一页（减去一个照片的宽度）
    $next.click(function () {
        nextPage(true);
    });

    /**
     * 用于平滑切换上/下一页的函数
     * @param {Boolean} next false:上一页, true:下一页
     */
    function nextPage(next) {
        // 获取当前图片在父元素中的left值
        var curLeft = $list.position().left;
        // 计算出总偏移量
        offset = next ? -IMG_WITH : IMG_WITH;
        // 计算出目标偏移量
        var targetOffset = curLeft + offset;
        // 计算出间隔偏移量
        itemOffset = offset / (TIME / ITEM_TIME);

        // 设置循环定时器，实现平滑切换
        var intervalId = setInterval(() => {
            // 每次循环时计算出新的curLeft
            curLeft += itemOffset;
            if (curLeft === targetOffset) {
                clearInterval(intervalId); // 切换完毕后，清除定时器

                // 2. 切换完毕并清除定时器后，判断循环翻页（需要处理浮点数运算精度）
                const EPSILON = 0.001; // 定义一个极小值（用于处理浮点数运算精度）
                if (Math.abs(curLeft - (-(imgCount + 1) * IMG_WITH)) < EPSILON) {
                    curLeft = -IMG_WITH;
                } else if (Math.abs(curLeft - 0) < EPSILON) {
                    curLeft = -imgCount * IMG_WITH;
                }
                // TODO2原始实现代码（无法处理浮点数运算精度问题，作废）
                // if (curLeft === -(imgCount + 1) * IMG_WITH) {
                //     curLeft = -IMG_WITH;
                // } else if (curLeft === 0) {
                //     curLeft = -imgCount * IMG_WITH;
                // }
            }

            $list.css('left', curLeft);
        }, ITEM_TIME);
    }
});