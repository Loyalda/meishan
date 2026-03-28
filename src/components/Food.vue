<template>
    <div class="meishan-food">
        <!-- 1. 美食视觉引导区（Hero） -->
        <section class="food-hero" id="food">
            <div class="hero-bg">
                <img class="hero-bg-base" src="/meizhou.jpg" alt="眉山全景" loading="lazy" />
                <div class="hero-food-collage">
                    <img src="/dongpozhouzi.jpg" alt="东坡肘子" class="collage-item item1" loading="lazy" />
                    <img src="/dongporou.jpg" alt="东坡肉" class="collage-item item2" loading="lazy" />
                    <img src="/dongba.jpg" alt="丹棱冻粑" class="collage-item item3" loading="lazy" />
                    <img src="/liaoge.jpg" alt="泡椒兔" class="collage-item item4" loading="lazy" />
                </div>
                <div class="hero-mask"></div>
            </div>
            <div class="hero-content">
                <h1 class="hero-title">眉山美食</h1>
                <h2 class="hero-subtitle">东坡风味 · 四川味道</h2>
                <p class="hero-desc">
                    眉山市，不仅是东坡故里、诗书之城，更藏着川菜的「味魂」。<br />
                    当地饮食融川蜀麻辣鲜香之精髓，承东坡千年饮食之智慧，从殿堂名菜到市井小吃，每一味都是独属于眉山的味觉记忆。
                </p>
                <button class="hero-btn" @click="scrollToSection('food-culture')">
                    探索眉山味道
                </button>
                <div class="flavor-tags">
                    <span class="tag">麻</span>
                    <span class="tag">辣</span>
                    <span class="tag">鲜</span>
                    <span class="tag">香</span>
                </div>
            </div>
        </section>

        <!-- 2. 眉山饮食文化（聚焦东坡肘子） -->
        <section id="food-culture" class="food-culture">
            <div class="container">
                <h2 class="section-title">眉山饮食文化 · 东坡肘子</h2>
                <div class="culture-content">
                    <div class="culture-img-wrapper">
                        <img src="/dongpozhouzi.jpg" alt="东坡肘子" class="culture-img" loading="lazy"
                            @click="openImagePopup('/dongpozhouzi.jpg', '东坡肘子')" style="cursor: zoom-in;" />
                        <div class="img-label">眉山非遗 · 东坡肘子</div>
                    </div>
                    <div class="culture-desc-wrapper">
                        <p class="culture-desc">
                            东坡肘子，作为眉山最具代表性的名菜，是北宋大文豪苏轼留给家乡最珍贵的味觉遗产。<br />
                            不同于普通卤肘，眉山东坡肘子以「慢火煨炖、冰糖提鲜、豆瓣增香」为核心，历经千年传承，早已从一道家常菜升格为眉山饮食文化的核心符号，更是宴席之上「无肘不成席」的待客之尊。
                        </p>
                        <div class="culture-highlights">
                            <div class="highlight-card">
                                <h4 class="highlight-title">历史渊源</h4>
                                <p class="highlight-text">
                                    相传苏轼被贬黄州时，就地取材改良猪肘烹制方法，后归蜀将此法带回眉山。《东坡志林》中记载其「慢着火，少着水，火候足时它自美」，成为东坡肘子的烹饪圭臬。
                                </p>
                            </div>
                            <div class="highlight-card">
                                <h4 class="highlight-title">制作工艺</h4>
                                <p class="highlight-text">
                                    精选眉山本地黑猪前肘，经焯水去血、冰糖炒色、豆瓣爆香，加入姜葱料酒，砂锅慢煨3小时以上，直至肉质酥烂脱骨，肥膘化为油脂融入汤汁，红亮浓郁、肥而不腻。
                                </p>
                            </div>
                            <div class="highlight-card">
                                <h4 class="highlight-title">文化意义</h4>
                                <p class="highlight-text">
                                    如今东坡肘子已列入眉山非物质文化遗产，不仅是川菜经典，更是东坡文化的具象表达。每年东坡文化节，眉山都会举办「东坡肘大赛」，传承这道千年名菜的技艺与精神。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. 特色美食展示 -->
        <section class="food-special">
            <div class="container">
                <h2 class="section-title">核心特色美食</h2>
                <div class="special-list">
                    <div class="food-card" @mouseenter="handleCardHover($event)" @mouseleave="handleCardLeave($event)">
                        <div class="card-img-wrapper" @click="openImagePopup('/dongpozhouzi.jpg', '东坡肘子')">
                            <img src="/dongpozhouzi.jpg" alt="东坡肘子" class="card-img" loading="lazy" />
                            <div class="card-mask">点击查看详情</div>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">东坡肘子</h3>
                            <p class="card-tag">关联人物：苏轼</p>
                            <p class="card-desc">
                                四川经典名菜，源起北宋苏轼的饮食智慧。精选猪肘以慢火煨炖数小时，肉质酥烂脱骨、肥而不腻，汤汁红亮浓郁。如今已是眉山东坡文化的味觉符号，宴席之上，无肘不成席。
                            </p>
                        </div>
                    </div>
                    <div class="food-card" @mouseenter="handleCardHover($event)" @mouseleave="handleCardLeave($event)">
                        <div class="card-img-wrapper" @click="openImagePopup('/dongporou.jpg', '东坡肉')">
                            <img src="/dongporou.jpg" alt="东坡肉" class="card-img" loading="lazy" />
                            <div class="card-mask">点击查看详情</div>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">东坡肉</h3>
                            <p class="card-tag">关联人物：苏轼</p>
                            <p class="card-desc">
                                由苏轼改良的传世名菜，以五花肉为料，经焖煮收汁而成。入口即化，咸甜相宜，不仅是舌尖之味，更藏着苏轼「人间有味是清欢」的豁达。
                            </p>
                        </div>
                    </div>
                    <div class="food-card" @mouseenter="handleCardHover($event)" @mouseleave="handleCardLeave($event)">
                        <div class="card-img-wrapper" @click="openImagePopup('/dongba.jpg', '丹棱冻粑')">
                            <img src="/dongba.jpg" alt="丹棱冻粑" class="card-img" loading="lazy" />
                            <div class="card-mask">点击查看详情</div>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">丹棱冻粑</h3>
                            <p class="card-tag">产地：丹棱县</p>
                            <p class="card-desc">
                                丹棱非遗小吃，以本地糯米、红糖手工蒸制，口感软糯香甜、绵密不粘。在当地节庆、婚宴中，冻粑是「团圆幸福」的象征，咬一口，满是川南的甜糯。
                            </p>
                        </div>
                    </div>
                    <div class="food-card" @mouseenter="handleCardHover($event)" @mouseleave="handleCardLeave($event)">
                        <div class="card-img-wrapper" @click="openImagePopup('/liaoge.jpg', '泡椒兔')">
                            <img src="/liaoge.jpg" alt="泡椒兔" class="card-img" loading="lazy" />
                            <div class="card-mask">点击查看详情</div>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">泡椒兔</h3>
                            <p class="card-tag">市井经典</p>
                            <p class="card-desc">
                                眉山人最爱的市井味！鲜嫩兔肉搭配本地发酵泡椒猛火爆炒，酸辣鲜香直冲鼻腔，麻、辣、鲜、香层层递进，一口尝尽川蜀江湖味。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 4. 柳江古镇特色美食 -->
        <section class="food-oldtown">
            <div class="container">
                <h2 class="section-title">柳江古镇特色美食</h2>
                <div class="oldtown-list">
                    <div class="oldtown-card">
                        <img src="/chaoyecai.jpg" alt="炒野菜（竹叶菜）" class="oldtown-img" loading="lazy"
                            @click="openImagePopup('/chaoyecai.jpg', '炒野菜（竹叶菜）')" style="cursor: zoom-in;" />
                        <div class="oldtown-content">
                            <h3 class="oldtown-title">炒野菜（竹叶菜）</h3>
                            <p class="oldtown-desc">
                                柳江古镇「山林之味」，采自竹林的野生竹叶菜，仅以清油、蒜末简单翻炒，保留野菜的清甜与脆嫩，一口尝尽自然本味。
                            </p>
                        </div>
                    </div>
                    <div class="oldtown-card">
                        <img src="/foshouqiezi.jpg" alt="佛手茄子" class="oldtown-img" loading="lazy"
                            @click="openImagePopup('/foshouqiezi.jpg', '佛手茄子')" style="cursor: zoom-in;" />
                        <div class="oldtown-content">
                            <h3 class="oldtown-title">佛手茄子</h3>
                            <p class="oldtown-desc">
                                古镇独创家常菜！茄子改刀成佛手状，油炸至金黄酥脆，再淋上秘制豆瓣酱汁，外酥内软，咸香微辣，是餐馆必点的「下饭神器」。
                            </p>
                        </div>
                    </div>
                    <div class="oldtown-card">
                        <img src="/huoxiangyu.jpg" alt="藿香鱼" class="oldtown-img" loading="lazy"
                            @click="openImagePopup('/huoxiangyu.jpg', '藿香鱼')" style="cursor: zoom-in;" />
                        <div class="oldtown-content">
                            <h3 class="oldtown-title">藿香鱼</h3>
                            <p class="oldtown-desc">
                                柳江古镇味觉代表！新鲜河鱼搭配本地藿香烹制，鱼肉细嫩无腥，藿香味浓，鲜而不腻，是川南水乡独有的味道。
                            </p>
                        </div>
                    </div>
                    <div class="oldtown-card">
                        <img src="/mijiu.jpg" alt="古镇米酒" class="oldtown-img" loading="lazy"
                            @click="openImagePopup('/mijiu.jpg', '古镇米酒')" style="cursor: zoom-in;" />
                        <div class="oldtown-content">
                            <h3 class="oldtown-title">古镇米酒</h3>
                            <p class="oldtown-desc">
                                柳江古镇「软饮之选」，居民以本地水果手工酿制成米酒，猕猴桃酒酸甜、玫瑰酒清香、杨梅酒醇厚，度数低、口感甜，是游客打卡的必尝风味。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. 眉山美食地图 -->
        <section class="food-map">
            <div class="container">
                <h2 class="section-title">眉山美食地图</h2>
                <div class="map-controls">
                    <button class="filter-btn" :class="{ active: activeFilter === 'all' }"
                        @click="filterShop('all')">全部</button>
                    <button class="filter-btn" :class="{ active: activeFilter === 'dongpo' }"
                        @click="filterShop('dongpo')">东坡菜</button>
                    <button class="filter-btn" :class="{ active: activeFilter === 'oldtown' }"
                        @click="filterShop('oldtown')">古镇菜</button>
                    <button class="filter-btn" :class="{ active: activeFilter === 'street' }"
                        @click="filterShop('street')">市井小吃</button>
                </div>
                <div ref="mapContainerRef" class="map-container"></div>
                <div class="shop-popup" v-if="showShopPopup">
                    <div class="popup-close" @click="showShopPopup = false">×</div>
                    <img :src="currentShop.dishImg" alt="店铺招牌菜" class="popup-img" />
                    <h3 class="popup-title">{{ currentShop.name }}</h3>
                    <p class="popup-score">评分：{{ currentShop.score }}分</p>
                    <p class="popup-address">地址：{{ currentShop.address }}</p>
                    <p class="popup-price">人均：{{ currentShop.price }}元</p>
                    <div class="popup-btns">
                        <button class="popup-btn nav-btn" @click="navigateToShop">导航到店</button>
                        <button class="popup-btn collect-btn" @click="openReviewPopup">用户评价</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. 美食互动推荐 -->
        <section class="food-rank">
            <div class="container">
                <h2 class="section-title">美食排行榜</h2>
                <div class="rank-content">
                    <div class="rank-chart">
                        <h3 class="chart-title">热门店铺评分</h3>
                        <div id="rank-chart" class="chart-container"></div>
                        <button class="chart-switch" @click="switchChartType">查看评分趋势</button>
                    </div>
                    <div class="category-chart">
                        <h3 class="chart-title">美食品类分布</h3>
                        <div id="category-chart" class="chart-container"></div>
                    </div>
                </div>

                <!-- 🔥 改造后：用户打卡墙（上传+轮播 一页4张） -->
                <div class="checkin-wall">
                    <h3 class="wall-title">用户打卡墙</h3>

                    <!-- 上传按钮 -->
                    <div class="checkin-upload">
                        <label for="checkin-upload" class="upload-btn">📸 点击打卡上传图片</label>
                        <input type="file" id="checkin-upload" accept="image/*" @change="handleUpload"
                            style="display: none">
                        <p v-if="selectedShopId" class="upload-tip">当前打卡店铺：{{ currentShop.name }}</p>
                        <p v-else class="upload-tip">👉 请先在地图上点击店铺，再打卡上传~</p>
                    </div>

                    <!-- 轮播图容器 -->
                    <div class="carousel-container">
                        <button class="carousel-btn prev" @click="prevPage" :disabled="currentPage === 0">‹</button>
                        <div class="carousel-images">
                            <div v-for="img in currentImages" :key="img.id" class="checkin-item">
                                <!-- 🔥 修复：图片路径语法错误 -->
                                <img :src="img.image_url" :alt="img.shop_name" class="wall-img" loading="lazy"
                                    @click="openImagePopup(img.image_url, img.shop_name)">
                                <p class="checkin-desc">{{ img.shop_name }}</p>
                            </div>
                        </div>
                        <button class="carousel-btn next" @click="nextPage"
                            :disabled="currentPage >= totalPages - 1">›</button>
                    </div>

                    <!-- 分页指示器 -->
                    <div class="carousel-dots">
                        <span v-for="(_, idx) in totalPages" :key="idx" class="dot"
                            :class="{ active: currentPage === idx }" @click="currentPage = idx"></span>
                    </div>
                </div>
            </div>
        </section>

        <!-- 图片弹窗组件 -->
        <div class="image-popup" v-if="showImagePopup" @click.self="closeImagePopup">
            <div class="popup-close" @click="closeImagePopup">×</div>
            <div class="popup-content">
                <h4 class="popup-title">{{ popupTitle }}</h4>
                <img :src="popupImageSrc" alt="popupTitle" class="popup-img" />
            </div>
        </div>

        <!-- 用户评价弹窗 -->
        <div class="review-popup" v-if="showReviewPopup" @click.self="closeReviewPopup">
            <div class="review-content">
                <h3>评价「{{ currentShop.name }}」</h3>
                <div class="review-score">
                    <span>评分：</span>
                    <div class="stars">
                        <span v-for="i in 5" :key="i" :class="{ active: i <= reviewScore }"
                            @click="reviewScore = i">★</span>
                    </div>
                </div>
                <textarea v-model="reviewContent" placeholder="分享你的用餐体验~" rows="4"></textarea>
                <div class="review-btns">
                    <button class="btn-cancel" @click="closeReviewPopup">取消</button>
                    <button class="btn-submit" @click="submitReview">提交评价</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue';
