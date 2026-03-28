<template>
  <section id="pickle" class="pickle">

    <!-- ① 泡菜文化引导区（Hero） -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">东坡泡菜</h1>
        <h2 class="hero-subtitle">千年风味 · 眉山记忆</h2>
        <div class="hero-description">
          <p>东坡泡菜是四川传统饮食文化的重要代表，也是<strong>眉山市</strong>极具特色的美食。</p>
          <p>相传北宋文学家<strong>苏轼</strong>在家乡生活时十分喜爱泡菜，因此眉山泡菜逐渐闻名。</p>
          <p>经过长期发展，这种传统腌制技艺成为四川饮食文化的重要组成部分。</p>
        </div>
      </div>
      <div class="pickle-jar-decoration">🏺</div>
    </div>

    <!-- ② 东坡泡菜的起源 -->
    <div class="origin-section">
      <div class="container">
        <div class="origin-content">
          <div class="origin-image">
            <div class="pickle-jar-large">🏺</div>
          </div>
          <div class="origin-text">
            <h2>东坡泡菜的起源</h2>
            <p><strong>眉山市</strong>地处四川盆地，气候温暖湿润，适宜蔬菜种植。</p>
            <p>古代人们为了延长蔬菜的保存时间，逐渐形成了腌制泡菜的传统。</p>
            <p>随着时间的推移，这种腌制方式不断发展，形成了独具特色的四川泡菜文化。</p>
            <p>据说<strong>苏轼</strong>在家乡生活时非常喜爱泡菜，因此得名东坡泡菜。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ③ 泡菜制作工艺（可视化流程） -->
    <div class="process-section">
      <div class="container">
        <h2 class="section-title">东坡泡菜制作工艺</h2>

        <!-- 流程可视化 -->
        <div class="process-steps">
          <div v-for="(step, index) in processSteps" :key="index" class="process-card"
            :class="{ active: activeStep === index }" @click="setActiveStep(index)">
            <div class="step-index">
              {{ index + 1 }}
            </div>
            <div class="step-name">
              {{ step.name }}
            </div>
            <div class="step-icon">
              {{ step.emoji }}
            </div>
          </div>
        </div>

        <!-- 步骤详情 -->
        <div class="step-details">
          <div class="step-card" v-if="activeStep !== -1">
            <h3>{{ processSteps[activeStep].name }}</h3>
            <p>{{ processSteps[activeStep].description }}</p>
            <div class="step-image">{{ processSteps[activeStep].emoji }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ⑤ 泡菜文化精神 -->
    <div class="culture-spirit-section">
      <div class="container">
        <h2 class="section-title">泡菜文化精神</h2>
        <div class="spirit-cards">
          <div class="spirit-card">
            <div class="card-icon">🍽️</div>
            <h3>饮食文化</h3>
            <p>泡菜体现了四川酸辣鲜香的饮食特点。</p>
          </div>
          <div class="spirit-card">
            <div class="card-icon">🧠</div>
            <h3>生活智慧</h3>
            <p>古人通过腌制技术解决食物保存问题。</p>
          </div>
          <div class="spirit-card">
            <div class="card-icon">🏛️</div>
            <h3>地域文化</h3>
            <p>东坡泡菜已成为眉山文化的重要象征。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ⑥ 泡菜坛互动体验 + 泡菜互动统计图表（数据库版） -->
    <div class="interactive-section">
      <div class="container">
        <h2 class="section-title">泡菜坛互动体验</h2>
        <p class="interactive-subtitle">点击泡菜坛探索风味</p>

        <div class="interactive-wrapper">
          <!-- 左侧：泡菜坛互动 -->
          <div class="interactive-left">
            <div class="interactive-jar" :class="{ 'shaking': isShaking }" @click="generateRandomPickle">
              🏺
            </div>

            <div class="generated-pickle" v-if="currentPickle">
              <div class="pickle-card">
                <div class="pickle-emoji">{{ currentPickle.emoji }}</div>
                <h3>{{ currentPickle.name }}</h3>
                <p>{{ currentPickle.description }}</p>
                <div class="pickle-details">
                  <span class="detail-item">盐比例: {{ currentPickle.salt_ratio }}%</span>
                  <span class="detail-item">发酵: {{ currentPickle.ferment_days }}天</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：数据库统计图表 -->
          <div class="interactive-right">
            <div class="chart-card">
              <h3>泡菜互动统计</h3>
              <div ref="pickleChart" class="chart-container"></div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import * as echarts from 'echarts'
import { ref, onMounted, nextTick } from 'vue'
import axios from 'axios'

// 🔥 唯一修改：配置云端接口（本地后端关闭，云端正常运行）
const request = axios.create({
  baseURL: 'https://lgq-meishanculture.netlify.app/.netlify/functions/api'
})

export default {
  name: 'PickleModule',
  setup() {
    const activeStep = ref(0)
    const isShaking = ref(false)
    const currentPickle = ref(null)
    const pickleChart = ref(null)
    let chartInstance = null

    // 制作工艺步骤
    const processSteps = [
      { name: '选菜', description: '选择新鲜蔬菜，如萝卜、青菜、豇豆等。', emoji: '🥬' },
      { name: '清洗', description: '将蔬菜清洗干净，去除泥土杂质。', emoji: '💧' },
      { name: '晾晒', description: '适当晾晒蔬菜，使其减少水分。', emoji: '☀️' },
      { name: '腌制', description: '将蔬菜加入盐、辣椒、花椒等调料，放入泡菜坛。', emoji: '🧂' },
      { name: '发酵', description: '经过一定时间发酵，形成独特酸辣风味。', emoji: '⏰' }
    ]

    // 泡菜类型数据
    const pickleTypes = [
      { name: '泡萝卜', description: '酸辣爽脆，是四川最常见的泡菜之一。', emoji: '🥕', salt_ratio: 5, ferment_days: 10 },
      { name: '泡豇豆', description: '味道浓郁，常用于炒菜或配饭。', emoji: '🫘', salt_ratio: 4, ferment_days: 7 },
      { name: '泡辣椒', description: '辣味十足，是四川菜重要调料。', emoji: '🌶️', salt_ratio: 6, ferment_days: 5 },
      { name: '泡白菜', description: '酸味柔和，清爽开胃。', emoji: '🥬', salt_ratio: 4, ferment_days: 5 },
      { name: '泡姜', description: '辛香独特，常用于凉菜。', emoji: '🫚', salt_ratio: 7, ferment_days: 15 },
      { name: '泡黄瓜', description: '清脆爽口，夏日开胃首选。', emoji: '🥒', salt_ratio: 3, ferment_days: 7 }
    ]

    // 切换制作步骤
    const setActiveStep = (index) => {
      activeStep.value = index
    }

    // 保存数据到数据库（逻辑完全不变）
    const savePickleToDB = async (pickle) => {
      try {
        await request.post('/save-pickle', {
          name: pickle.name,
          salt_ratio: pickle.salt_ratio,
          ferment_days: pickle.ferment_days
        })
        loadChartData()
      } catch (err) {
        console.log('保存失败', err)
      }
    }

    // 随机生成泡菜 + 存库（逻辑完全不变）
    const generateRandomPickle = () => {
      isShaking.value = true
      setTimeout(() => {
        isShaking.value = false
        const randomIndex = Math.floor(Math.random() * pickleTypes.length)
        currentPickle.value = pickleTypes[randomIndex]
        savePickleToDB(currentPickle.value)
      }, 500)
    }

    // 从数据库加载图表数据（逻辑完全不变）
    const loadChartData = async () => {
      try {
        const res = await request.get('/pickle-stats')
        const { names, counts } = res.data.data

        chartInstance.setOption({
          xAxis: { data: names },
          series: [{ data: counts }]
        })
      } catch (err) {
        console.log('获取图表数据失败')
      }
    }

    // 初始化图表
    const initPickleChart = () => {
      if (!pickleChart.value) return
      chartInstance = echarts.init(pickleChart.value)
      const option = {
        title: { text: '泡菜食材受欢迎程度', left: 'center', textStyle: { fontSize: 16, fontWeight: 'bold' } },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        grid: { left: '5%', right: '5%', bottom: '5%', containLabel: true },
        xAxis: { type: 'category', data: [], axisLabel: { fontSize: 10 } },
        yAxis: { type: 'value', name: '互动次数', axisLabel: { fontSize: 10 } },
        series: [{
          name: '次数', type: 'bar', data: [],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#ff6b6b' },
              { offset: 1, color: '#ff4757' }
            ])
          },
          barWidth: '50%'
        }]
      }
      chartInstance.setOption(option)
      loadChartData()
      window.addEventListener('resize', () => chartInstance.resize())
    }

    onMounted(() => {
      nextTick(() => {
        initPickleChart()
      })
    })

    return {
      activeStep,
      isShaking,
      currentPickle,
      pickleChart,
      processSteps,
      pickleTypes,
      setActiveStep,
      generateRandomPickle
    }
  }
}
</script>

