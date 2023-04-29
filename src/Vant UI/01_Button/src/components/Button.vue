<!--
 * @Author: QuestionMark001
 * @Date: 2023-04-29 15:23:21
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-04-29 18:39:58
 * @FilePath: /LocalProjects/WebEx/src/Vant UI/01_Button/src/components/Button.vue
 * @Description: 01_Button Components
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
-->

<script>
    // 局部引用 Vant UI
    
    import { Button } from 'vant'; // 引入 Vant UI 组件库中的 Button 按钮 组件
    import 'vant/lib/index.css'; // 引入 Vant UI 组件库中的 所有CSS样式

    export default {
        components: {
            'van-button': Button,
        },
    };
</script>

<template>
    <h2>Vant UI 按钮组件</h2>
    <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/button" target="_blank" rel="noopener" >Button 官方文档</a>
    
    <hr />

    <span class="tip">按钮类型（默认为 default 类型）</span><br />
    <van-button type="primary" class="button">主要按钮</van-button>
    <van-button type="success" class="button">成功按钮</van-button>
    <van-button type="default" class="button">默认按钮</van-button>
    <van-button type="warning" class="button">警告按钮</van-button>
    <van-button type="danger" class="button">危险按钮</van-button>
    
    <hr />

    <span class="tip">朴素按钮（ plain 属性 背景为白色）</span><br />
    <van-button plain type="primary" class="button">朴素主要按钮</van-button>
    <van-button plain type="success" class="button">朴素成功按钮</van-button>
    
    <hr />

    <span class="tip">细边框（ hairline 属性 0.5px 的细边框）</span><br />
    <van-button hairline plain type="primary" class="button">细边框主要按钮</van-button>
    <van-button hairline plain type="success" class="button">细边框成功按钮</van-button>
    
    <hr />

    <span class="tip">禁用，无法点击（ disabled 属性）</span><br />
    <van-button disabled type="primary" class="button">主要按钮</van-button>
    <van-button disabled type="success" class="button">成功按钮</van-button>
    
    <hr />

    <span class="tip">加载中（ loading 属性， loading-text 设置文字， loading-type 设置样式）</span><br />
    <van-button loading type="primary" class="button"></van-button>
    <van-button loading loading-text="加载中..." type="primary" class="button"></van-button>
    <van-button loading loading-type="spinner" type="primary" class="button"></van-button>
    <van-button loading loading-type="spinner" loading-text="加载中..." type="primary" class="button"></van-button>
    
    <hr />

    <span class="tip">按钮形状（ square 方形， round 圆形）</span><br />
    <van-button square type="primary" class="button">方形按钮</van-button>
    <van-button round type="success" class="button">圆形按钮</van-button>
    
    <hr />

    <!-- 通过 icon 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL -->
    <span class="tip">图标按钮（ icon 属性， 支持Vant UI Icon 组件里的所有图标，也可传入图标 URL 地址）</span><br />
    <van-button icon="plus" type="primary" class="button">添加</van-button>
    <van-button icon="checked" round type="success" class="button">我选好了</van-button>
    <van-button plain icon="wechat-pay" round type="success" class="button">微信支付</van-button>
    
    <hr />

    <!-- 支持 large、normal、small、mini 四种尺寸，默认为 normal -->
    <span class="tip">按钮大小（ size 属性， large、normal、small、mini 四种尺寸）</span><br />
    <van-button size="large" type="primary" class="button">large</van-button>
    <van-button size="normal" type="primary" class="button">normal</van-button>
    <van-button size="small" type="primary" class="button">small</van-button>
    <van-button size="mini" type="primary" class="button">mini</van-button>

    <hr />

    <span class="tip">块级元素（按钮默认为 inline-block 元素， block 属性，可将按钮变为 block 元素）</span><br />
    <van-button block type="primary" class="button">块级元素</van-button>

    <hr />

    <span class="tip">页面导航（可以通过 url 属性进行 URL 跳转，或通过 to 属性进行路由跳转）</span><br />
    <van-button icon="link-o" url="https://github.com/QuestionMark001" type="primary" class="button">Follow Me</van-button>
    <van-button icon="link-o" to="index" type="primary" class="button">to="index"</van-button>

    <hr />

    <span class="tip">按钮颜色（通过 color 属性可以自定义按钮的颜色）</span><br />
    <van-button color="purple" class="button">紫色按钮</van-button>
    <van-button plain color="purple" class="button">紫色（朴素）按钮</van-button>
    <van-button color="linear-gradient(to right, #007BB5, #B25DC1)" class="button">渐变色按钮</van-button>
</template>