import * as echarts from 'echarts';
// 🔥 替换：移除axios，引入Supabase
import { supabase } from '@/supabase';

// 地图容器 ref
const mapContainerRef = ref(null);

// 卡片悬浮效果
const handleCardHover = (e) => {
    e.currentTarget.classList.add('card-hover');
};
const handleCardLeave = (e) => {
    e.currentTarget.classList.remove('card-hover');
};

// 滚动到指定区域
const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
};

// 美食地图相关
const showShopPopup = ref(false);
const currentShop = ref({ name: '', score: 0, address: '', price: 0, dishImg: '' });
const activeFilter = ref('all');
let mapInstance = null;
let allShopMarkers = [];

// 店铺数据（从数据库动态获取）
const shopList = ref([]);

// ==================== 评分趋势图 数据库动态数据 ====================
const trendData = ref([]);
const trendDates = ref([]);

// 🔥 修复：Supabase获取趋势数据
const fetchTrendData = async () => {
    try {
        const { data, error } = await supabase.from('food_score_trend').select('*');
        if (error) throw error;
        if (data.length > 0) {
            trendDates.value = data[0].dates;
            trendData.value = data[0].trend;
        }
    } catch (err) {
        console.error('获取趋势数据失败:', err);
    }
};

// 店铺固定颜色映射
const getShopColor = (name) => {
    const colorMap = {
        '稻花香土菜馆': '#4A90E2',
        '孔氏藤椒鸭': '#52C41A',
        '东坡十碗菜': '#FA8C16',
        '廖哥泡椒兔': '#722ED1',
        '史玉华串串制造厂': '#8B4513'
    };
    return colorMap[name] || '#999';
};
// =================================================================