<style scoped>
.pickle {
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  background: url('/pickle-bg.jpg') center/cover no-repeat;
  color: white;
  padding: 120px 20px;
  text-align: center;
  overflow: hidden;
}

.hero-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.95;
}

.pickle-jar-decoration {
  position: absolute;
  top: 50%;
  right: 10%;
  font-size: 8rem;
  opacity: 0.1;
  transform: translateY(-50%);
}

/* Origin Section */
.origin-section {
  padding: 100px 20px;
  background: white;
}

.container {
  max-width: 1500px;
  margin: 0 auto;
}

.origin-content {
  display: flex;
  align-items: center;
  gap: 80px;
  flex-wrap: wrap;
}

.origin-image {
  flex: 1;
  text-align: center;
  min-width: 300px;
}

.pickle-jar-large {
  font-size: 12rem;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
}

.origin-text {
  flex: 2;
  min-width: 400px;
}

.origin-text h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
}

.origin-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #555;
}

/* Process Section */
.process-section {
  padding: 100px 20px;
  background: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: 2.6rem;
  margin-bottom: 60px;
  color: #222;
  font-weight: 700;
  letter-spacing: 1px;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  margin-bottom: 70px;
}

.process-card {
  background: white;
  border-radius: 20px;
  padding: 25px 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.35s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  position: relative;
}

