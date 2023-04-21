/*
 * @Author: QuestionMark001
 * @Date: 2023-04-21 10:59:33
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-04-21 11:31:33
 * @FilePath: /LocalProjects/WebEx/src/AJAX/JavaScript/app.js
 * @Description: JavaScript AJAX 原生JS AJAX
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
 */

// Please use Node.js to run the js file.
// 请使用 Node.js 去运行此js文件。
const http = require('http');
const app = http.createServer();

app.on('request', (req, res) => {
    res.setHeader('Content-type', 'text/html;charset=utf8');
    if (req.url == '/news') {
        res.end(JSON.stringify([
            {
                'channelId': '11',
                'name': 'Sporting News'
            },
            {
                'channelId': '12',
                'name': 'Tech News'
            }
        ]))
    } else {
        res.end('404');
    }
})

app.listen(8080, () => {
    console.log('Server is running on port 8080.')
})