// ==================== 评价功能 ====================
const showReviewPopup = ref(false);
const reviewScore = ref(5);
const reviewContent = ref('');

// 打开评价弹窗
const openReviewPopup = () => {
    showReviewPopup.value = true;
    reviewScore.value = 5;
    reviewContent.value = '';
};
// 关闭评价弹窗
const closeReviewPopup = () => {
    showReviewPopup.value = false;
};

// 🔥 修复：Supabase提交评价
const submitReview = async () => {
    if (!reviewScore.value) {
        alert('请选择评分！');
        return;
    }

    try {
        const { error } = await supabase.from('food_reviews').insert([{
            shop_id: currentShop.value.id,
            score: reviewScore.value,
            content: reviewContent.value,
            created_at: new Date()
        }]);

        if (error) throw error;
        alert('✅ 评价提交成功！评分+趋势已实时更新');
        closeReviewPopup();
        showShopPopup.value = false;

        // 同步刷新数据
        await fetchShopScores();
        await fetchTrendData();
        initCharts();
    } catch (err) {
        console.error('提交失败：', err);
        alert('❌ 提交失败，请检查Supabase配置');
    }
};

// 🔥 修复：Supabase获取店铺数据
const fetchShopScores = async () => {
    try {
        const { data, error } = await supabase.from('food_shops').select('*');
        if (error) throw error;

        const baseShops = [
            { id: 1, name: '东坡十碗菜', lng: 103.841255, lat: 30.043182, price: 46, address: '眉山市东坡区大东街108号', dishImg: '/shiwancai.jpg', type: 'dongpo' },
            { id: 2, name: '稻花香土菜馆', lng: 103.233329, lat: 29.713058, price: 46, address: '眉山市洪雅县玉屏南街香榭丽酒店王府店旁边', dishImg: '/daohuaxiang.jpg', type: 'oldtown' },
            { id: 3, name: '廖哥泡椒兔', lng: 103.846116, lat: 30.042743, price: 49, address: '眉山市东坡区文学街89号', dishImg: '/paojiaotu.jpg', type: 'street' },
            { id: 4, name: '孔氏藤椒鸭', lng: 103.233774, lat: 29.717312, price: 39, address: '眉山市洪雅县柳坝路9号', dishImg: '/tengjiaoya.jpg', type: 'dongpo' },
            { id: 5, name: '史玉华串串制造厂', lng: 103.84394, lat: 29.82398, price: 40, address: '眉山市青神县外南街108号', dishImg: '/shiyuhua.jpg', type: 'street' },
        ];

        shopList.value = baseShops.map(shop => {
            const dbData = data.find(item => item.id === shop.id) || { score: 4.5 };
            return { ...shop, score: dbData.score };
        }).sort((a, b) => b.score - a.score);

    } catch (err) {
        console.error(err);
        alert('获取店铺数据失败');
    }
};
// ==============================================================

