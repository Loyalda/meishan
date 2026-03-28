<template>
    <header class="navbar">
        <div class="navbar-container">
            <div class="logo">
                {{ t('navbar.logo') }}
            </div>
            <nav class="nav-links">
                <!-- 原有导航项 -->
                <a href="#sansu" @click="scrollToSection('sansu', $event)"
                    :class="{ active: activeSection === 'sansu' }">{{ t('navbar.sansu') }}</a>
                <a href="#bamboo" @click="scrollToSection('bamboo', $event)"
                    :class="{ active: activeSection === 'bamboo' }">{{ t('navbar.bamboo') }}</a>
                <a href="#wawu" @click="scrollToSection('wawu', $event)"
                    :class="{ active: activeSection === 'wawu' }">{{ t('navbar.wawu') }}</a>
                <a href="#liujiang" @click="scrollToSection('liujiang', $event)"
                    :class="{ active: activeSection === 'liujiang' }">{{ t('navbar.liujiang') }}</a>
                <a href="#food" @click="scrollToSection('food', $event)"
                    :class="{ active: activeSection === 'food' }">{{ t('navbar.food') }}</a>
                <a href="#footer" @click="scrollToSection('footer', $event)"
                    :class="{ active: activeSection === 'footer' }">{{ t('navbar.footer') }}</a>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { watch, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// 定义响应式变量：记录当前激活的导航项
const activeSection = ref('')

// 优化滚动逻辑：适配页面缩放、动态计算导航栏高度
const scrollToSection = (sectionId, e) => {
    if (e) e.preventDefault()

    const target = document.getElementById(sectionId)
    if (!target) return

    // 更新激活的导航项
    activeSection.value = sectionId

    // 动态计算导航栏高度（适配缩放/自定义样式）
    const navbar = document.querySelector('.navbar')
    const navbarHeight = navbar ? navbar.offsetHeight : 70

    // 计算目标位置（兼容页面缩放比例）
    const targetRect = target.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const targetPosition = scrollTop + targetRect.top - navbarHeight

    // 平滑滚动（强制开启，兼容所有浏览器）
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
        block: 'start'
    })

    // 缩放适配：滚动后强制重绘目标元素
    setTimeout(() => {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }, 100)
}

// 监听页面滚动：自动高亮当前可视区域对应的导航项
const handleScroll = () => {
    // 新增：加入comment到监听列表
    const sectionIds = ['sansu', 'bamboo', 'wawu', 'liujiang', 'food', 'comment', 'footer']

    // 遍历判断哪个section在可视区域
    sectionIds.forEach(id => {
        const section = document.getElementById(id)
        if (!section) return

        const rect = section.getBoundingClientRect()
        // 当section顶部进入可视区域（距离顶部>0，底部>0）时激活
        if (rect.top <= 100 && rect.bottom >= 0) {
            activeSection.value = id
        }
    })
}

// 页面加载时初始化
onMounted(() => {
    // 监听滚动事件
    window.addEventListener('scroll', handleScroll)
    // 初始化激活项（可选：默认高亮第一个）
    activeSection.value = 'sansu'

    // 初始化导航栏布局
    setTimeout(() => {
        const navbarContainer = document.querySelector('.navbar-container')
        if (navbarContainer) {
            navbarContainer.style.width = '100%'
            navbarContainer.style.maxWidth = '1200px'
        }
    }, 500)
})

// 组件卸载时移除监听（防止内存泄漏）
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

// 监听页面缩放/调整，修复导航栏布局
watch(() => window.innerWidth, () => {
    const navbar = document.querySelector('.navbar')
    if (navbar) navbar.style.overflowX = 'auto'
}, { immediate: true })
</script>

<style scoped>
/* 核心：使用rem/vw单位，适配页面缩放 */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4.375rem;
    /* 70px → rem单位，适配缩放 */
    background: white;
    box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
    z-index: 100;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    /* 缩放适配：强制抗锯齿 */
    transform: translateZ(0);
    backface-visibility: hidden;
}

.navbar::-webkit-scrollbar {
    display: none;
}

.navbar-container {
    width: 100%;
    max-width: 75rem;
    /* 1200px → rem */
    margin: 0 auto;
    padding: 0 3.75rem;
    /* 60px → rem */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    /* 缩放适配：最小宽度限制 */
    min-width: 20rem;
    box-sizing: border-box;
}

.logo {
    font-size: 1.25rem;
    /* 20px → rem */
    font-weight: bold;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 40%;
    /* 缩放适配：最小宽度 */
    min-width: 6rem;
}

.nav-links {
    display: flex;
    gap: 1.5625rem;
    /* 25px → rem */
    white-space: nowrap;
    /* 缩放适配：弹性收缩 */
    flex-shrink: 0;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    /* 16px → rem */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0.5rem 0;
    /* 8px → rem */
    position: relative;
    /* 缩放适配：最小点击区域 */
    min-width: 4rem;
    text-align: center;
}

.nav-links a:hover {
    color: #3498db;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0.125rem;
    /* 2px → rem */
    background: #3498db;
    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
}

/* 核心修改：通用的激活态样式（替代原来固定的food-link） */
.nav-links a.active {
    font-weight: 600;
    color: #ff8c00;
    /* 保持和原美食链接一致的橙色 */
}

.nav-links a.active::after {
    width: 100%;
    /* 激活时下划线全宽显示 */
    background: #ff8c00;
    /* 橙色下划线 */
}

/* 响应式+缩放适配：多断点覆盖 */
@media (max-width: 48rem) {

    /* 768px → rem */
    .navbar-container {
        padding: 0 1.25rem;
        /* 20px → rem */
    }

    .logo {
        font-size: 1.125rem;
        /* 18px → rem */
    }

    .nav-links {
        gap: 0.9375rem;
        /* 15px → rem */
    }

    .nav-links a {
        font-size: 0.875rem;
        /* 14px → rem */
        min-width: 3.5rem;
    }
}

@media (max-width: 30rem) {

    /* 480px → rem */
    .navbar {
        height: 3.75rem;
        /* 60px → rem */
    }

    .nav-links {
        gap: 0.625rem;
        /* 10px → rem */
    }

    .nav-links a {
        font-size: 0.75rem;
        /* 12px → rem */
        min-width: 3rem;
    }
}

/* 页面缩放适配：强制字体不缩放 */
@media (min-resolution: 120dpi),
(-webkit-min-device-pixel-ratio: 1.25) {
    .navbar {
        font-size: 90%;
    }
}
</style>