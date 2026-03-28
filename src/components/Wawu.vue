<template>
    <section id="wawu" class="wawu">
        <!-- ① 山水视觉引导区（Hero） -->
        <div class="hero-section">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <h1 class="hero-title">瓦屋山</h1>
                <p class="hero-subtitle">云海之巅 · 自然奇观</p>
                <div class="hero-description">
                    <p>瓦屋山位于眉山市洪雅县境内，是中国著名的山岳型自然景区之一。</p>
                    <p>瓦屋山以壮观的云海、原始森林和丰富的生态资源闻名，被誉为<strong>"中国最大的桌山"</strong>。</p>
                    <p>山顶地形平坦，如同巨大的屋顶，因此得名"瓦屋山"。</p>
                </div>
                <div class="scroll-hint">
                    <div class="scroll-arrow">↓</div>
                    <span>向下探索</span>
                </div>
            </div>
        </div>

        <!-- ② 瓦屋山地理介绍 -->
        <div class="geography-section">
            <div class="container">
                <h2 class="section-title">瓦屋山在哪里？</h2>
                <div class="geography-content">
                    <div class="geography-map">
                        <div id="amap-container" class="map-container">
                            <!-- 地图容器 -->
                            <div class="map-placeholder">
                                <p>瓦屋山位置</p>
                            </div>
                        </div>
                    </div>
                    <div class="geography-info">
                        <p>瓦屋山位于四川盆地西南边缘，属于邛崃山脉的一部分。</p>
                        <p>瓦屋山主峰海拔约<strong>2830米</strong>，山顶面积广阔，地势平坦，是世界罕见的大型桌山地貌。</p>
                        <p>这里地形复杂，气候多变，形成了丰富多样的自然景观。</p>
                        <div class="stats">
                            <div class="stat-item">
                                <span class="stat-number">2830m</span>
                                <span class="stat-label">主峰海拔</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">104km²</span>
                                <span class="stat-label">核心景区</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ③ 瓦屋山自然景观 -->
        <div class="landscape-section">
            <div class="container">
                <h2 class="section-title">瓦屋山自然景观</h2>
                <p class="section-description">
                    瓦屋山拥有壮观的自然景观。在晴朗的天气中，游客可以看到壮丽的云海景象；
                    冬季时，山顶常常被白雪覆盖，形成银装素裹的景色。
                </p>
                <div class="landscape-gallery">
                    <div class="landscape-item">
                        <div class="landscape-image cloud-sea"></div>
                        <h3>云海</h3>
                        <p>清晨时分，云雾在山间翻滚，形成壮观的云海奇观</p>
                    </div>
                    <div class="landscape-item">
                        <div class="landscape-image snow-scene"></div>
                        <h3>金顶</h3>
                        <p>冬季雪花纷飞，整个山峰银装素裹，宛如仙境</p>
                    </div>
                    <div class="landscape-item">
                        <div class="landscape-image forest"></div>
                        <h3>仙女湖</h3>
                        <p>原始森林覆盖山体，生态环境保存完好</p>
                    </div>
                    <div class="landscape-item">
                        <div class="landscape-image waterfall"></div>
                        <h3>索道</h3>
                        <p>高空缆车越群山，俯瞰峰峦壮阔景</p>
                    </div>
                    <div class="landscape-item">
                        <div class="landscape-image sunrise"></div>
                        <h3>森林</h3>
                        <p>站在山巅观赏日出，金光洒向大地</p>
                    </div>
                    <div class="landscape-item">
                        <div class="landscape-image table-mountain"></div>
                        <h3>桌山地貌</h3>
                        <p>平坦的山顶如巨大屋顶，地貌奇特罕见</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- ④ 瓦屋山生态系统 -->
        <div class="ecosystem-section">
            <div class="container">
                <h2 class="section-title">瓦屋山生态系统</h2>
                <p class="section-description">
                    瓦屋山拥有丰富的动植物资源，是中国重要的生态保护区域之一。
                    这里分布着大量珍稀植物，同时也是许多野生动物的栖息地。
                </p>
                <div class="ecosystem-cards">
                    <div class="eco-card">
                        <div class="eco-icon">🌲</div>
                        <h3>原始森林</h3>
                        <p>瓦屋山森林覆盖率极高，保存了大面积的原始森林。</p>
                        <ul>
                            <li>森林覆盖率：95%以上</li>
                            <li>古树参天，物种丰富</li>
                            <li>垂直植物带谱明显</li>
                        </ul>
                    </div>
                    <div class="eco-card">
                        <div class="eco-icon">🦋</div>
                        <h3>生物多样性</h3>
                        <p>这里拥有丰富的植物种类和野生动物资源。</p>
                        <ul>
                            <li>植物种类：3000+种</li>
                            <li>野生动物：400+种</li>
                            <li>珍稀保护动物众多</li>
                        </ul>
                    </div>
                    <div class="eco-card">
                        <div class="eco-icon">🛡️</div>
                        <h3>生态保护</h3>
                        <p>瓦屋山国家森林公园致力于保护自然生态环境。</p>
                        <ul>
                            <li>国家级自然保护区</li>
                            <li>严格的环境保护措施</li>
                            <li>科研监测体系完善</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- ⑤ 瓦屋山旅游文化 -->
        <div class="tourism-section">
            <div class="container">
                <h2 class="section-title">瓦屋山旅游文化</h2>
                <p class="section-description">
                    随着旅游业的发展，瓦屋山已经成为四川著名的旅游目的地。
                    每年都有大量游客前来观赏云海、登山探险和体验自然风光。
                </p>
                <div class="tourism-stats">
                    <div class="stat-chart">
                        <div id="visitor-chart" class="chart-container">
                            <!-- ECharts 图表容器 -->
                            <div class="chart-placeholder">
                                <div class="chart-bars">
                                    <div class="bar" style="height: 60%">2021</div>
                                    <div class="bar" style="height: 80%">2022</div>
                                    <div class="bar" style="height: 100%">2023</div>
                                    <div class="bar" style="height: 90%">2024</div>
                                </div>
                                <p>年度游客量趋势</p>
                            </div>
                        </div>
                    </div>
                    <div class="tourism-info">
                        <div class="info-grid">
                            <div class="info-item">
                                <span class="info-number">120万+</span>
                                <span class="info-label">年接待游客</span>
                            </div>
                            <div class="info-item">
                                <span class="info-number">4-10月</span>
                                <span class="info-label">最佳旅游季节</span>
                            </div>
                            <div class="info-item">
                                <span class="info-number">5-7小时</span>
                                <span class="info-label">推荐游览时间</span>
                            </div>
                            <div class="info-item">
                                <span class="info-number">AAAA级</span>
                                <span class="info-label">景区等级</span>
                            </div>
                        </div>
                        <div class="season-guide">
                            <h4>四季美景</h4>
                            <div class="seasons">
                                <span class="season spring">🌸 春季花海</span>
                                <span class="season summer">☀️ 夏季避暑</span>
                                <span class="season autumn">🍂 秋季红叶</span>
                                <span class="season winter">❄️ 冬季雪景</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'WawuMountain',
    data() {
        return {
            // 已删除 activeExplore 变量
        }
    },
    // 核心修改：合并所有方法到一个 methods 选项中
    methods: {
        // 已删除 setActiveExplore 方法
        // 地图初始化方法
        initMap() {
            // 这里可以集成高德地图 AMap
            console.log('地图初始化');
        },
        // 图表初始化方法
        initChart() {
            // 这里可以集成 ECharts
            console.log('图表初始化');
        }
    },
    mounted() {
        // 初始化地图和图表
        this.initMap();
        this.initChart();
    }
}
</script>