// 🔥 用户打卡轮播功能
const checkinImages = ref([]);
const currentPage = ref(0);
const pageSize = 4;
const selectedShopId = ref(null);

// 🔥 修复：Supabase获取打卡图片
const fetchCheckins = async () => {
    try {
        const { data, error } = await supabase.from('food_checkins').select('*');
        if (error) throw error;
        checkinImages.value = data;
    } catch (err) {
        console.error('获取打卡数据失败', err);
    }
};

// 🔥 修复：Supabase上传打卡图片
const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (!selectedShopId.value) {
        alert('请先在地图上选择要打卡的店铺！');
        return;
    }

    try {
        // 上传图片到Supabase存储
        const fileName = `${Date.now()}-${file.name}`;
        const { error: uploadError } = await supabase.storage
            .from('food-checkins')
            .upload(fileName, file);

        if (uploadError) throw uploadError;

        // 获取公开URL
        const { data: urlData } = supabase.storage
            .from('food-checkins')
            .getPublicUrl(fileName);

        // 保存打卡记录
        const { error } = await supabase.from('food_checkins').insert([{
            shop_id: selectedShopId.value,
            shop_name: currentShop.value.name,
            image_url: urlData.publicUrl,
            created_at: new Date()
        }]);

        if (error) throw error;
        alert('✅ 打卡成功！');
        fetchCheckins();
        event.target.value = '';
    } catch (err) {
        console.error('上传失败', err);
        alert('❌ 上传失败，请重试');
    }
};

