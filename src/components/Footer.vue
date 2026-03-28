<template>
    <div class="footer-wrapper">
        <!-- ① 游客留言互动 -->
        <section class="comment-section" id="footer">
            <div class="container">
                <h2 class="section-title">{{ t('comment.title') }}</h2>
                <p class="section-sub">{{ t('comment.subtitle') }}</p>
                <div class="comment-form">
                    <input v-model="form.nickname" class="form-input" :placeholder="t('comment.nickname')"
                        maxlength="20" />
                    <textarea v-model="form.content" class="form-textarea" :placeholder="t('comment.placeholder')"
                        maxlength="200" rows="4"></textarea>
                    <button class="submit-btn" @click="submitComment">{{ t('comment.submit') }}</button>
                    <p v-if="submitMsg" class="submit-msg">{{ submitMsg }}</p>
                </div>
            </div>
        </section>

        <!-- ② 留言展示墙 - 轮播版 -->
        <section class="wall-section">
            <div class="container">
                <h2 class="section-title">{{ t('wall.title') }}</h2>

                <!-- 轮播容器 -->
                <div class="carousel-container">
                    <button class="carousel-btn prev" @click="prevMsgPage" :disabled="msgCurrentPage === 0">‹</button>

                    <div class="wall-grid carousel-content">
                        <div class="wall-card" v-for="(msg, idx) in currentMessages" :key="idx">
                            <div class="wall-avatar">{{ msg.nickname.charAt(0) }}</div>
                            <div class="wall-body">
                                <p class="wall-nickname">{{ msg.nickname }}</p>
                                <p class="wall-content">{{ msg.content }}</p>
                                <p class="wall-time">{{ formatDate(msg.create_time) }}</p>
                            </div>
                        </div>
                    </div>

                    <button class="carousel-btn next" @click="nextMsgPage"
                        :disabled="msgCurrentPage >= msgTotalPages - 1">›</button>
                </div>

                <!-- 轮播圆点 -->
                <div class="carousel-dots" v-if="msgTotalPages > 1">
                    <span v-for="(_, idx) in msgTotalPages" :key="idx" class="dot"
                        :class="{ active: msgCurrentPage === idx }" @click="msgCurrentPage = idx"></span>
                </div>
            </div>
        </section>

        <!-- ③ 核心：三个板块（含语言切换） -->
        <div class="three-section-row">
            <div class="container row-container">
                <!-- 旅游攻略下载 -->
                <section class="guide-section inline-section">
                    <h2 class="section-title">{{ t('guide.title') }}</h2>
                    <p class="guide-desc">{{ t('guide.desc') }}</p>
                    <div class="guide-list">
                        <div class="guide-item" v-for="(key, idx) in ['guide.item1', 'guide.item2', 'guide.item3']"
                            :key="idx">
                            <span class="guide-icon">📄</span>
                            <span class="guide-name">{{ t(key) }}</span>
                            <button class="download-btn" @click="downloadGuide(key)">{{ t('guide.download') }}</button>
                        </div>
                    </div>
                </section>

                <!-- 联系方式 -->
                <section class="contact-section inline-section">
                    <h2 class="section-title">{{ t('contact.title') }}</h2>
                    <div class="contact-grid">
                        <div class="contact-item">
                            <span class="contact-icon">📧</span>
                            <span>example@email.com</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">💻</span>
                            <span>GitHub · 毕业设计项目</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">🏛️</span>
                            <span>{{ t('footer.systemName') }}</span>
                        </div>
                    </div>
                </section>

                <!-- 东坡故里 + 全局语言切换按钮（核心） -->
                <section class="footer-info-section inline-section">
                    <h2 class="section-title">{{ t('hero.title') }}</h2>
                    <p class="footer-info-desc">{{ t('hero.desc') }}</p>
                    <div class="footer-links">
                        <span>{{ t('navbar.sansu') }}</span>
                        <span>{{ t('navbar.bamboo') }}</span>
                        <span>{{ t('navbar.wawu') }}</span>
                        <span>{{ t('navbar.liujiang') }}</span>
                        <span>{{ t('navbar.food') }}</span>
                    </div>

                    <!-- 全局语言切换按钮组 -->
                    <div class="lang-switch-group">
                        <span class="lang-tip">{{ t('footer.langTip') }}：</span>
                        <button class="lang-btn" :class="{ active: currentLang === 'zh' }" @click="switchLang('zh')">
                            中文
                        </button>
                        <button class="lang-btn" :class="{ active: currentLang === 'en' }" @click="switchLang('en')">
                            English
                        </button>
                        <button class="lang-btn" :class="{ active: currentLang === 'ja' }" @click="switchLang('ja')">
                            日本語
                        </button>
                    </div>
                </section>
            </div>
        </div>

        <!-- ④ 版权信息 -->
        <footer class="copyright-footer">
            <div class="container">
                <p class="copyright">{{ t('footer.copyright') }}</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios' // 引入axios请求后端

