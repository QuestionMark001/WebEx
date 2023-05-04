/*
 * @Author: QuestionMark001
 * @Date: 2023-05-04 20:16:40
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-05-04 20:53:44
 * @FilePath: /14-hello-dog-final/vue.config.js
 * @Description: 14-hello-dog-final vue.config.js
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
 */

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = '请选择您的修狗';
                return args;
            })
    }
})
