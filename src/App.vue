<template>
    <div>
        <header class="hero">
        </header>
        <Navbar />
        <Hero />
        <Sansu />
        <Bamboo />
        <Pickle />
        <Wawu />
        <Liujiang />
        <Food />
        <Footer />
        <footer>
            <p>© 2026 眉山文化展示平台</p>
        </footer>
    </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sansu from './components/Sansu.vue'
import Bamboo from './components/Bamboo.vue'
import Pickle from './components/Pickle.vue'
import Wawu from './components/Wawu.vue'
import Liujiang from './components/Liujiang.vue'
import Food from './components/Food.vue'
import Footer from './components/Footer.vue'

import { onMounted } from "vue"

onMounted(() => {
    const sections = document.querySelectorAll("section")
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show")
            }
        })
    })
    sections.forEach(section => {
        observer.observe(section)
    })
})
</script>

<style>
body {
    margin: 0;
    padding-top: 80px;
    /* 防止body宽度溢出 */
    width: 100%;
    overflow-x: hidden;
}

/* 核心修改：保证背景图等比例缩放 */
.hero {
    /* 关键1：最大宽度1200px，小屏幕自动占满宽度 */
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* 关键2：cover保证图片等比例覆盖容器，不拉伸；center让图片居中显示 */
    color: white;
    /* 防止内容溢出 */
    overflow: hidden;
}

/* 可选优化：小屏幕下调整文字大小，避免文字挤压 */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2rem;
    }

    .hero p {
        font-size: 1rem;
    }
}
</style>