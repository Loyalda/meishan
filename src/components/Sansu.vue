<template>
  <div class="page-nav" v-if="showNav">

    <a href="#concept">三苏文化</a>
    <a href="#relationship">人物关系</a>
    <a href="#timeline">人生时间轴</a>
    <a href="#shrine">三苏祠</a>
    <a href="#spirit">文化精神</a>
    <a href="#poem">诗词互动</a>

  </div>
  <div class="sansu-page" ref="sansuSection" id="sansu">
    <div class="page-progress">
      <div class="progress-bar" ref="pageProgress"></div>
    </div>
    <!-- ① Hero文化引导区 -->
    <section class="hero-section">
      <div class="hero-bg">
        <img src="/sansu.jpg" alt="三苏祠" class="hero-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content" data-aos="fade-up">
        <h1 class="hero-title">三苏文化</h1>
        <p class="hero-subtitle">一门父子三词客，千古文章四大家</p>
        <div class="scroll-hint" @click="scrollToNext">
          <span>↓ 向下滚动探索三苏文化</span>
        </div>
      </div>
    </section>

    <!-- ② 三苏文化概念 -->
    <section id="concept" class="concept-section section">
      <div class="container">
        <div class="concept-content" data-aos="fade-up">
          <h2 class="section-title">三苏文化概念</h2>
          <div class="concept-text">
            <p>三苏文化是中国传统文化的重要组成部分，</p>
            <p>指北宋文学家苏洵、苏轼、苏辙父子三人所共同形成的文化传统。</p>
            <br>
            <p>三人均位列"唐宋八大家"，</p>
            <p>在中国文学史上具有极高地位。</p>
            <br>
            <p>他们不仅在散文与诗词创作上取得巨大成就，</p>
            <p>更通过自己的思想与人生经历，</p>
            <p>影响了中国士人的精神世界。</p>
            <br>
            <p class="highlight">因此四川眉山也被称为："三苏故里"。</p>
          </div>
          <div class="concept-image">
            <img src="/sansuci.jpg" alt="三苏祠">
          </div>
        </div>
      </div>
    </section>

    <!-- ③ 三苏人物关系 -->
    <section id="relationship" class="relationship-section section bg-light">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">三苏人物关系</h2>

        <div class="relationship-tree" data-aos="zoom-in">
          <div class="tree-structure">
            <!-- 苏洵 -->
            <div class="person-card father" @click="selectPerson('xun')">
              <div class="person-avatar">
                <img src="/suxun.jpg">
              </div>
              <div class="card-content">
                <h3>苏洵</h3>
                <p class="years">1009—1066</p>
                <p class="title">北宋文学家</p>
                <p class="title">唐宋八大家之一</p>
                <p class="desc">散文气势雄健、议论深刻</p>
                <div class="works">
                  <span class="work-tag">六国论</span>
                  <span class="work-tag">权书</span>
                </div>
              </div>
            </div>

            <!-- 连接线 -->
            <div class="connection-lines">
              <div class="line line-left"></div>
              <div class="line line-right"></div>
            </div>

            <!-- 苏轼和苏辙 -->
            <div class="children">
              <div class="person-card son" @click="selectPerson('shi')" data-aos="fade-right">
                <div class="person-avatar">
                  <img src="/sushi.jpg">
                </div>
                <div class="card-content">
                  <h3>苏轼</h3>
                  <p class="years">1037—1101</p>
                  <p class="title">北宋文学家、书法家、画家</p>
                  <p class="title">中国历史上最具影响力的文人之一</p>
                  <div class="works">
                    <span class="work-tag">念奴娇·赤壁怀古</span>
                    <span class="work-tag">水调歌头</span>
                    <span class="work-tag">赤壁赋</span>
                  </div>
                </div>
              </div>

              <div class="person-card son" @click="selectPerson('zhe')" data-aos="fade-left">
                <div class="person-avatar">
                  <img src="/suzhe.jpg">
                </div>
                <div class="card-content">
                  <h3>苏辙</h3>
                  <p class="years">1039—1112</p>
                  <p class="title">北宋文学家、政治家</p>
                  <p class="desc">散文风格沉稳严谨</p>
                  <div class="works">
                    <span class="work-tag">栾城集</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ④ 苏轼人生时间轴 -->
    <section id="timeline" class="timeline-section section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">苏轼人生时间轴</h2>
        <p class="section-subtitle" data-aos="fade-up">跟随东坡先生的人生足迹</p>

        <div class="timeline">
          <div class="timeline-progress" ref="timelineProgress"></div>
          <div v-for="(event, index) in timelineEvents" :key="event.year" class="timeline-item"
            :class="{ left: index % 2 === 0, right: index % 2 !== 0 }"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'" data-aos-duration="1000" data-aos-offset="200">
            <div class="timeline-marker">
              <span class="year">{{ event.year }}</span>
            </div>
            <div class="timeline-content">
              <h3 v-if="event.title">{{ event.title }}</h3>
              <p>{{ event.content }}</p>
              <span v-if="event.person" class="person-tag">{{ event.person }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑤ 三苏祠文化空间 -->
    <section id="shrine" class="shrine-section section bg-light">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">三苏祠文化空间</h2>

        <div class="shrine-intro" data-aos="fade-up">
          <p>三苏祠位于四川眉山市，原为三苏父子的故居。</p>
          <p>南宋时期，人们为了纪念三苏，将这里改建为祠堂。</p>
          <p>经过历代修建，如今成为中国保存最完整的三苏纪念园林之一。</p>
        </div>

        <div class="buildings-grid">
          <div v-for="(building, index) in buildings" :key="building.name" class="building-card"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'">
            <div class="building-image">
              <img :src="building.img" :alt="building.name" @click="previewImage = building.img">
            </div>
            <div class="building-info">
              <h3>{{ building.name }}</h3>
              <p>{{ building.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑥ 三苏文化精神 -->
    <section id="spirit" class="section video-section">
      <div class="container">
        <h2 class="section-title">三苏文化纪录影像</h2>
        <p class="section-subtitle">通过影像感受三苏文化的历史与精神</p>
        <div class="video-box">
          <video controls style="width:100%; height:auto;">
            <source src="/sansu.mp4" type="video/mp4">
          </video>
        </div>
      </div>

      <div class="container">
        <h2 class="section-title" data-aos="fade-up">三苏文化精神</h2>

        <div class="spirit-grid">
          <div v-for="(spirit, index) in spirits" :key="spirit.title" class="spirit-card" :data-aos="'zoom-in'"
            :data-aos-delay="index * 100">
            <div class="spirit-icon">{{ spirit.icon }}</div>
            <h3>{{ spirit.title }}</h3>
            <p>{{ spirit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑦ 东坡诗词互动 -->
    <section id="poem" class="poem-section section">
      <div class="poem-bg"></div>
      <div class="container">
        <div class="poem-interactive" data-aos="fade-up">
          <h2 class="section-title white">东坡诗词互动</h2>
          <div class="poem-display">
            <p class="poem-text">{{ currentPoem }}</p>
          </div>
          <button class="generate-btn" @click="generatePoem">
            <span>生成诗句</span>
          </button>
        </div>
      </div>
    </section>
  </div>
  <!-- 图片查看器 -->
  <div v-if="previewImage" class="image-viewer" @click="previewImage = null">
    <img :src="previewImage" class="viewer-img">

  </div>
</template>

<script setup>

import { ref, onMounted } from "vue"
const timelineProgress = ref(null)
const previewImage = ref(null)
const pageProgress = ref(null)
const showNav = ref(false)
const sansuSection = ref(null)

// 诗词数据
const poems = [
  "明月几时有，把酒问青天",
  "大江东去，浪淘尽，千古风流人物",
  "竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生",
  "但愿人长久，千里共婵娟",
  "人生如梦，一尊还酹江月",
  "回首向来萧瑟处，归去，也无风雨也无晴",
  "十年生死两茫茫，不思量，自难忘",
  "欲把西湖比西子，淡妆浓抹总相宜"
]

const currentPoem = ref("点击按钮生成东坡诗句")

// 时间轴事件
const timelineEvents = ref([
  {
    year: 1037,
    content: "出生于四川眉山，成长在书香家庭。"
  },
  {
    year: 1057,
    content: "参加科举考试，受到欧阳修赏识，一举成名。",
    person: "欧阳修"
  },
  {
    year: 1079,
    title: "乌台诗案",
    content: "苏轼因诗文被指讽刺朝政，被贬离开京城，人生发生重大转折。"
  },
  {
    year: 1080,
    content: "贬居黄州，创作《赤壁赋》《念奴娇·赤壁怀古》等名作。"
  },
  {
    year: 1094,
    content: "再次被贬岭南，但仍保持豁达的人生态度。"
  },
  {
    year: 1101,
    content: "晚年北归途中逝世。"
  }
])

// 建筑数据
const buildings = ref([
  {
    name: "晚香堂",
    img: "/wanxiangtang.jpg",
    description: "得名于《晚香堂苏帖》，是陈列苏轼墨迹拓本、历代诗文集与书法碑刻的核心展馆，承载着东坡书法与文献的传承价值。"
  },
  {
    name: "式苏轩",
    img: "/shishuxuan.jpg",
    description: "三苏祠的文物库房与精品陈列室，珍藏上万件三苏文化相关文物、古籍与书画，是守护三苏文脉的重要场所。"
  },
  {
    name: "披风榭",
    img: "/pifengxie.jpg",
    description: "始建于南宋，清光绪年间重建以纪念苏轼、陆游与魏了翁，取 “披阅诗书、涵养国风” 之意，是缅怀东坡文采与风骨的标志性建筑。"
  },
  {
    name: "东坡盘陀像",
    img: "/dongpo.jpg",
    description: "以明代《东坡盘陀画像碑》为蓝本创作，呈现苏轼盘腿而坐、豁达悠然的形象，是眉山标志性文化地标，象征东坡先生超脱旷达的文人风骨。"
  }
])

// 文化精神
const spirits = ref([
  {
    icon: "📚",
    title: "读书精神",
    description: "三苏家族以读书治学闻名，体现中国传统文化中的重视教育。"
  },
  {
    icon: "🏛️",
    title: "家国情怀",
    description: "他们的文章关注国家命运与社会发展。"
  },
  {
    icon: "✍️",
    title: "文学创新",
    description: "三苏推动了宋代散文的发展，对后世文坛影响深远。"
  },
  {
    icon: "⚡",
    title: "人格独立",
    description: "在政治挫折中依然保持思想独立。"
  }
])

// 方法
const generatePoem = () => {
  const index = Math.floor(Math.random() * poems.length)
  currentPoem.value = poems[index]
}

const selectPerson = (person) => {
  console.log('Selected person:', person)
  // 可以添加弹窗显示详细信息
}

const scrollToNext = () => {
  const conceptSection = document.querySelector('.concept-section')
  conceptSection?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showNav.value = true
      } else {
        showNav.value = false
      }
    })

  }, {
    root: null,
    threshold: 0
  })

  if (sansuSection.value) {
    observer.observe(sansuSection.value)
  }

  const sections = document.querySelectorAll(".section")
  const navLinks = document.querySelectorAll(".page-nav a")

  const updateNav = () => {

    let current = ""

    sections.forEach(section => {

      const rect = section.getBoundingClientRect()

      if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
        current = section.id
      }

    })

    navLinks.forEach(link => {

      link.classList.remove("active")

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active")
      }

    })

  }

  window.addEventListener("scroll", updateNav)
  updateNav()

  const timeline = document.querySelector('.timeline')

  const updateTimeline = () => {

    const rect = timeline.getBoundingClientRect()
    const windowHeight = window.innerHeight

    const progress = Math.min(
      Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
      1
    )

    if (timelineProgress.value) {
      timelineProgress.value.style.height = progress * 100 + "%"
    }

  }

  window.addEventListener("scroll", updateTimeline)
  updateTimeline()

  const updatePageProgress = () => {

    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = scrollTop / docHeight
    if (pageProgress.value) {
      pageProgress.value.style.width = progress * 100 + "%"
    }
  }

  window.addEventListener("scroll", updatePageProgress)
  updatePageProgress()

})
</script>

