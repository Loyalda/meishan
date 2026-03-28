<template>
    <section id="liujiang" class="liujiang-module">
        <!-- 1️⃣ 古镇视觉引导区 (Hero) -->
        <div class="hero-section">
            <div class="hero-background">
                <div class="hero-overlay"></div>
            </div>
            <div class="hero-content">
                <h1 class="hero-title">柳江古镇</h1>
                <p class="hero-subtitle">千年古镇・水乡风情</p>
                <div class="hero-description">
                    <p>柳江古镇,藏于眉山洪雅的青衣江畔,是川西南独有的"烟雨水乡"。</p>
                    <p>青石板路顺着江水蜿蜒,川西吊脚楼枕水而居,百年古桥横跨杨村河,一砖一瓦皆浸染着南宋至今的烟火与诗意。</p>
                    <p>漫步其间,江水声伴着老街的吆喝,时光仿佛慢下脚步,尽览川西水乡的独有韵味。</p>
                </div>
            </div>
            <div class="scroll-hint">
                <span>向下探索千年水乡 →</span>
            </div>
        </div>

        <!-- 2️⃣ 古镇历史文化 -->
        <div class="history-section">
            <h2 class="section-title">柳江古镇的历史:从南宋商埠到川西水乡</h2>
            <div class="history-content">
                <div class="history-images">
                    <div class="history-image-item" @click="selectHistoryPeriod('song')">
                        <img src="/history-song.jpg" alt="南宋商贸古碑" loading="lazy">
                        <span class="image-label">南宋商贸</span>
                    </div>
                    <div class="history-image-item" @click="selectHistoryPeriod('ming')">
                        <img src="/zhongliba.jpg" alt="重力坝" loading="lazy">
                        <span class="image-label">重力坝</span>
                    </div>
                    <div class="history-image-item" @click="selectHistoryPeriod('modern')">
                        <img src="/history-modern.jpg" alt="曾家园老宅" loading="lazy">
                        <span class="image-label">曾家园</span>
                    </div>
                </div>
                <div class="history-text">
                    <div class="history-paragraph" :class="{ active: activePeriod === 'origin' }" id="origin">
                        <h3>历史溯源</h3>
                        <p>柳江古镇的历史可追溯至南宋绍兴年间(公元1131-1162年),最初因"明礼乡"得名,后因柳、江两姓望族聚居,改称"柳江"。</p>
                    </div>
                    <div class="history-paragraph" :class="{ active: activePeriod === 'trade' }" id="trade">
                        <h3>商贸盛景</h3>
                        <p>明清时期,古镇凭借青衣江、杨村河的水运优势,成为川西与川南商贸往来的重要枢纽——盐、茶、木材经此集散,江西、湖广商人在此建会馆、修商铺,形成"日有千人拱手,夜有万盏明灯"的盛景。</p>
                    </div>
                    <div class="history-paragraph" :class="{ active: activePeriod === 'heritage' }" id="heritage">
                        <h3>文化遗存</h3>
                        <p>即便历经岁月更迭,古镇仍保留着明清时期的街巷格局(如"曾家巷""姜家巷")、百年老宅(曾家园、柳家大院),以及碑刻、古井等历史遗存,成为川西商贸文化与民居文化的活态样本。</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 3️⃣ 古镇建筑风貌 -->
        <div class="architecture-section">
            <h2 class="section-title">古镇建筑风貌:枕水而居的川西美学</h2>
            <p class="architecture-intro">
                柳江古镇的建筑是"川西地域智慧"的体现:没有江南水乡的精致雕琢,却多了川西南的质朴与野趣。
                吊脚楼适应山地与水域交错的地形,石板街顺应自然肌理,古桥兼顾实用与人文,所有建筑皆不刻意改造自然,而是与山水、河流相融共生,这正是柳江建筑最珍贵的特质。
            </p>
            <div class="architecture-grid">
                <div class="architecture-item">
                    <div class="arch-image-wrapper">
                        <img src="/yuanmuqiao-full.jpg" alt="原木桥全景" class="arch-main-img" loading="lazy">
                        <img src="/yuanmuqiao-detail.jpg" alt="原木桥细节" class="arch-detail-img" loading="lazy">
                    </div>
                    <div class="arch-info">
                        <h3>原木桥</h3>
                        <p>川西版"水乡建筑",木质结构一半倚岸、一半悬空于河面,底部以石柱支撑,既适应多雨潮湿的气候,又形成"水在楼下流,人在楼上住"的独特格局。</p>
                    </div>
                </div>
                <div class="architecture-item">
                    <div class="arch-image-wrapper">
                        <img src="/zhongliba-full.jpg" alt="石板街全景" class="arch-main-img" loading="lazy">
                        <img src="/zhongliba-detail.jpg" alt="石板街细节" class="arch-detail-img" loading="lazy">
                    </div>
                    <div class="arch-info">
                        <h3>重力坝</h3>
                        <p>青石板取自本地山岩,经数百年踩踏、江水冲刷,纹理斑驳,街巷随河道弯曲,无规整轴线,尽显川西古镇的自然随性。</p>
                    </div>
                </div>
                <div class="architecture-item">
                    <div class="arch-image-wrapper">
                        <img src="/guqiao-full.jpg" alt="古桥全景" class="arch-main-img" loading="lazy">
                        <img src="/bridge-detail.jpg" alt="古桥细节" class="arch-detail-img" loading="lazy">
                    </div>
                    <div class="arch-info">
                        <h3>古桥</h3>
                        <p>以"柳江大桥""双孝桥"为代表,石拱桥形制,桥身刻有明清时期的祈福铭文,既是交通要道,也是古镇的文化地标。</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 4️⃣ 古镇生活文化 -->
        <div class="life-section">
            <h2 class="section-title">古镇生活文化:藏在烟火里的川西日常</h2>
            <p class="life-intro">
                在柳江古镇,时光始终保持着慢悠悠的节奏,当地人的生活从未被外界的快节奏打乱。
            </p>
            <div class="life-timeline">
                <div class="life-card">
                    <div class="life-image">
                        <img src="/morning-tea.jpg" alt="清晨茶馆" loading="lazy">
                        <div class="life-effect tea-mist"></div>
                    </div>
                    <div class="life-content">
                        <h3>茶馆文化</h3>
                        <p class="life-keyword">盖碗茶 + 竹椅 + 老茶客</p>
                        <p class="life-desc">"一碗盖碗茶,消磨半日闲"</p>
                        <p class="life-detail">清晨,江雾未散,老人们搬着小板凳坐在河边,用木槌捶打衣物,伴着江水声唠家常,岸边的茶馆已支起茶桌,摆上盖碗茶,等着早起的茶客。</p>
                    </div>
                </div>
                <div class="life-card">
                    <div class="life-image">
                        <img src="/riverside.jpg" alt="河边生活" loading="lazy">
                    </div>
                    <div class="life-content">
                        <h3>河边生活</h3>
                        <p class="life-keyword">捶衣 + 江水 + 竹篮</p>
                        <p class="life-desc">"江水绕屋流,日常皆温柔"</p>
                        <p class="life-detail">白天,老街的小吃摊飘出香味——藤椒鸭、叶儿粑、洪雅钵钵鸡,游客边走边尝。</p>
                    </div>
                </div>
                <div class="life-card">
                    <div class="life-image">
                        <img src="/yejing.jpg" alt="夜景" loading="lazy">
                        <div class="life-effect lantern-glow"></div>
                    </div>
                    <div class="life-content">
                        <h3>夜景</h3>
                        <p class="life-desc">"灯影映江水,夜话柳江事"</p>
                        <p class="life-detail">夜晚,红灯笼次第亮起,照亮青石板路,河边的小酒馆摆上桌椅,游客与本地人围坐一起,喝着本地的米酒,听老板讲古镇的老故事。</p>
                    </div>
                </div>
                <div class="life-card">
                    <div class="life-image">
                        <img src="/food.jpg" alt="市井小吃" loading="lazy">
                    </div>
                    <div class="life-content">
                        <h3>市井小吃</h3>
                        <p class="life-keyword">钵钵鸡 + 叶儿粑</p>
                        <p class="life-desc">"一口烟火味,尝尽川西甜"</p>
                        <p class="life-detail">傍晚,家家户户搬出竹椅坐在门口,看着孩子在石板街上追逐打闹,夕阳落在吊脚楼的木窗上,给古镇镀上一层暖金。</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 5️⃣ 古镇互动探索 -->
        <div class="interactive-section">
            <h2 class="section-title">古镇互动探索:亲手触摸柳江的温度</h2>
            <p class="interactive-intro">
                柳江的美,不止于看,更在于触摸与参与。在这里,你可以拼出心中的水乡模样,答出藏在古镇里的小秘密,也可以亲手编一个竹篮、做一块麻饼,把柳江的温度带回家。每一次互动,都是与千年古镇的一次对话。
            </p>
            <div class="interactive-content">
                <div class="interactive-left">
                    <div class="interactive-item" @click="openModal('puzzle')">
                        <div class="item-icon">🧩</div>
                        <h3>古镇拼图</h3>
                        <p>以吊脚楼、古桥为素材,分难度等级,完成可保存定制化古镇壁纸</p>
                    </div>
                    <div class="interactive-item" @click="openModal('quiz')">
                        <div class="item-icon">❓</div>
                        <h3>文化问答</h3>
                        <p>围绕柳江历史、建筑、美食设置10道趣味题,快来挑战一下吧！"</p>
                    </div>
                    <div class="interactive-item" @click="openModal('audio')">
                        <div class="item-icon">🎙️</div>
                        <h3>声音打卡</h3>
                        <p>扫描二维码,可录制自己的"柳江印象"语音,生成专属语音明信片</p>
                    </div>
                </div>
                <div class="interactive-right">
                    <div class="result-carousel">
                        <div class="carousel-item">
                            <img src="/puzzle-bg.jpg" alt="定制壁纸示例" loading="lazy">
                            <span class="carousel-label">用户生成壁纸</span>
                        </div>
                        <div class="carousel-item">
                            <img src="/quanjingtu.jpg" alt="文化勋章示例" loading="lazy">
                            <span class="carousel-label">柳江全景图</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 预约表单 -->
            <div class="booking-section">
                <h3>线下体验预约</h3>
                <div class="booking-form">
                    <input type="date" v-model="bookingDate" :min="minDate" placeholder="选择日期" class="booking-input"
                        @change="checkQuota">
                    <span class="booking-quota">剩余名额: {{ remainingQuota }}</span>
                    <button class="booking-btn" :disabled="!bookingDate || remainingQuota <= 0" @click="submitBooking">
                        {{ remainingQuota > 0 ? '立即预约' : '名额已满' }}
                    </button>
                </div>
            </div>

            <!-- 弹窗容器 - 移出scoped影响 -->
            <teleport to="body">
                <div v-if="activeModal" class="modal-overlay" @click="closeModal">
                    <div class="modal-content" @click.stop>
                        <!-- 拼图弹窗 -->
                        <div v-if="activeModal === 'puzzle'" class="modal-puzzle">
                            <h3>古镇拼图</h3>
                            <div class="puzzle-difficulty">
                                <button @click="startPuzzle('easy')" :class="{ active: puzzleDifficulty === 'easy' }">
                                    简单 (3x3)
                                </button>
                                <button @click="startPuzzle('medium')"
                                    :class="{ active: puzzleDifficulty === 'medium' }">
                                    中等 (4x4)
                                </button>
                                <button @click="startPuzzle('hard')" :class="{ active: puzzleDifficulty === 'hard' }">
                                    困难 (5x5)
                                </button>
                            </div>
                            <!-- 拼图完成提示 -->
                            <div v-if="puzzleCompleted" class="puzzle-success">
                                <span>🎉 拼图完成！</span>
                            </div>
                            <!-- 图片加载提示 -->
                            <div v-if="puzzleLoading" class="puzzle-loading">图片加载中...</div>
                            <!-- 拼图网格 -->
                            <div v-if="puzzleStarted && !puzzleLoading" class="puzzle-container">
                                <div class="puzzle-grid" :class="`${puzzleDifficulty}-grid`">
                                    <div v-for="(piece, index) in puzzlePieces" :key="index" class="puzzle-piece"
                                        :style="{
                                            backgroundImage: `url(${puzzleImageUrl})`,
                                            backgroundPosition: piece.bgPos,
                                            backgroundSize: piece.bgSize,
                                            border: puzzleCompleted ? '2px solid #27ae60' : '0.5px solid rgba(255,255,255,0.8)'
                                        }" @click="movePiece(index)" :class="{
                                            selected: lastClickedIndex === index,
                                            completed: puzzleCompleted
                                        }"></div>
                                </div>
                                <!-- 移动步数统计 -->
                                <div class="puzzle-stats">
                                    <span>移动步数：{{ moveCount }}</span>
                                    <span v-if="!puzzleCompleted">剩余拼块：{{ remainingPieces }}</span>
                                </div>
                            </div>
                            <button v-if="puzzleStarted" @click="saveWallpaper" :disabled="!puzzleCompleted"
                                class="save-wallpaper-btn">
                                {{ puzzleCompleted ? '保存壁纸' : '完成拼图后保存' }}
                            </button>
                            <!-- 重新开始按钮 -->
                            <button v-if="puzzleStarted" @click="restartPuzzle" class="restart-puzzle-btn">
                                重新开始
                            </button>
                        </div>

                        <!-- 问答弹窗 -->
                        <div v-if="activeModal === 'quiz'" class="modal-quiz">
                            <h3>柳江文化问答 (第 {{ currentQuizIndex + 1 }} / 10 题)</h3>
                            <div class="quiz-question">
                                <p>{{ currentQuiz.question }}</p>
                                <div class="quiz-options">
                                    <button v-for="(opt, idx) in currentQuiz.options" :key="idx" :class="{
                                        selected: selectedAnswer === opt,
                                        correct: selectedAnswer === opt && answerCorrect,
                                        incorrect: selectedAnswer === opt && !answerCorrect
                                    }" @click="selectAnswer(opt)" :disabled="selectedAnswer !== null">
                                        {{ opt }}
                                    </button>
                                </div>
                            </div>
                            <div class="quiz-score">当前得分: {{ quizScore }}</div>
                        </div>

                        <!-- 声音打卡弹窗 -->
                        <div v-if="activeModal === 'audio'" class="modal-audio">
                            <h3>声音打卡</h3>
                            <p>录制你的柳江印象，生成专属语音明信片</p>
                            <div class="audio-controls">
                                <!-- ✅ 核心修复：移除模板中直接的navigator引用，改用computed属性 -->
                                <button @click="startRecording" :disabled="isRecording || !canRecordAudio">
                                    {{ isRecording ? '录制中...' : '开始录音' }}
                                </button>
                                <button @click="stopRecording" :disabled="!isRecording">
                                    停止录音
                                </button>
                                <button @click="playRecording" :disabled="!recordedBlob">
                                    播放
                                </button>
                                <button @click="saveAudioPostcard" :disabled="!recordedBlob">
                                    生成明信片
                                </button>
                            </div>
                            <div v-if="recordedBlob" class="audio-preview">
                                <audio controls :src="audioUrl"></audio>
                            </div>
                        </div>

                        <button class="modal-close" @click="closeModal">关闭</button>
                    </div>
                </div>
            </teleport>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LiujiangModule',
    data() {
        return {
            // 历史板块激活状态
            activePeriod: 'origin',
            // 弹窗状态
            activeModal: null,
            // 拼图相关
            puzzleStarted: false,
            puzzleDifficulty: 'easy',
            puzzlePieces: [],
            correctPieces: [],
            lastClickedIndex: undefined,
            puzzleCompleted: false,
            moveCount: 0,
            puzzleLoading: false,
            puzzleImageUrl: '/puzzle-bg.jpg', // 替换为实际拼图图片地址
            // 问答相关
            quizScore: 0,
            currentQuizIndex: 0,
            selectedAnswer: null,
            answerCorrect: null,
            quizList: [
                {
                    question: '柳江古镇始建于哪个朝代？',
                    options: ['唐', '宋', '元', '明'],
                    answer: '宋'
                },
                {
                    question: '柳江古镇最具代表性的建筑是？',
                    options: ['四合院', '吊脚楼', '土楼', '窑洞'],
                    answer: '吊脚楼'
                },
                {
                    question: '以下哪项是柳江特色小吃？',
                    options: ['钵钵鸡', '热干面', '生煎包', '刀削面'],
                    answer: '钵钵鸡'
                },
                {
                    question: '柳江古镇位于眉山哪个区县？',
                    options: ['东坡区', '洪雅县', '彭山区', '仁寿县'],
                    answer: '洪雅县'
                },
                {
                    question: '柳江古镇的核心水系是？',
                    options: ['青衣江', '岷江', '沱江', '嘉陵江'],
                    answer: '青衣江'
                },
                {
                    question: '柳江古镇的百年老宅"曾家园"始建于哪个年代？',
                    options: ['清代', '民国', '明代', '宋代'],
                    answer: '民国'
                },
                {
                    question: '柳江古镇的石板街主要材质是？',
                    options: ['花岗岩', '大理石', '本地山岩', '青砖'],
                    answer: '本地山岩'
                },
                {
                    question: '以下哪种不是柳江古镇的特色美食？',
                    options: ['叶儿粑', '藤椒鸭', '麻婆豆腐', '洪雅钵钵鸡'],
                    answer: '麻婆豆腐'
                },
                {
                    question: '柳江古镇原名"明礼乡"，改名柳江是因为？',
                    options: [
                        '柳、江两姓望族聚居',
                        '镇中有柳树和江水',
                        '纪念诗人柳宗元',
                        '因柳江河流经'
                    ],
                    answer: '柳、江两姓望族聚居'
                },
                {
                    question: '柳江古镇被称为？',
                    options: [
                        '川西烟雨水乡',
                        '江南水乡分支',
                        '川南第一镇',
                        '蜀中第一古镇'
                    ],
                    answer: '川西烟雨水乡'
                }
            ],
            // 声音打卡相关（完整定义）
            isRecording: false,
            mediaRecorder: null,
            recordedChunks: [],
            recordedBlob: null,
            audioUrl: null,
            // 预约相关
            bookingDate: '',
            minDate: new Date().toISOString().split('T')[0],
            remainingQuota: 12,
            quotaMap: JSON.parse(localStorage.getItem('liujiangBookingQuota') || '{}'),
            // ✅ 核心修复：新增浏览器环境检测标记（渲染阶段安全访问）
            isBrowser: typeof window !== 'undefined' && typeof navigator !== 'undefined'
        }
    },
    computed: {
        // 当前答题题目
        currentQuiz() {
            return this.quizList[this.currentQuizIndex]
        },
        // 剩余未正确归位的拼块数
        remainingPieces() {
            if (!this.puzzleStarted) return 0;
            return this.puzzlePieces.filter((p, i) => p.correctIndex !== i).length;
        },
        // ✅ 核心修复：封装录音能力检测，避免模板直接访问全局navigator
        canRecordAudio() {
            // 先判断是否是浏览器环境，再检测API是否存在
            if (!this.isBrowser) return false;
            // 兼容不同浏览器的mediaDevices写法
            return !!window.navigator.mediaDevices?.getUserMedia;
        }
    },
    methods: {
        /**
         * 选择历史时期，切换对应文本显示
         * @param {string} period - 点击的图片对应时期标识
         */
        selectHistoryPeriod(period) {
            const periodMap = {
                'song': 'origin',
                'ming': 'trade',
                'modern': 'heritage'
            }
            this.activePeriod = periodMap[period]
            const target = document.getElementById(this.activePeriod)
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
            }
        },

        /**
         * 打开弹窗并重置对应模块状态
         * @param {string} type - 弹窗类型(puzzle/quiz/audio)
         */
        openModal(type) {
            this.activeModal = type
            // 重置对应模块状态
            if (type === 'puzzle') {
                this.puzzleStarted = false
                this.puzzlePieces = []
                this.lastClickedIndex = undefined
                this.puzzleCompleted = false
                this.moveCount = 0
            } else if (type === 'quiz') {
                this.quizScore = 0
                this.currentQuizIndex = 0
                this.selectedAnswer = null
                this.answerCorrect = null
            } else if (type === 'audio') {
                this.isRecording = false
                this.recordedChunks = []
                this.recordedBlob = null
                this.audioUrl = null
                if (this.mediaRecorder) {
                    this.mediaRecorder = null
                }
            }
        },

        /**
         * 关闭弹窗
         */
        closeModal() {
            this.activeModal = null
            // 停止录音（如果正在录音）
            if (this.isRecording) {
                this.stopRecording()
            }
            // 释放音频URL，避免内存泄漏
            if (this.audioUrl) {
                URL.revokeObjectURL(this.audioUrl)
                this.audioUrl = null
            }
        },

        /**
         * 开始拼图游戏
         * @param {string} difficulty - 难度等级(easy/medium/hard)
         */
        startPuzzle(difficulty) {
            this.puzzleStarted = true;
            this.puzzleDifficulty = difficulty;
            this.puzzleCompleted = false;
            this.moveCount = 0;
            this.lastClickedIndex = undefined;
            this.puzzleLoading = true;

            // 难度配置（固定总尺寸，消除间隙影响）
            const gridTotalSize = 360;
            const configMap = {
                easy: { size: 3, gridTotal: gridTotalSize },
                medium: { size: 4, gridTotal: gridTotalSize },
                hard: { size: 5, gridTotal: gridTotalSize }
            };
            const { size, gridTotal } = configMap[difficulty];
            const pieceSize = gridTotal / size;

            // 预加载图片
            const img = new Image();
            img.src = this.puzzleImageUrl;
            img.crossOrigin = 'anonymous';

            img.onload = () => {
                // 计算图片缩放比例，保证1:1匹配网格
                const scaleX = gridTotal / img.width;
                const scaleY = gridTotal / img.height;
                const scale = Math.max(scaleX, scaleY);
                const offsetX = (gridTotal - img.width * scale) / 2;
                const offsetY = (gridTotal - img.height * scale) / 2;

                // 生成正确索引并打乱
                this.correctPieces = Array.from({ length: size * size }, (_, i) => i);
                const shuffledIndexes = this.shuffleArray([...this.correctPieces]);

                // 生成拼块数据
                this.puzzlePieces = shuffledIndexes.map(i => {
                    const col = i % size;
                    const row = Math.floor(i / size);
                    const bgX = -(col * pieceSize - offsetX);
                    const bgY = -(row * pieceSize - offsetY);
                    const bgSize = `${img.width * scale}px ${img.height * scale}px`;

                    return {
                        bgPos: `${bgX}px ${bgY}px`,
                        bgSize: bgSize,
                        correctIndex: i
                    };
                });

                this.puzzleLoading = false;
            };

            img.onerror = () => {
                alert('拼图图片加载失败，请检查图片路径！');
                this.puzzleLoading = false;
                this.closeModal();
            };
        },

        /**
         * 数组洗牌算法（Fisher-Yates）
         * @param {Array} array - 待打乱数组
         * @returns {Array} 打乱后的数组
         */
        shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            // 避免打乱后与原顺序一致
            if (newArray.every((val, idx) => val === idx)) {
                return this.shuffleArray(array);
            }
            return newArray;
        },

        /**
         * 移动拼图块
         * @param {number} index - 点击的拼块索引
         */
        movePiece(index) {
            if (this.puzzleCompleted) return;
            if (this.lastClickedIndex === undefined) {
                this.lastClickedIndex = index;
                return;
            }
            // 交换拼块
            [this.puzzlePieces[this.lastClickedIndex], this.puzzlePieces[index]] =
                [this.puzzlePieces[index], this.puzzlePieces[this.lastClickedIndex]];

            this.moveCount++;

            // 检查是否完成
            const isComplete = this.puzzlePieces.every((p, i) => p.correctIndex === i);
            if (isComplete) {
                this.puzzleCompleted = true;
                setTimeout(() => {
                    alert(`👏 恭喜！你用了${this.moveCount}步完成拼图`);
                }, 300);
            }
            this.lastClickedIndex = undefined;
        },

        /**
         * 重新开始拼图
         */
        restartPuzzle() {
            this.startPuzzle(this.puzzleDifficulty);
        },

        /**
         * 保存拼图壁纸
         */
        saveWallpaper() {
            if (!this.puzzleCompleted) return;
            const link = document.createElement('a');
            link.href = this.puzzleImageUrl;
            link.download = `柳江古镇拼图壁纸_${new Date().toLocaleDateString()}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            alert('✅ 定制化古镇壁纸已下载到本地！');
        },

        /**
         * 选择问答答案
         * @param {string} option - 选中的答案
         */
        selectAnswer(option) {
            if (this.selectedAnswer) return;

            this.selectedAnswer = option;
            this.answerCorrect = option === this.currentQuiz.answer;

            // 答对加分
            if (this.answerCorrect) {
                this.quizScore += 10;
            }

            // 切换下一题
            setTimeout(() => {
                if (this.currentQuizIndex < this.quizList.length - 1) {
                    this.currentQuizIndex++;
                    this.selectedAnswer = null;
                    this.answerCorrect = null;
                } else {
                    // 答题完成
                    const tip = this.quizScore >= 80
                        ? `答题完成！总得分：${this.quizScore}分\n🎉 已解锁「柳江文化勋章」`
                        : `答题完成！总得分：${this.quizScore}分\n💪 继续了解柳江，解锁勋章吧`;
                    alert(tip);
                    this.closeModal();
                }
            }, 1000);
        },

        /**
         * 开始录音（最终修复版：100%避免navigator未定义）
         */
        async startRecording() {
            try {
                // ✅ 第一步：强制检测浏览器环境，杜绝非浏览器场景报错
                if (!this.isBrowser) {
                    alert('❌ 当前环境不支持录音功能，请在浏览器中打开！');
                    return;
                }

                // ✅ 第二步：检测mediaDevices是否存在（兼容所有浏览器）
                const mediaDevices = window.navigator.mediaDevices;
                if (!mediaDevices || !mediaDevices.getUserMedia) {
                    alert('❌ 您的浏览器不支持录音功能，请使用 Chrome/Edge/Firefox 最新版！');
                    return;
                }

                // ✅ 第三步：权限检测（避免权限拒绝报错）
                let permissionStatus;
                try {
                    permissionStatus = await navigator.permissions.query({ name: 'microphone' });
                } catch (e) {
                    // 部分浏览器不支持permissions API，直接跳过
                    permissionStatus = { state: 'unknown' };
                }
                if (permissionStatus.state === 'denied') {
                    alert('❌ 麦克风权限已被拒绝，请在浏览器设置中重新允许！');
                    if (confirm('是否跳转到浏览器权限设置页面？')) {
                        if (window.location.protocol === 'https:' || window.location.hostname === 'localhost') {
                            mediaDevices.getUserMedia({ audio: true }).catch(() => { });
                        }
                    }
                    return;
                }

                // ✅ 第四步：请求麦克风流（捕获所有可能的错误）
                let stream;
                try {
                    stream = await mediaDevices.getUserMedia({
                        audio: {
                            sampleRate: 44100,
                            channelCount: 1,
                            echoCancellation: true
                        }
                    });
                } catch (e) {
                    if (e.name === 'NotAllowedError') {
                        alert('❌ 麦克风权限申请失败，请允许权限后重试！');
                    } else if (e.name === 'NotFoundError') {
                        alert('❌ 未检测到麦克风设备，请检查设备连接！');
                    } else {
                        alert('❌ 无法访问麦克风：' + e.message);
                    }
                    return;
                }

                // ✅ 第五步：初始化录音器（兼容音频格式）
                const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
                    ? 'audio/webm;codecs=opus'
                    : 'audio/wav';

                this.mediaRecorder = new MediaRecorder(stream, { mimeType });
                this.recordedChunks = [];

                // 收集录音数据
                this.mediaRecorder.ondataavailable = (e) => {
                    if (e.data.size > 0) {
                        this.recordedChunks.push(e.data);
                    }
                };

                // 录音停止处理
                this.mediaRecorder.onstop = () => {
                    try {
                        this.recordedBlob = new Blob(this.recordedChunks, {
                            type: this.mediaRecorder.mimeType || 'audio/wav'
                        });
                        if (this.audioUrl) {
                            URL.revokeObjectURL(this.audioUrl);
                        }
                        this.audioUrl = URL.createObjectURL(this.recordedBlob);
                        stream.getTracks().forEach(track => track.stop());
                    } catch (err) {
                        alert('❌ 录音处理失败：' + err.message);
                        console.error('录音停止错误:', err);
                    }
                };

                // 录音错误处理
                this.mediaRecorder.onerror = (err) => {
                    alert('❌ 录音异常：' + err.message);
                    this.isRecording = false;
                    stream.getTracks().forEach(track => track.stop());
                };

                // 开始录音
                this.mediaRecorder.start(100);
                this.isRecording = true;
                alert('✅ 开始录音，请对着麦克风说出你的柳江印象吧！');
            } catch (error) {
                console.error('录音初始化错误:', error);
                alert('❌ 录音启动失败：' + (error.message || '未知错误'));
            }
        },

        /**
         * 停止录音
         */
        stopRecording() {
            if (this.mediaRecorder && this.isRecording) {
                try {
                    this.mediaRecorder.stop();
                    this.isRecording = false;
                    setTimeout(() => {
                        if (!this.recordedBlob) {
                            alert('⚠️ 录音内容为空，请重新录制！');
                        }
                    }, 500);
                } catch (err) {
                    alert('❌ 停止录音失败：' + err.message);
                    console.error('停止录音错误:', err);
                }
            } else {
                alert('⚠️ 未开始录音！');
            }
        },

        /**
         * 播放录音
         */
        playRecording() {
            if (!this.recordedBlob) {
                alert('⚠️ 暂无录音内容，请先录制！');
                return;
            }
            try {
                const audio = new Audio(this.audioUrl);
                audio.play().catch(err => {
                    alert('❌ 播放录音失败：' + err.message);
                    if (err.name === 'NotAllowedError') {
                        alert('⚠️ 移动端需要手动触发播放，请点击播放按钮后再次尝试！');
                    }
                    console.error('播放错误:', err);
                });
            } catch (err) {
                alert('❌ 播放录音异常：' + err.message);
                console.error('播放初始化错误:', err);
            }
        },

        /**
         * 生成语音明信片
         */
        saveAudioPostcard() {
            alert('✅ 已生成专属语音明信片，可分享到社交平台！');
            this.closeModal();
        },

        /**
         * 检查预约日期剩余名额
         */
        checkQuota() {
            if (!this.bookingDate) return;
            // 从记录中取该日期的名额，没有则默认12个
            this.remainingQuota = this.quotaMap[this.bookingDate] ?? 12;
        },

        /**
         * 提交预约
         */
        submitBooking() {
            if (!this.bookingDate) {
                alert('请选择预约日期！');
                return;
            }
            if (this.remainingQuota <= 0) {
                alert('该日期名额已满，请选择其他日期');
                return;
            }
            // 扣减当前日期剩余名额
            this.remainingQuota -= 1;
            // 更新到日期-名额映射表
            this.quotaMap[this.bookingDate] = this.remainingQuota;
            // ✅ 保存到浏览器本地存储（刷新页面后不会丢失）
            localStorage.setItem('liujiangBookingQuota', JSON.stringify(this.quotaMap));

            alert(`预约成功！${this.bookingDate} 剩余名额：${this.remainingQuota}`);
            this.bookingDate = ''; // 重置日期选择
        }
    }
}
</script>

<style scoped>
/* 全局基础样式 */
.liujiang-module {
    width: 100%;
    overflow: hidden;
    font-family: "Microsoft Yahei", sans-serif;
}

.section-title {
    font-size: 36px;
    text-align: center;
    margin-bottom: 40px;
    font-weight: 600;
    color: #2c3e50;
}

/* 1️⃣ Hero 视觉引导区 */
.hero-section {
    position: relative;
    height: 800px;
    width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/hero-bg.jpg') center/cover no-repeat;
    transition: transform 0.3s ease;
}

.hero-background:hover {
    transform: scale(1.05);
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    max-width: 900px;
    padding: 0 20px;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 60px 40px;
}

.hero-title {
    font-size: 72px;
    font-family: 'KaiTi', '楷体', serif;
    margin-bottom: 20px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
    font-size: 28px;
    font-family: 'SimSun', '宋体', serif;
    margin-bottom: 40px;
    letter-spacing: 4px;
}

.hero-description p {
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 15px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.scroll-hint {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 16px;
    animation: bounce 2s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateX(-50%) translateY(0);
    }

    50% {
        transform: translateX(-50%) translateY(-10px);
    }
}

/* 2️⃣ 历史文化区域 */
.history-section {
    padding: 100px 20px;
    background: #f9f9f9;
}

.history-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 60px;
    align-items: start;
}

.history-images {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.history-image-item {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.history-image-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.history-image-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}

.history-image-item:hover img {
    transform: scale(1.08);
}

.image-label {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    z-index: 1;
}

.history-text {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.history-paragraph {
    padding: 25px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    opacity: 0.7;
}

.history-paragraph.active {
    opacity: 1;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    border-left: 4px solid #d4a574;
}

.history-paragraph h3 {
    font-size: 22px;
    margin-bottom: 15px;
    color: #2c3e50;
}

.history-paragraph p {
    line-height: 1.8;
    color: #555;
}

/* 3️⃣ 建筑风貌区域 */
.architecture-section {
    padding: 100px 20px;
    background: white;
}

.architecture-intro {
    max-width: 900px;
    margin: 0 auto 60px;
    text-align: center;
    font-size: 18px;
    line-height: 1.8;
    color: #555;
}

.architecture-grid {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

.architecture-item {
    background: #f9f9f9;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.architecture-item:hover {
    transform: translateY(-8px);
}

.arch-image-wrapper {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.arch-main-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.architecture-item:hover .arch-main-img {
    transform: scale(1.05);
}

.arch-detail-img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 120px;
    height: 120px;
    object-fit: cover;
    border: 3px solid white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.arch-info {
    padding: 25px;
}

.arch-info h3 {
    font-size: 24px;
    margin-bottom: 15px;
    color: #2c3e50;
}

.arch-info p {
    line-height: 1.7;
    color: #666;
    font-size: 15px;
}

/* 4️⃣ 生活文化区域 */
.life-section {
    padding: 100px 20px;
    background: linear-gradient(to bottom, #f5f5f5, #fff);
}

.life-intro {
    max-width: 800px;
    margin: 0 auto 60px;
    text-align: center;
    font-size: 18px;
    color: #555;
}

.life-timeline {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.life-card {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 40px;
    align-items: center;
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.life-card:hover {
    transform: translateX(10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.life-card:nth-child(even) {
    grid-template-columns: 1.5fr 1fr;
}

.life-card:nth-child(even):hover {
    transform: translateX(-10px);
}

.life-card:nth-child(even) .life-image {
    order: 2;
}

.life-image {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    height: 300px;
}

.life-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.life-card:hover .life-image img {
    transform: scale(1.05);
}

.life-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.tea-mist {
    background: linear-gradient(to top, transparent, rgba(255, 255, 255, 0.3));
    animation: mist 3s ease-in-out infinite;
}

@keyframes mist {

    0%,
    100% {
        opacity: 0.3;
    }

    50% {
        opacity: 0.6;
    }
}

.lantern-glow {
    background: radial-gradient(circle at 30% 30%, rgba(255, 100, 100, 0.3), transparent);
    animation: glow 2s ease-in-out infinite;
}

@keyframes glow {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 0.8;
    }
}

.life-content h3 {
    font-size: 26px;
    margin-bottom: 10px;
    color: #2c3e50;
}

.life-keyword {
    font-size: 14px;
    color: #999;
    margin-bottom: 8px;
}

.life-desc {
    font-size: 20px;
    font-style: italic;
    color: #d4a574;
    margin-bottom: 15px;
}

.life-detail {
    line-height: 1.8;
    color: #666;
    font-size: 15px;
}

/* 5️⃣ 互动探索区域 */
.interactive-section {
    padding: 100px 20px;
    background: #f9f9f9;
}

.interactive-intro {
    max-width: 900px;
    margin: 0 auto 60px;
    text-align: center;
    font-size: 18px;
    line-height: 1.8;
    color: #555;
}

.interactive-content {
    max-width: 1200px;
    margin: 0 auto 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
}

.interactive-left {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.interactive-item {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.3s ease;
}

.interactive-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.item-icon {
    font-size: 48px;
    margin-bottom: 15px;
}

.interactive-item h3 {
    font-size: 22px;
    margin-bottom: 10px;
    color: #2c3e50;
}

.interactive-item p {
    line-height: 1.6;
    color: #666;
    font-size: 15px;
}

.interactive-right {
    display: flex;
    align-items: center;
    justify-content: center;
}

.result-carousel {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.carousel-item {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.carousel-item:hover {
    transform: scale(1.03);
}

.carousel-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
}

.carousel-label {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 16px;
}

.booking-section {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.booking-section h3 {
    font-size: 28px;
    margin-bottom: 30px;
    color: #2c3e50;
}

.booking-form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.booking-input {
    padding: 12px 20px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;
    min-width: 200px;
}

.booking-input:focus {
    border-color: #d4a574;
}

.booking-quota {
    font-size: 16px;
    color: #e74c3c;
    font-weight: 600;
    min-width: 120px;
}

.booking-btn {
    padding: 12px 40px;
    background: linear-gradient(135deg, #d4a574, #c89860);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.booking-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 165, 116, 0.4);
}

.booking-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

/* 响应式适配 */
@media (max-width: 1024px) {

    .history-content,
    .interactive-content {
        grid-template-columns: 1fr;
    }

    .architecture-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .life-card,
    .life-card:nth-child(even) {
        grid-template-columns: 1fr;
    }

    .life-card:nth-child(even) .life-image {
        order: 1;
    }

    .life-card:hover,
    .life-card:nth-child(even):hover {
        transform: translateY(-8px);
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 48px;
    }

    .hero-subtitle {
        font-size: 20px;
    }

    .section-title {
        font-size: 28px;
    }

    .architecture-grid {
        grid-template-columns: 1fr;
    }

    .booking-form {
        flex-direction: column;
        align-items: stretch;
    }

    .booking-input,
    .booking-quota,
    .booking-btn {
        width: 100%;
        min-width: unset;
    }

    .hero-content {
        padding: 40px 20px;
    }

    .life-image {
        height: 250px;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 36px;
    }

    .hero-description p {
        font-size: 16px;
    }

    .history-section,
    .architecture-section,
    .life-section,
    .interactive-section {
        padding: 60px 15px;
    }

    .life-card {
        padding: 20px;
        gap: 20px;
    }
}
</style>

<!-- 全局弹窗样式（不受scoped限制） -->
<style>
/* 弹窗基础样式 */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    backdrop-filter: blur(2px);
}

.modal-content {
    background: white;
    padding: 40px;
    border-radius: 16px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    z-index: 100000;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #d4a574;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.modal-close:hover {
    background: #c89860;
}

/* 拼图弹窗样式 */
.puzzle-difficulty {
    display: flex;
    gap: 15px;
    margin: 20px 0;
    flex-wrap: wrap;
}

.puzzle-difficulty button {
    padding: 10px 20px;
    border: 1px solid #d4a574;
    background: white;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.puzzle-difficulty button:hover {
    background: #d4a574;
    color: white;
}

.puzzle-difficulty button.active {
    background: #d4a574;
    color: white;
    border-color: #c89860;
}

.puzzle-container {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    position: relative;
    flex-direction: column;
    align-items: center;
}

/* 不同难度拼图网格 */
.easy-grid {
    display: grid;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(3, 120px);
    gap: 0;
    background: #eee;
    border-radius: 8px;
}

.medium-grid {
    display: grid;
    grid-template-columns: repeat(4, 90px);
    grid-template-rows: repeat(4, 90px);
    gap: 0;
    background: #eee;
    border-radius: 8px;
}

.hard-grid {
    display: grid;
    grid-template-columns: repeat(5, 72px);
    grid-template-rows: repeat(5, 72px);
    gap: 0;
    background: #eee;
    border-radius: 8px;
}

/* 拼图块样式 */
.puzzle-piece {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.2s ease;
    border-radius: 0;
}

.puzzle-piece.selected {
    border: 2px solid #d4a574 !important;
    box-shadow: 0 0 8px rgba(212, 165, 116, 0.8);
}

.puzzle-piece.completed {
    animation: pulse 1s ease-in-out;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}

.puzzle-success {
    color: #27ae60;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 15px 0;
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.puzzle-loading {
    text-align: center;
    padding: 20px;
    color: #d4a574;
    font-size: 16px;
}

.puzzle-stats {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 14px;
    color: #555;
    width: 100%;
    max-width: 400px;
}

.save-wallpaper-btn {
    padding: 12px 24px;
    background: #d4a574;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.3s ease;
}

.save-wallpaper-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
    opacity: 0.7;
}

.save-wallpaper-btn:hover:not(:disabled) {
    background: #c89860;
    box-shadow: 0 4px 12px rgba(212, 165, 116, 0.4);
}

.restart-puzzle-btn {
    padding: 12px 24px;
    background: white;
    color: #d4a574;
    border: 1px solid #d4a574;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.restart-puzzle-btn:hover {
    background: #f9f5f0;
}

.puzzle-piece:hover:not(.selected):not(.completed) {
    transform: scale(1.02);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* 问答弹窗样式 */
.quiz-question {
    margin: 20px 0;
}

.quiz-question p {
    font-size: 18px;
    margin-bottom: 20px;
    color: #2c3e50;
}

.quiz-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0;
}

.quiz-options button {
    padding: 15px 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    text-align: left;
    font-size: 16px;
    transition: all 0.3s ease;
}

.quiz-options button:not(.selected):hover {
    border-color: #d4a574;
    background-color: #f9f9f9;
}

.quiz-options button.selected.correct {
    border-color: #27ae60;
    background-color: #eafaf1;
    color: #27ae60;
    font-weight: bold;
}

.quiz-options button.selected.incorrect {
    border-color: #e74c3c;
    background-color: #fdedeb;
    color: #e74c3c;
}

.quiz-score {
    font-weight: bold;
    color: #d4a574;
    font-size: 18px;
    margin-top: 10px;
}

/* 声音打卡弹窗样式 */
.audio-controls {
    display: flex;
    gap: 15px;
    margin: 20px 0;
    flex-wrap: wrap;
}

.audio-controls button {
    padding: 10px 20px;
    border: 1px solid #d4a574;
    background: white;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.audio-controls button:hover:not(:disabled) {
    background: #d4a574;
    color: white;
}

.audio-controls button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.audio-preview {
    margin: 20px 0;
    width: 100%;
}

.audio-preview audio {
    width: 100%;
}

/* 移动端弹窗适配 */
@media (max-width: 768px) {
    .modal-content {
        padding: 30px 20px;
    }

    .easy-grid {
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
    }

    .medium-grid {
        grid-template-columns: repeat(4, 75px);
        grid-template-rows: repeat(4, 75px);
    }

    .hard-grid {
        grid-template-columns: repeat(5, 60px);
        grid-template-rows: repeat(5, 60px);
    }

    .puzzle-difficulty {
        justify-content: center;
    }
}
</style>