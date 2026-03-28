import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n' // 导入i18n配置
import './style.css'
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init({
  duration: 1000,
  once: true
})
const app = createApp(App)

app.use(router)
app.use(i18n) // 全局注册i18n
app.mount('#app')