// 轮播计算属性
const totalPages = computed(() => Math.ceil(checkinImages.value.length / pageSize));
const currentImages = computed(() => {
    const start = currentPage.value * pageSize;
    return checkinImages.value.slice(start, start + pageSize);
});

// 翻页
const nextPage = () => {
    if (currentPage.value < totalPages.value - 1) currentPage.value++;
};
const prevPage = () => {
    if (currentPage.value > 0) currentPage.value--;
};

// 筛选店铺
const filterShop = (type) => {
    activeFilter.value = type;
    const filtered = type === 'all' ? shopList.value : shopList.value.filter(s => s.type === type);
    createShopMarkers(filtered);
};

// 创建店铺标注
const createShopMarkers = (shops) => {
    if (!mapInstance) return;
    if (allShopMarkers.length > 0) {
        mapInstance.remove(allShopMarkers);
        allShopMarkers = [];
    }
    shops.forEach(shop => {
        const marker = new window.AMap.Marker({
            position: [shop.lng, shop.lat],
            map: mapInstance,
            title: shop.name,
            clickable: true,
            icon: new window.AMap.Icon({
                size: new window.AMap.Size(32, 32),
                image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
                imageSize: new window.AMap.Size(32, 32)
            })
        });
        marker.on('click', () => {
            currentShop.value = shop;
            selectedShopId.value = shop.id;
            showShopPopup.value = true;
        });
        allShopMarkers.push(marker);
    });
    mapInstance.setFitView(allShopMarkers);
};

// 加载高德地图脚本
const loadAmapScript = (key) => {
    return new Promise((resolve, reject) => {
        if (window.AMap) return resolve();
        const script = document.createElement('script');
        script.src = `https://webapi.amap.com/maps?v=2.0&key=${key}&plugin=AMap.ToolBar,AMap.Scale`;
        script.onload = resolve;
        script.onerror = () => reject(new Error('高德地图脚本加载失败'));
        document.head.appendChild(script);
    });
};

// 地图初始化
const initMap = async () => {
    const amapKey = '6d06967c564a8c1daa62f5ff8fe18998';
    const securityJsCode = '1b07ca3e1b3469a2aced1fd4c05f1c83';
    window._AMapSecurityConfig = { securityJsCode };

    const mapContainer = mapContainerRef.value;
    if (!mapContainer) {
        console.error('地图容器未找到');
        return;
    }

    try {
        await loadAmapScript(amapKey);
        mapInstance = new window.AMap.Map(mapContainer, {
            zoom: 10,
            center: [103.8657, 30.098],
            resizeEnable: true,
            scrollWheel: true,
            showLabel: true
        });

        createShopMarkers(shopList.value);

        window.AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], () => {
            mapInstance.addControl(new window.AMap.ToolBar({ position: { right: '20px', top: '110px' } }));
            mapInstance.addControl(new window.AMap.Scale({ position: { left: '20px', bottom: '20px' } }));
        });

        setTimeout(() => mapInstance.resize(), 300);
        console.log('✅ 地图初始化成功');
    } catch (error) {
        console.error('❌ 地图初始化失败：', error);
        if (mapContainer) {
            mapContainer.innerHTML = '<div style="padding:20px;text-align:center;color:#999;">地图加载失败，请检查网络或 API Key</div>';
        }
    }
};

// 排行榜图表
let rankChart = null;
let categoryChart = null;
const chartType = ref('rank');

