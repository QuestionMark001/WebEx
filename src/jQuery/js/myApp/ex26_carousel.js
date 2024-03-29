/*
 * @Author: QuestionMark001
 * @Date: 2024-03-13 18:30:08
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-03-16 21:13:50
 * @FilePath: \LocalProjects\WebEx\src\jQuery\js\myApp\ex26_carousel.js
 * @Description: jQuery 实现轮播图
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
 */

/* TODO:
 * 功能说明:
 * 1. 点击向右(左)的图标, 平滑切换到下(上)一页
 * 2. 无限循环切换: 第一页的上一页为最后页, 最后一页的下一页是第一页
 * 3. 每隔1s自动滑动到下一页
 * 4. 当鼠标进入图片区域时, 自动切换停止, 当鼠标离开后,又开始自动切换
 * 5. 切换页面时, 下面的圆点也同步更新
 * 6. 点击圆点图标切换到对应的页
 */

$(function () {
    var $container = $('#container');
    var $list = $('#list');
    var $points = $('#pointsDiv>span');
    var $prev = $('#prev');
    var $next = $('#next');
    var imgCount = $points.length;       // 通过圆点数量获取原本真实的图片数量
    var index = 0;                       // 设置初始圆点坐标
    var offset = 0;                      // 设置初始总偏移量
    var moving = false;                  // 设置初始 用户手动快速翻页状态（默认没翻）
    const IMG_WITH = 600;                // 照片的宽度
    const TIME = 500;                    // 用于切换图片的持续总时间
    const ITEM_TIME = 10;                // nextPage(next)内循环定时器的单位时间
    
    // 1. 点击向右(左)的图标, 平滑切换到下(上)一页
    // 上一页（加上一个照片的宽度）
    $prev.click(function () {
        nextPage(false);
    });
    // 下一页（减去一个照片的宽度）
    $next.click(function () {
        nextPage(true);
    });

    // 3. 每隔1s自动滑动到下一页
    var intervalId = setInterval(function () {
        nextPage(true);
    }, 1000)

    // 4. 当鼠标进入图片区域时, 自动切换停止, 当鼠标离开后,又开始自动切换
    $container.hover(function () {
        // 清除定时器
        clearInterval(intervalId)
    }, function () {
        intervalId = setInterval(function () {
            nextPage(true);
        }, 1000)
    });

    // 6. 点击圆点图标切换到对应的页
    $points.click(function () {
        // 获取目标下标的值
        var targetIndex = $(this).index();
        // 如果点击的圆点对应页面不是当前页面，则继续
        if (targetIndex != index) {
            nextPage(targetIndex);
        }
    });

    /**
     * 用于平滑切换上/下一页/指定下标页的函数
     * @param {(Boolean|Number)} next - false:上一页, true:下一页；Number: 下标值
     */
    function nextPage(next) {
        // 如果用户正在手动快速翻页，则直接结束
        if (moving) { // 已经正在翻页中
            return;
        }
        moving = true; // 标识正在翻页

        // 获取当前图片在父元素中的left值
        var curLeft = $list.position().left;
        // 判断 next 参数的数据类型
        if (typeof next === 'boolean') {
            // 计算出上/下一页的总偏移量
            offset = next ? -IMG_WITH : IMG_WITH;
        } else {
            // 计算出指定下标页的总偏移量
            offset = -(next - index) * IMG_WITH;
        }
        // 计算出目标偏移量
        var targetOffset = curLeft + offset;
        // 计算出间隔偏移量
        var itemOffset = offset / (TIME / ITEM_TIME);

        // 设置循环定时器，实现平滑切换
        var intervalId = setInterval(function () {
            // 每次循环时计算出新的curLeft
            curLeft += itemOffset;
            if (curLeft === targetOffset) {
                clearInterval(intervalId); // 切换完毕后，清除定时器
                
                moving = false; // 标识翻页结束

                // 2. 无限循环切换，切换完毕并清除定时器后，判断循环翻页
                // 注：循坏翻页原理图 WebEx/src/jQuery/img/26_carousel.drawio.png
                /*
                 * FIXME: Bug（未修复）
                 * 在2K分辨率屏幕下最大化浏览器浏览网页时循环翻页失效
                 * 问题复现：
                 * OS: Windows 11
                 * Browser: Google Chrome 112
                 * Screen: 2560*1440
                 * Windows HIDPI: 150%
                 * 复现步骤：打开网页后立即点击窗口最大化按钮，
                 *         然后再触发循环翻页，就会使该功能失效。
                 * 临时解决方法：不使用最大化浏览器窗口浏览网页，
                 *             适当缩小浏览器窗口，重启Live Server开关，
                 *             然后强刷多次网页后即可解决。
                 */
                if (curLeft === -(imgCount + 1) * IMG_WITH) {
                    curLeft = -IMG_WITH;
                } else if (curLeft === 0) {
                    curLeft = -imgCount * IMG_WITH;
                }
            }

            $list.css('left', curLeft); // 应用 CSS 样式
        }, ITEM_TIME);

        // 5. 切换页面时, 圆点也同步更新
        // 更新圆点
        updatePoints(next);
    }

    /**
     * 用于更新圆点信息的函数
     * @param {(Boolean|Number)} next false:上一页, true:下一页；Number: 下标值
     */
    function updatePoints(next) {
        var targetIndex = 0; // 用于记录目标圆点的下标
        if (typeof next === 'boolean') {
            // 计算目标圆点下标（上/下翻页）
            if (next) {
                // 向下翻页
                targetIndex = index + 1; // [0, ..., imgCount-1]
                if (targetIndex === imgCount) { // 适配循环翻页（情况一）
                    targetIndex = 0;
                }
            } else {
                // 向上翻页
                targetIndex = index - 1; // [0, ..., imgCount-1]
                if (targetIndex === -1) { // 适配循环翻页（情况二）
                    targetIndex = imgCount - 1;
                }
            }
        } else {
            // next为数值时直接赋值（指定下标页）
            targetIndex = next;
        }
        // 移除更新前圆点的CSS样式
        $points.eq(index).removeClass('on');
        // 添加更新后目标圆点的CSS样式
        $points.eq(targetIndex).addClass('on');
        // 更新圆点坐标信息
        index = targetIndex;
    }
});