// ========== 全局语言切换核心逻辑 ==========
const { t, locale } = useI18n()
const currentLang = computed({
    get: () => locale.value,
    set: (val) => { locale.value = val }
})
const switchLang = (lang) => {
    currentLang.value = lang
    localStorage.setItem('meishan-lang', lang)
}

// ========== 留言功能逻辑 - 数据库版 + 轮播 ==========
const form = reactive({ nickname: '', content: '' })
const submitMsg = ref('')
const messages = ref([]) // 数据库留言列表

// 轮播分页配置
const msgCurrentPage = ref(0)
const msgPageSize = 4 // 一页显示4条

// 提交留言到数据库
const submitComment = async () => {
    if (!form.nickname.trim()) {
        submitMsg.value = t('comment.nicknameTip')
        setTimeout(() => submitMsg.value = '', 3000)
        return
    }
    if (!form.content.trim()) {
        submitMsg.value = t('comment.contentTip')
        setTimeout(() => submitMsg.value = '', 3000)
        return
    }

    try {
        // 请求后端接口
        await axios.post('http://localhost:3000/api/visitor-message', {
            nickname: form.nickname.trim(),
            content: form.content.trim()
        })
        submitMsg.value = t('comment.successTip')
        form.nickname = ''
        form.content = ''
        fetchMessages() // 提交后刷新留言列表
    } catch (err) {
        submitMsg.value = '提交失败，请重试'
        console.error(err)
    }
    setTimeout(() => submitMsg.value = '', 3000)
}

// 获取数据库留言
const fetchMessages = async () => {
    try {
        const res = await axios.get('http://localhost:3000/api/visitor-messages')
        messages.value = res.data.data
    } catch (err) {
        console.error('获取留言失败', err)
    }
}

// 轮播计算属性
const msgTotalPages = computed(() => Math.ceil(messages.value.length / msgPageSize))
const currentMessages = computed(() => {
    const start = msgCurrentPage.value * msgPageSize
    return messages.value.slice(start, start + msgPageSize)
})

// 上一页/下一页
const prevMsgPage = () => {
    if (msgCurrentPage.value > 0) msgCurrentPage.value--
}
const nextMsgPage = () => {
    if (msgCurrentPage.value < msgTotalPages.value - 1) msgCurrentPage.value++
}

// 时间格式化
const formatDate = (time) => {
    if (!time) return ''
    const d = new Date(time)
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// 页面加载时获取留言
onMounted(() => {
    fetchMessages()
})

// ========== 攻略下载逻辑 ==========
const downloadGuide = (key) => {
    const fileMap = {
        'guide.item1': '/guides/meishan-culture-guide.pdf',
        'guide.item2': '/guides/wawu-mountain-map.pdf',
        'guide.item3': '/guides/liujiang-town-guide.pdf'
    }
    const a = document.createElement('a')
    a.href = fileMap[key]
    a.download = t(key)
    a.click()
}
</script>

<style scoped>
/* 全局样式重置 */
.footer-wrapper {
    background: #f8f5f0;
    color: #4a4a4a;
    font-family: "Microsoft Yahei", sans-serif;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 留言板块样式 */
.comment-section {
    padding: 60px 0 40px;
    border-bottom: 1px solid #e0d8c8;
}

.section-title {
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 8px;
    color: #3a3228;
}

.section-sub {
    text-align: center;
    color: #8a7a67;
    margin-bottom: 25px;
    font-size: 0.9rem;
}

.comment-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.form-input,
.form-textarea {
    background: #fff;
    border: 1px solid #d4c8b8;
    border-radius: 8px;
    padding: 12px 16px;
    color: #4a4a4a;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s;
    resize: none;
}

.form-input:focus,
.form-textarea:focus {
    border-color: #d4b886;
}

.submit-btn {
    background: #d4b886;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}

.submit-btn:hover {
    background: #c9a86e;
}

.submit-msg {
    text-align: center;
    color: #d4b886;
    font-size: 14px;
    margin: 0;
}

/* 留言墙轮播样式 */
.wall-section {
    padding: 50px 0;
    border-bottom: 1px solid #e0d8c8;
}

/* 轮播核心布局 */
.carousel-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 25px auto;
    max-width: 1100px;
}

.carousel-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: #d4b886;
    color: white;
    font-size: 18px;
    cursor: pointer;
    flex-shrink: 0;
}

.carousel-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.carousel-content {
    display: flex;
    gap: 15px;
    overflow: hidden;
    width: calc(4 * 260px);
}

.wall-grid {
    display: flex;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 15px;
}

.wall-card {
    background: #fff;
    border: 1px solid #e8e2d8;
    border-radius: 12px;
    padding: 18px;
    display: flex;
    gap: 12px;
    align-items: flex-start;
    width: 260px;
    flex-shrink: 0;
}

.wall-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #d4b886;
    color: #fff;
    font-weight: 700;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.wall-nickname {
    font-weight: 600;
    color: #3a3228;
    margin-bottom: 5px;
    margin-top: 0;
}

.wall-content {
    color: #666;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 6px;
    margin-top: 0;
}

.wall-time {
    color: #a09485;
    font-size: 12px;
    margin: 0;
}

/* 轮播圆点 */
.carousel-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
}