const switchChartType = () => {
    chartType.value = chartType.value === 'rank' ? 'trend' : 'rank';
    initCharts();
};

// 初始化图表
const initCharts = () => {
    if (rankChart) rankChart.dispose();
    if (categoryChart) categoryChart.dispose();

    const rankDom = document.getElementById('rank-chart');
    if (rankDom) {
        rankChart = echarts.init(rankDom);
        const names = shopList.value.map(item => item.name);
        const scores = shopList.value.map(item => item.score);

        const rankOption = chartType.value === 'rank' ? {
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, formatter: '{b}<br/>{a}: {c}分' },
            grid: { left: '10%', right: '5%', bottom: '10%', top: '10%', containLabel: true },
            xAxis: { type: 'value', max: 5, axisLabel: { formatter: '{value}分' } },
            yAxis: { type: 'category', data: names, axisLabel: { fontSize: 12 } },
            series: [{
                name: '店铺评分', type: 'bar',
                data: scores,
                itemStyle: { color: (p) => ['#FF8C00', '#E64A19', '#FF5722', '#607D8B', '#795548'][p.dataIndex], borderRadius: [0, 5, 5, 0] },
                label: { show: true, position: 'right', formatter: '{c}分' }
            }]
        } : {
            tooltip: {
                trigger: 'axis',
                formatter: (params) => {
                    let result = params[0].axisValue + '<br/>';
                    params.forEach(item => {
                        result += `${item.seriesName}: ${item.data}分<br/>`;
                    });
                    return result;
                }
            },
            grid: { left: '10%', right: '5%', bottom: '15%', top: '10%', containLabel: true },
            xAxis: {
                type: 'category',
                data: trendDates.value,
                axisLabel: { fontSize: 12 }
            },
            yAxis: {
                type: 'value',
                min: 3,
                max: 5,
                axisLabel: { formatter: '{value}分' }
            },
            series: trendData.value.map(shop => ({
                name: shop.name,
                type: 'line',
                data: shop.data,
                smooth: true,
                itemStyle: { color: getShopColor(shop.name) },
                lineStyle: { color: getShopColor(shop.name) },
                symbol: 'circle',
                symbolSize: 8
            }))
        };
        rankChart.setOption(rankOption);
    }

    const categoryDom = document.getElementById('category-chart');
    if (categoryDom) {
        categoryChart = echarts.init(categoryDom);
        categoryChart.setOption({
            tooltip: { trigger: 'item' },
            series: [{
                name: '品类占比', type: 'pie', radius: ['40%', '70%'],
                data: [{ value: 40, name: '东坡菜' }, { value: 30, name: '古镇菜' }, { value: 30, name: '市井小吃' }],
                label: { show: true, formatter: '{b}: {c}%' },
                itemStyle: { color: (p) => ['#FF8C00', '#E64A19', '#FF5722'][p.dataIndex] }
            }]
        });
    }
};

const resizeCharts = () => {
    if (rankChart) rankChart.resize();
    if (categoryChart) categoryChart.resize();
};

// 图片弹窗
const showImagePopup = ref(false);
const popupImageSrc = ref('');
const popupTitle = ref('');

const openImagePopup = (imgSrc, title) => {
    popupImageSrc.value = imgSrc;
    popupTitle.value = title;
    showImagePopup.value = true;
    document.body.style.overflow = 'hidden';
};

const closeImagePopup = () => {
    showImagePopup.value = false;
    document.body.style.overflow = 'auto';
};

// 导航功能
const navigateToShop = () => {
    if (!currentShop.value) return;
    const { lng, lat, name, address } = currentShop.value;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent);

    const amapNavUri = `amapuri://route/plan/?dlat=${lat}&dlon=${lng}&dname=${encodeURIComponent(name)}&dev=0&t=0`;
    const webNavUrl = `https://ditu.amap.com/navi?to=${lng},${lat}&toName=${encodeURIComponent(name)}&toAddress=${encodeURIComponent(address)}`;

    if (isMobile) {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = amapNavUri;
        document.body.appendChild(iframe);
        setTimeout(() => {
            document.body.removeChild(iframe);
            if (!document.hidden && !document.webkitHidden) {
                window.open(webNavUrl, '_blank');
            }
        }, 500);
    } else {
        window.open(webNavUrl, '_blank');
    }
};

// 挂载与卸载
onMounted(async () => {
    await nextTick();
    await fetchShopScores();
    await fetchTrendData();
    await fetchCheckins();
    initCharts();
    setTimeout(() => {
        initMap();
    }, 300);
    window.addEventListener('resize', resizeCharts);
});

onUnmounted(() => {
    window.removeEventListener('resize', resizeCharts);
    if (rankChart) rankChart.dispose();
    if (categoryChart) categoryChart.dispose();
    if (mapInstance) {
        mapInstance.destroy();
        mapInstance = null;
    }
    document.body.style.overflow = 'auto';
});
</script>