<style scoped>
/* 基础样式 */
.wawu {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #2c3e50;
    font-weight: 700;
}

.section-subtitle {
    text-align: center;
    color: #7f8c8d;
    font-size: 1.1rem;
    margin-bottom: 3rem;
}

.section-description {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    font-size: 1.1rem;
    color: #5d6d7e;
    line-height: 1.8;
}

/* ① Hero 区域 */
.hero-section {
    height: 800px;
    width: 1400px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-image: url('/wawushan.jpg');
    background-size: cover;
    background-position: center;
    z-index: -1;
}

.hero-content {
    max-width: 800px;
    padding: 0 20px;
    z-index: 1;
}

.hero-title {
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: 800;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    font-weight: 300;
}

.hero-description {
    margin-bottom: 3rem;
    opacity: 0.85;
}

.hero-description p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.scroll-hint {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: bounce 2s infinite;
}

.scroll-arrow {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-10px);
    }

    60% {
        transform: translateY(-5px);
    }
}

/* ② 地理介绍 */
.geography-section {
    padding: 100px 0;
    background: #f8f9fa;
}

.geography-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    margin-top: 3rem;
}

.map-container {
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.map-placeholder {
    height: 310px;
    background-image: url('/weizhi.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #6c757d;
}

.geography-info {
    font-size: 1.1rem;
    line-height: 1.8;
}

.stats {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: #3498db;
    margin-bottom: 0.5rem;
}

.stat-label {
    color: #7f8c8d;
    font-size: 0.9rem;
}

/* ③ 自然景观 */
.landscape-section {
    padding: 100px 0;
    background: white;
}

.landscape-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.landscape-item {
    text-align: center;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.landscape-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.landscape-image {
    height: 200px;
    /* 新增：图片适配样式，保证图片不拉伸、居中展示 */
    background-size: cover;
    /* 覆盖容器，保持比例 */
    background-position: center;
    /* 图片居中 */
    background-repeat: no-repeat;
    /* 禁止重复 */
    position: relative;

    /* 可选：添加半透明遮罩，让文字更清晰 */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        /* 黑色半透明遮罩，可调整透明度 */
    }
}

/* 景观图片背景 */
.cloud-sea {
    background-image: url('/yunhai.jpg');
    /* 云海图片 */
}

.snow-scene {
    background-image: url('/jinding.jpg');
    /* 金顶图片 */
}

.forest {
    background-image: url('/xiannvhu.jpg');
    /* 仙女湖图片 */
}

.waterfall {
    background-image: url('/suodao.jpg');
    /* 瀑布图片 */
}

.sunrise {
    background-image: url('/senglin.jpg');
    /* 森林图片 */
}

.table-mountain {
    background-image: url('/zhuomian.jpg');
    /* 桌山地貌图片 */
}

.landscape-item h3 {
    padding: 1.5rem 1rem 0.5rem;
    font-size: 1.3rem;
    color: #2c3e50;
    position: relative;
    /* 让文字在遮罩上层 */
    z-index: 1;
}

.landscape-item p {
    padding: 0 1rem 1.5rem;
    color: #7f8c8d;
    font-size: 0.95rem;
    position: relative;
    /* 让文字在遮罩上层 */
    z-index: 1;
}

/* ④ 生态系统 */
.ecosystem-section {
    padding: 100px 0;
    background: #f8f9fa;
}

.ecosystem-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.eco-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.eco-card:hover {
    transform: translateY(-5px);
}

.eco-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.eco-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
}

.eco-card ul {
    text-align: left;
    margin-top: 1rem;
    padding-left: 1rem;
}

.eco-card li {
    margin-bottom: 0.5rem;
    color: #7f8c8d;
}

/* ⑤ 旅游文化 */
.tourism-section {
    padding: 100px 0;
    background: white;
}

.tourism-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 3rem;
}

.chart-container {
    height: 300px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    background: white;
    padding: 2rem;
}

.chart-placeholder {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.chart-bars {
    display: flex;
    align-items: end;
    gap: 1rem;
    height: 150px;
    margin-bottom: 1rem;
}

.bar {
    width: 40px;
    background: #3498db;
    border-radius: 4px 4px 0 0;
    display: flex;
    align-items: end;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
}

.info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.info-item {
    text-align: center;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
}

.info-number {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #3498db;
    margin-bottom: 0.5rem;
}

.info-label {
    color: #7f8c8d;
    font-size: 0.9rem;
}

.season-guide h4 {
    margin-bottom: 1rem;
    color: #2c3e50;
}

.seasons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.season {
    padding: 0.5rem 1rem;
    background: #e9ecef;
    border-radius: 20px;
    font-size: 0.9rem;
    color: #495057;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .geography-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .tourism-stats {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .stats {
        justify-content: center;
    }

    .info-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .landscape-gallery {
        grid-template-columns: 1fr;
    }

    .ecosystem-cards {
        grid-template-columns: 1fr;
    }

    .section-title {
        font-size: 2rem;
    }

    .container {
        padding: 0 15px;
    }
}
</style>