.dot.active {
    background: #d4b886;
}

/* 三个板块核心样式（紧凑版） */
.three-section-row {
    padding: 40px 0;
    border-bottom: 1px solid #e0d8c8;
}

.row-container {
    display: flex;
    gap: 15px;
    align-items: stretch;
    justify-content: center;
}

.inline-section {
    flex: 1;
    min-width: 220px;
    display: flex;
    flex-direction: column;
}

/* 攻略板块样式 */
.guide-desc {
    text-align: center;
    color: #8a7a67;
    font-size: 13px;
    margin-bottom: 10px;
}

.guide-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 100%;
    margin: 0 auto;
    flex: 1;
}

.guide-item {
    background: #fff;
    border: 1px solid #e8e2d8;
    border-radius: 8px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.guide-icon {
    font-size: 15px;
    color: #8a7a67;
}

.guide-name {
    flex: 1;
    color: #4a4a4a;
    font-size: 13px;
}

.download-btn {
    background: transparent;
    border: 1px solid #d4b886;
    color: #d4b886;
    border-radius: 4px;
    padding: 3px 10px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.2s;
}

.download-btn:hover {
    background: #d4b886;
    color: #fff;
}

/* 联系板块样式 */
.contact-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
    font-size: 13px;
    color: #666;
    flex: 1;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
}

.contact-icon {
    font-size: 14px;
    color: #8a7a67;
}

/* 页脚信息 + 语言切换样式（核心） */
.footer-info-section {
    text-align: center;
    flex: 1;
}

.footer-info-desc {
    color: #8a7a67;
    font-size: 13px;
    margin-bottom: 8px;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 12px;
    font-size: 13px;
    color: #666;
}

/* 语言切换按钮组样式（重点） */
.lang-switch-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 8px;
}

.lang-tip {
    font-size: 13px;
    color: #666;
}

.lang-btn {
    background: #fff;
    border: 1px solid #d4c8b8;
    color: #666;
    border-radius: 6px;
    padding: 4px 12px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.2s;
}

/* 激活态样式（当前选中的语言） */
.lang-btn.active {
    background: #d4b886;
    border-color: #d4b886;
    color: #fff;
}

.lang-btn:hover:not(.active) {
    border-color: #d4b886;
    color: #d4b886;
}

/* 版权信息样式 */
.copyright-footer {
    padding: 15px 0;
    text-align: center;
}

.copyright {
    font-size: 12px;
    color: #a09485;
    margin: 0;
}

/* 响应式适配 */
@media (max-width: 992px) {
    .row-container {
        flex-wrap: wrap;
        gap: 15px;
    }

    .inline-section {
        flex: 1 1 45%;
    }
}

@media (max-width: 576px) {
    .row-container {
        flex-direction: column;
        gap: 20px;
    }

    .inline-section {
        flex: 1 1 100%;
    }

    .lang-switch-group {
        flex-direction: column;
        gap: 6px;
    }

    .carousel-container {
        flex-direction: column;
        gap: 10px;
    }

    .carousel-content {
        width: 100%;
        flex-direction: column;
    }
}
</style>