<style scoped>
.meishan-food {
    font-family: "Microsoft Yahei", sans-serif;
    color: #333;
    background-color: #f5f2e9;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-title {
    font-size: 2rem;
    color: #282828;
    text-align: center;
    margin: 0 0 50px;
    position: relative;
    padding-bottom: 15px;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #ff8c00;
}

/* Hero */
.food-hero {
    position: relative;
    height: 800px;
    width: 1400px;
    margin: 0 auto;
    overflow: hidden;
    color: white;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.hero-bg-base {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
}

.hero-food-collage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    z-index: 1;
}

.collage-item {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.5s ease;
}

.item1 {
    width: 40%;
    height: 100%;
}

.item2,
.item3,
.item4 {
    width: 18%;
    height: 48%;
}

.hero-food-collage:hover .collage-item {
    transform: scale(1.05);
}

.hero-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(255, 140, 0, 0.4), rgba(40, 40, 40, 0.7));
    z-index: 2;
}

.hero-content {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 3;
    padding: 0 20px;
}

.hero-title {
    font-size: 3.5rem;
    margin: 0 0 10px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
    font-size: 1.5rem;
    margin: 0 0 20px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-desc {
    font-size: 1.1rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto 30px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-btn {
    padding: 12px 30px;
    background-color: #ff8c00;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.hero-btn:hover {
    background-color: #e07a00;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.flavor-tags {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 15px;
}

.tag {
    padding: 5px 15px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    font-size: 0.9rem;
    opacity: 0;
    animation: fadeIn 1s ease 0.5s forwards;
}

.tag:nth-child(2) {
    animation-delay: 0.7s;
}

.tag:nth-child(3) {
    animation-delay: 0.9s;
}

.tag:nth-child(4) {
    animation-delay: 1.1s;
}

/* 饮食文化 */
.food-culture {
    padding: 100px 0;
    background-color: white;
}

.culture-content {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    flex-wrap: wrap;
}

.culture-img-wrapper {
    width: 45%;
    min-width: 400px;
    position: relative;
}

.culture-img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.img-label {
    position: absolute;
    bottom: 10px;
    left: 10px;
    padding: 5px 15px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #ff8c00;
}

.culture-desc-wrapper {
    width: 50%;
    min-width: 400px;
}

.culture-desc {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin: 0 0 30px;
}

.culture-highlights {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.highlight-card {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    border-left: 4px solid #ff8c00;
}

.highlight-title {
    font-size: 1.1rem;
    color: #282828;
    margin: 0 0 10px;
}

.highlight-text {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #666;
    margin: 0;
}

/* 特色美食 */
.food-special {
    padding: 100px 0;
    background-color: #fef8f3;
}

.special-list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}

.food-card {
    width: 260px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
}

.card-hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.card-img-wrapper {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
    cursor: zoom-in;
}

.card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.food-card:hover .card-img {
    transform: scale(1.05);
}

.card-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.food-card:hover .card-mask {
    opacity: 1;
}

.card-content {
    padding: 20px;
}

.card-title {
    font-size: 1.2rem;
    margin: 0 0 8px;
    color: #282828;
}

.card-tag {
    font-size: 0.8rem;
    color: #ff8c00;
    margin: 0 0 10px;
}

.card-desc {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #666;
    margin: 0;
}

/* 古镇美食 */
.food-oldtown {
    padding: 100px 0;
    background-color: white;
}

.oldtown-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.oldtown-card {
    display: flex;
    gap: 30px;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f5f2e9;
    padding: 20px;
    border-radius: 12px;
}

.oldtown-img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
}

.oldtown-content {
    flex: 1;
    min-width: 400px;
}

.oldtown-title {
    font-size: 1.3rem;
    margin: 0 0 10px;
    color: #282828;
}

.oldtown-desc {
    font-size: 1rem;
    line-height: 1.7;
    color: #666;
    margin: 0;
}

/* 美食地图 */
.food-map {
    padding: 100px 0;
    background-color: #fef8f3;
}

.map-controls {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
}

.filter-btn {
    padding: 8px 20px;
    background-color: white;
    border: 1px solid #ff8c00;
    color: #ff8c00;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
    background-color: #ff8c00;
    color: white;
}

.map-container {
    width: 100%;
    height: 500px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.shop-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.popup-close {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
}

.shop-popup .popup-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 15px;
    border-radius: 8px;
}

.popup-title {
    font-size: 1.3rem;
    margin: 0 0 5px;
}

.popup-score {
    color: #ff8c00;
    margin: 0 0 5px;
}

.popup-address {
    color: #666;
    margin: 0 0 10px;
}

.popup-price {
    color: #666;
    margin: 0 0 15px;
}

.popup-btns {
    display: flex;
    gap: 10px;
}

.popup-btn {
    flex: 1;
    padding: 8px 0;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.nav-btn {
    background-color: #ff8c00;
    color: white;
}

.collect-btn {
    background-color: #f5f2e9;
    color: #282828;
}

/* 排行榜 */
.food-rank {
    padding: 100px 0;
    background-color: white;
}

.rank-content {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    margin-bottom: 60px;
}

.rank-chart,
.category-chart {
    flex: 1;
    min-width: 400px;
}

.chart-container {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    background-color: #fef8f3;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.chart-title {
    font-size: 1.2rem;
    text-align: center;
    margin: 0 0 20px;
    color: #282828;
}

.chart-switch {
    margin-top: 15px;
    padding: 6px 15px;
    background-color: #ff8c00;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

/* 🔥 打卡轮播样式 */
.checkin-wall {
    margin-top: 50px;
    text-align: center;
}

.checkin-upload {
    margin-bottom: 25px;
}

.upload-btn {
    display: inline-block;
    padding: 10px 24px;
    background: #ff8c00;
    color: white;
    border-radius: 25px;
    cursor: pointer;
    transition: background 0.3s;
    font-size: 1rem;
}

.upload-btn:hover {
    background: #e07a00;
}

.upload-tip {
    margin-top: 10px;
    color: #666;
    font-size: 0.9rem;
}

.carousel-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 20px 0;
}

.carousel-btn {
    width: 40px;
    height: 40px;
    border: none;
    background: #ff8c00;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
}

.carousel-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.carousel-images {
    display: flex;
    gap: 20px;
    overflow: hidden;
    width: calc(4 * 220px);
}

.checkin-item {
    text-align: center;
    width: 200px;
}

.wall-img {
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s;
    cursor: zoom-in;
}

.wall-img:hover {
    transform: scale(1.05);
}

.checkin-desc {
    margin-top: 8px;
    font-size: 0.85rem;
    color: #666;
}

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
    background: #ff8c00;
}

/* 图片弹窗 */
.image-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    animation: fadeIn 0.3s ease forwards;
}