<style scoped>
/* ====== 全局样式 ====== */
.sansu-page {
  background: #fff;
}

.section {
  padding: 100px 0;
}

.bg-light {
  background: var(--color-bg, #f4f1ea);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.section-title {
  font-family: var(--font-serif, serif);
  font-size: 2.5rem;
  color: var(--color-primary, #2E4057);
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 4px;
}

.section-title.white {
  color: #fff;
}

.section-subtitle {
  text-align: center;
  color: var(--color-text-light, #666);
  font-size: 1.1rem;
  margin-bottom: 60px;
}

/* ====== ① Hero区 ====== */
.hero-section {
  position: relative;
  height: 800px;
  width: 1200px;
  margin: 0 auto;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  height: 800px;
  inset: 0;
}

.hero-image {
  width: 100%;
  height: 800px;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  height: 800px;
  background: linear-gradient(135deg,
      rgba(46, 64, 87, 0.85) 0%,
      rgba(140, 98, 57, 0.75) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
}

.hero-title {
  font-family: var(--font-serif, serif);
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 700;
  letter-spacing: 16px;
  margin-bottom: 24px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.5rem;
  letter-spacing: 6px;
  margin-bottom: 60px;
  opacity: 0.95;
}

.scroll-hint {
  cursor: pointer;
  animation: bounce 2s infinite;
}

.scroll-hint span {
  font-size: 1rem;
  letter-spacing: 2px;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

/* ====== ② 概念区 ====== */
.concept-content {
  max-width: 800px;
  margin: 0 auto;
}

.concept-text {
  font-size: 1.1rem;
  line-height: 2;
  color: var(--color-text, #333);
  text-align: center;
}

.concept-image {
  margin-top: 40px;
  text-align: center;
}

.concept-image img {
  width: 100%;
  max-width: 700px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.concept-text p {
  margin: 8px 0;
}

.concept-text .highlight {
  font-size: 1.3rem;
  color: var(--color-accent, #C0392B);
  font-weight: 600;
  margin-top: 30px;
}

/* ====== ③ 人物关系 ====== */
.relationship-tree {
  max-width: 900px;
  margin: 0 auto;
}

.tree-structure {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.person-avatar {
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
}

.person-avatar img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.person-card {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s;
}

.person-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
}

.person-card.father {
  width: 400px;
}

.card-content h3 {
  font-family: var(--font-serif, serif);
  font-size: 1.8rem;
  color: var(--color-primary, #2E4057);
  margin-bottom: 12px;
}

.years {
  color: var(--color-text-light, #666);
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.title {
  color: var(--color-text, #333);
  font-size: 0.95rem;
  margin: 6px 0;
}

.desc {
  color: var(--color-text-light, #666);
  font-size: 0.9rem;
  margin: 12px 0;
}

.works {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.work-tag {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(46, 64, 87, 0.08);
  color: var(--color-primary, #2E4057);
  border-radius: 4px;
  font-size: 0.85rem;
}

.connection-lines {
  position: relative;
  width: 200px;
  height: 40px;
}

.line {
  position: absolute;
  top: 0;
  width: 2px;
  height: 40px;
  background: var(--color-primary, #2E4057);
}

.line-left {
  left: 25%;
}

.line-right {
  right: 25%;
}

.children {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}

.person-card.son {
  width: 350px;
}

/* ====== ④ 时间轴 ====== */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
}

.timeline-progress {
  position: absolute;
  left: 50%;
  top: 0;
  width: 4px;
  height: 0%;
  transform: translateX(-50%);
  background: linear-gradient(to bottom,
      #C0392B,
      #8C6239,
      #2E4057);
  z-index: 1;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  transform: translateX(-50%);
  background: linear-gradient(to bottom,
      #C0392B,
      #8C6239,
      #2E4057);
}

.timeline-item {
  position: relative;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
}

.timeline-item.left {
  justify-content: flex-end;
  padding-right: calc(50% + 40px);
}

.timeline-item.right {
  justify-content: flex-start;
  padding-left: calc(50% + 40px);
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  background: var(--color-accent, #C0392B);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(192, 57, 43, 0.7);
  animation: pulse 2s infinite;
  z-index: 2;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(192, 57, 43, 0.7);
  }

  70% {
    box-shadow: 0 0 0 15px rgba(192, 57, 43, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(192, 57, 43, 0);
  }
}

.year {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
}

.timeline-content {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 350px;
  transition: all 0.4s ease;
}

.timeline-content:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.timeline-content h3 {
  font-family: var(--font-serif, serif);
  color: var(--color-accent, #C0392B);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.timeline-content p {
  color: var(--color-text, #333);
  line-height: 1.8;
}

.person-tag {
  display: inline-block;
  margin-top: 12px;
  padding: 4px 12px;
  background: rgba(46, 64, 87, 0.08);
  color: var(--color-primary, #2E4057);
  border-radius: 4px;
  font-size: 0.85rem;
}

/* ====== ⑤ 三苏祠 ====== */
.shrine-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  font-size: 1.1rem;
  line-height: 2;
  color: var(--color-text, #333);
}

.buildings-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.building-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
}

.building-card:hover {
  transform: translateY(-8px);
}

.building-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.image-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  font-family: var(--font-serif, serif);
}

.building-info {
  padding: 24px;
}

.building-info h3 {
  font-family: var(--font-serif, serif);
  color: var(--color-primary, #2E4057);
  margin-bottom: 12px;
  font-size: 1.3rem;
}

.building-info p {
  color: var(--color-text, #333);
  line-height: 1.8;
}

/* ====== ⑥ 文化精神 ====== */
.video-box {
  max-width: 900px;
  margin: 40px auto;
}

.video-box video {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.spirit-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.spirit-card {
  text-align: center;
  padding: 40px 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s;
}

.spirit-card:hover {
  transform: translateY(-8px);
}

.spirit-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.spirit-card h3 {
  font-family: var(--font-serif, serif);
  color: var(--color-primary, #2E4057);
  margin-bottom: 16px;
  font-size: 1.3rem;
}

.spirit-card p {
  color: var(--color-text, #333);
  line-height: 1.8;
  font-size: 0.95rem;
}

/* ====== ⑦ 诗词互动 ====== */
.poem-section {
  position: relative;
  padding: 120px 0;
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.poem-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
      rgba(46, 64, 87, 0.95) 0%,
      rgba(140, 98, 57, 0.9) 100%);
}

.poem-interactive {
  position: relative;
  z-index: 2;
  text-align: center;
}

.poem-display {
  margin: 60px 0;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.poem-text {
  font-family: var(--font-serif, serif);
  font-size: 2rem;
  color: #fff;
  letter-spacing: 8px;
  line-height: 2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.generate-btn {
  padding: 16px 48px;
  background: var(--color-accent, #C0392B);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  letter-spacing: 4px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 20px rgba(192, 57, 43, 0.3);
}

.generate-btn:hover {
  background: #A93226;
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(192, 57, 43, 0.4);
}

/* ====== 响应式 ====== */
@media (max-width:1024px) {
  .hero-title {
    font-size: 2.5rem;
    letter-spacing: 8px;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    letter-spacing: 3px;
  }

  .section-title {
    font-size: 1.8rem;
    letter-spacing: 2px;
  }

  .person-card.father,
  .person-card.son {
    width: 100%;
  }

  .children {
    flex-direction: column;
    gap: 20px;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item.left,
  .timeline-item.right {
    padding-left: 60px;
    padding-right: 0;
  }

  .timeline-marker {
    left: 20px;
    width: 60px;
    height: 60px;
  }

  .buildings-grid {
    grid-template-columns: 1fr;
  }

  .spirit-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .poem-text {
    font-size: 1.3rem;
    letter-spacing: 4px;
  }
}

.image-viewer {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.viewer-img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
}

.page-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.progress-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg,
      #C0392B,
      #8C6239,
      #2E4057);
  transition: width 0.1s;
}

.page-nav {
  position: fixed;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 999;
}

.page-nav.show {
  opacity: 1;
  pointer-events: auto;
}

.page-nav a {
  display: block;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1px;
  color: #2E4057;
  transition: all .3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.page-nav a.active {
  background: #C0392B;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(192, 57, 43, 0.35);
}

.page-nav a:hover {
  transform: translateX(-6px);
  background: #C0392B;
  color: #fff;
  box-shadow: 0 6px 20px rgba(192, 57, 43, 0.35);
}

img {
  max-width: 100%;
  height: auto;
}

.body {
  background-color: #f4f1ea;
}
</style>