.process-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
}

.process-card.active {
  background: linear-gradient(135deg, #ff6b6b, #ff4757);
  color: white;
}

.step-index {
  width: 45px;
  height: 45px;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.process-card.active .step-index {
  background: rgba(255, 255, 255, 0.25);
}

.step-name {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.step-icon {
  font-size: 1.8rem;
}

.step-details {
  text-align: center;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-card {
  background: white;
  padding: 50px;
  border-radius: 25px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  transition: all 0.3s;
}

.step-card h3 {
  font-size: 2rem;
  color: #ff4757;
  margin-bottom: 20px;
}

.step-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
}

.step-image {
  font-size: 3rem;
}

/* Culture Spirit Section */
.culture-spirit-section {
  padding: 100px 20px;
  background: #f8f9fa;
}

.spirit-cards {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.spirit-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30 rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1;
  max-width: 300px;
  min-width: 250px;
  transition: all 0.3s ease;
}

.spirit-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.spirit-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.spirit-card p {
  color: #555;
  line-height: 1.6;
}

/* 交互区域样式 */
.interactive-section {
  padding: 40px 0;
  width: 1400px;
  margin: 0 auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  border-radius: 15px;
}

.interactive-subtitle {
  font-size: 1rem;
  margin-bottom: 20px;
}

.interactive-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
}

.interactive-left {
  flex: 0 0 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.interactive-right {
  flex: 0 0 480px;
}

.interactive-jar {
  font-size: 5.5rem;
  cursor: pointer;
  animation: floatJar 3s ease-in-out infinite;
  transition: all 0.3s ease;
}

.interactive-jar:hover {
  transform: scale(1.1);
}

.interactive-jar.shaking {
  animation: shake 0.5s ease-in-out;
}

.generated-pickle {
  margin-top: 20px;
  animation: fadeInUp 0.5s ease-out;
}

.pickle-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  padding: 25px 30px;
  border-radius: 15px;
  width: 100%;
}

.pickle-emoji {
  font-size: 3.2rem;
  margin-bottom: 10px;
}

.pickle-card h3 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.pickle-card p {
  font-size: 1rem;
  margin-bottom: 10px;
}

.pickle-details {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.detail-item {
  padding: 4px 10px;
  font-size: 0.8rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.25);
}

.chart-card {
  padding: 20px 25px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.7);
}

.chart-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
}

.chart-container {
  height: 260px;
  width: 100%;
}

/* 动画 */
@keyframes floatJar {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes shake {

  0%,
  100% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-3deg);
  }

  75% {
    transform: rotate(3deg);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .interactive-wrapper {
    flex-direction: column;
    gap: 20px;
  }

  .hero-section {
    width: 100%;
  }
}
</style>