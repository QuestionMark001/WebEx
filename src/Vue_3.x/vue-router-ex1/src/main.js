import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 直接导入 './router/index.js' 中暴露出来的 'router' 对象即可

const app = createApp(App)

app.use(router)

app.mount('#app')
