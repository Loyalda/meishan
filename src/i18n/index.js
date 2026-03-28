import { createI18n } from 'vue-i18n'
// 导入语言包
import zh from './lang/zh'
import en from './lang/en'
import ja from './lang/ja'

// 从localStorage读取缓存的语言（实现刷新后保留语言设置）
const getLocale = () => {
  const lang = localStorage.getItem('meishan-lang')
  // 如果有缓存则用缓存，否则默认中文
  return lang || 'zh'
}

// 创建i18n实例
const i18n = createI18n({
  legacy: false, // 必须设置为false，适配Vue3的组合式API
  locale: getLocale(), // 默认语言
  fallbackLocale: 'zh', // 兜底语言（如果某个语言包缺失字段，用中文）
  messages: {
    zh,
    en,
    ja
  }
})

export default i18n