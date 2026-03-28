import { createRouter, createWebHashHistory } from 'vue-router'

// 导入你 components 文件夹下的所有需要路由的组件（路径100%匹配你的目录）
import Food from '@/components/Food.vue'
import Wawu from '@/components/Wawu.vue'
import Sansu from '@/components/Sansu.vue'
import Liujiang from '@/components/Liujiang.vue'
import Bamboo from '@/components/Bamboo.vue'

// 路由规则配置（只配你已有的组件，避免多余报错）
const routes = [
  // 首页：默认跳转到美食页面（Food.vue）
  {
    path: '/',
    redirect: '/food'
  },
  // 美食页面（核心：解决 /food 路径匹配问题）
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  // 瓦屋山页面
  {
    path: '/wawu',
    name: 'Wawu',
    component: Wawu
  },
  // 三苏文化页面
  {
    path: '/sansu',
    name: 'Sansu',
    component: Sansu
  },
  // 柳江古镇页面
  {
    path: '/liujiang',
    name: 'Liujiang',
    component: Liujiang
  },
  // 青神竹编页面
  {
    path: '/bamboo',
    name: 'Bamboo',
    component: Bamboo
  }
]

// 创建路由实例（用 hash 模式，新手无部署坑）
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router