.popup-content {
    max-width: 95%;
    max-height: 95vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-popup .popup-title {
    color: white;
    font-size: 1.8rem;
    margin: 0 0 20px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.image-popup .popup-img {
    max-width: 100%;
    max-height: 80vh;
    width: auto;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
    object-fit: contain;
}

.image-popup .popup-close {
    position: fixed;
    top: 20px;
    right: 30px;
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
    transition: all 0.2s ease;
}

.image-popup .popup-close:hover {
    color: #ff8c00;
    transform: scale(1.1);
}

/* 评价弹窗 */
.review-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
}

.review-content {
    background: #fff;
    padding: 24px;
    border-radius: 12px;
    width: 420px;
    max-width: 90%;
}

.review-content h3 {
    margin: 0 0 16px;
    font-size: 1.2rem;
    color: #333;
}

.review-score {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
}

.stars {
    display: flex;
    gap: 4px;
    font-size: 24px;
    color: #e0e0e0;
}

.stars .active {
    color: #ff8c00;
    cursor: pointer;
}

.review-content textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    resize: none;
    font-size: 0.9rem;
    margin: 16px 0;
}

.review-btns {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
}

.btn-cancel {
    padding: 8px 16px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
}

.btn-submit {
    padding: 8px 16px;
    background: #ff8c00;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* 响应式 */
@media (max-width: 1200px) {
    .hero-title {
        font-size: 3rem;
    }

    .culture-content,
    .rank-content {
        gap: 20px;
    }
}

@media (max-width: 768px) {
    .food-hero {
        height: 600px;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .hero-desc {
        font-size: 1rem;
    }

    .culture-img-wrapper,
    .culture-desc-wrapper {
        width: 100%;
        min-width: unset;
    }

    .oldtown-img {
        width: 100%;
    }

    .oldtown-content {
        min-width: unset;
    }

    .rank-chart,
    .category-chart {
        min-width: unset;
    }

    .chart-container {
        height: 300px;
    }

    .map-container {
        height: 350px;
    }
}

@media (max-width: 480px) {
    .food-hero {
        height: 500px;
    }

    .hero-title {
        font-size: 2rem;
    }

    .hero-content {
        bottom: 50px;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .food-card {
        width: 100%;
    }

    .wall-img {
        width: 140px;
        height: 100px;
    }

    .shop-popup {
        width: 90%;
    }

    .map-container {
        height: 300px;
    }
}
</style>

<style>
/* 高德地图全局样式覆盖 */
#amap-container,
.map-container .amap-container {
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
}

.amap-zoomcontrol {
    border-radius: 4px !important;
    background: white !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
    border: none !important;
}

.amap-zoomcontrol a {
    border-bottom: 1px solid #eee !important;
    width: 32px !important;
    height: 32px !important;
    line-height: 32px !important;
    color: #333 !important;
    font-size: 18px !important;
}

.amap-zoomcontrol a:hover {
    background: #f5f5f5 !important;
}

.amap-scale {
    bottom: 10px !important;
    left: 10px !important;
    background: white !important;
    border-radius: 4px !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
    border: none !important;
}

.amap-marker {
    cursor: pointer !important;
    z-index: 100 !important;
}
</style>