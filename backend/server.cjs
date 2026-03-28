const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// ==================== 配置图片上传 ====================
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });
// 静态托管上传图片
app.use('/uploads', express.static(uploadDir));

// ==================== 数据库配置 ====================
// 泡菜数据库
const pickleConfig = {
  host: 'localhost',
  user: 'root',
  password: 'qwe2004',
  database: 'pickle_db'
};
const picklePool = mysql.createPool(pickleConfig);

// 眉山美食数据库
const meishanConfig = {
  host: 'localhost',
  user: 'root',
  password: 'qwe2004',
  database: 'meishan_food'
};
const meishanPool = mysql.createPool(meishanConfig);

// ==================== 原有泡菜接口（无修改） ====================
app.post('/api/save-pickle', async (req, res) => {
  const { name, salt_ratio, ferment_days } = req.body;
  try {
    await picklePool.execute(
      `INSERT INTO pickle_records (name, salt_ratio, ferment_days) VALUES (?, ?, ?)`,
      [name, salt_ratio, ferment_days]
    );
    res.json({ code: 200, msg: '保存成功' });
  } catch (err) {
    res.json({ code: 500, msg: '保存失败', error: err.message });
  }
});

app.get('/api/pickle-stats', async (req, res) => {
  try {
    const [rows] = await picklePool.execute(
      `SELECT name, COUNT(*) as count FROM pickle_records GROUP BY name`
    );
    const allPickles = ['泡萝卜', '泡豇豆', '泡辣椒', '泡白菜', '泡姜', '泡黄瓜'];
    const counts = allPickles.map(pickle => {
      const item = rows.find(r => r.name === pickle);
      return item ? item.count : 0;
    });
    res.json({ code: 200, data: { names: allPickles, counts } });
  } catch (err) {
    res.json({ code: 500, msg: '获取数据失败', error: err.message });
  }
});

// ==================== 眉山美食店铺接口 ====================
// 获取所有店铺
app.get('/api/meishan/shops', async (req, res) => {
  try {
    const [data] = await meishanPool.execute('SELECT * FROM shops');
    res.json({ code: 200, data });
  } catch (err) {
    res.json({ code: 500, msg: '获取店铺失败', error: err.message });
  }
});

// 获取店铺评论
app.get('/api/meishan/reviews/:storeId', async (req, res) => {
  const { storeId } = req.params;
  try {
    const [avg] = await meishanPool.execute(
      'SELECT ROUND(AVG(score),1) AS score FROM user_reviews WHERE shop_id=?',
      [storeId]
    );
    const [comments] = await meishanPool.execute(
      'SELECT * FROM user_reviews WHERE shop_id=? ORDER BY id DESC',
      [storeId]
    );
    res.json({ code: 200, data: { score: avg[0].score || 0, comments } });
  } catch (err) {
    res.json({ code: 500, msg: '获取评论失败', error: err.message });
  }
});

// 提交评论+更新店铺评分
app.post('/api/meishan/reviews', async (req, res) => {
  const { shop_id, score, content } = req.body;
  try {
    await meishanPool.execute(
      'INSERT INTO user_reviews(shop_id, score, content) VALUES(?,?,?)',
      [shop_id, score, content]
    );
    const [avgResult] = await meishanPool.execute(
      'SELECT AVG(score) AS avg_score FROM user_reviews WHERE shop_id = ?',
      [shop_id]
    );
    const avgScore = avgResult[0].avg_score ? parseFloat(avgResult[0].avg_score).toFixed(1) : '0.0';
    await meishanPool.execute(
      'UPDATE shops SET score = ? WHERE id = ?',
      [avgScore, shop_id]
    );
    res.json({ code: 200, msg: '评价提交成功，评分已更新' });
  } catch (err) {
    res.json({ code: 500, msg: '评论提交失败', error: err.message });
  }
});

// 店铺评分排行
app.get('/api/meishan/rank', async (req, res) => {
  try {
    const [data] = await meishanPool.execute(`
      SELECT s.name, AVG(r.score) as score 
      FROM shops s LEFT JOIN user_reviews r ON s.id=r.shop_id 
      GROUP BY s.id ORDER BY score DESC
    `);
    res.json({ code: 200, data });
  } catch (err) {
    res.json({ code: 500, msg: '获取排行失败', error: err.message });
  }
});

// ==================== 评分趋势接口（完美适配前端） ====================
app.get('/api/meishan/trend', async (req, res) => {
  try {
    const [shops] = await meishanPool.execute('SELECT id, name FROM shops');
    // 前端匹配的日期标签
    const dateLabels = ['1周前', '6天前', '5天前', '4天前', '3天前', '2天前', '1天前'];
    
    const trendData = await Promise.all(shops.map(async (shop) => {
      const [dailyScores] = await meishanPool.execute(`
        SELECT 
          days_seq.days,
          COALESCE(AVG(r.score), NULL) AS avg_score
        FROM 
          (SELECT 6 AS days UNION SELECT 5 UNION SELECT 4 UNION SELECT 3 UNION SELECT 2 UNION SELECT 1 UNION SELECT 0) days_seq
        LEFT JOIN 
          user_reviews r 
          ON DATE(r.create_time) = DATE_SUB(CURDATE(), INTERVAL days_seq.days DAY) 
          AND r.shop_id = ?
        GROUP BY 
          days_seq.days
        ORDER BY 
          days_seq.days DESC
      `, [shop.id]);

      const scores = [];
      let lastValid = null;
      dailyScores.forEach(item => {
        let score = parseFloat(item.avg_score);
        if (isNaN(score) || score === 0) {
          score = lastValid !== null ? lastValid : 0;
        } else {
          lastValid = score;
        }
        scores.push(parseFloat(score.toFixed(1)));
      });
      return { name: shop.name, data: scores };
    }));

    // 返回格式100%匹配前端
    res.json({ code: 200, data: { dates: dateLabels, trend: trendData } });
  } catch (err) {
    res.json({ code: 500, msg: '获取趋势失败', error: err.message });
  }
});

// ==================== 用户打卡功能（最终修复版） ====================
// 上传打卡图片
app.post('/api/upload-checkin', upload.single('image'), async (req, res) => {
  try {
    const { shop_id } = req.body;
    if (!req.file) return res.status(400).json({ code:400, msg:'请选择图片' });
    if (!shop_id) return res.status(400).json({ code:400, msg:'请先选择打卡店铺' });

    const image_url = `/uploads/${req.file.filename}`;
    await meishanPool.execute(
      'INSERT INTO user_checkins (shop_id, image_url) VALUES (?, ?)',
      [shop_id, image_url]
    );
    res.json({ code:200, msg:'打卡成功' });
  } catch (err) {
    res.status(500).json({ code:500, msg:'上传失败', error:err.message });
  }
});

// 获取所有打卡记录（带店铺名称）
app.get('/api/checkins', async (req, res) => {
  try {
    const [rows] = await meishanPool.execute(`
      SELECT uc.id, uc.shop_id, uc.image_url, uc.create_time, s.name as shop_name
      FROM user_checkins uc
      LEFT JOIN shops s ON uc.shop_id = s.id
      ORDER BY uc.create_time DESC
    `);
    res.json({ code:200, data:rows });
  } catch (err) {
    res.status(500).json({ code:500, msg:'获取打卡数据失败', error:err.message });
  }
});

// ==================== 游客留言功能 ====================
// 提交留言
app.post('/api/visitor-message', async (req, res) => {
  try {
    const { nickname, content } = req.body;
    if (!nickname || !content) {
      return res.status(400).json({ code: 400, msg: '昵称和留言内容不能为空' });
    }
    if (content.length > 200) {
      return res.status(400).json({ code: 400, msg: '留言不能超过200字' });
    }

    await meishanPool.execute(
      'INSERT INTO visitor_messages (nickname, content) VALUES (?, ?)',
      [nickname, content]
    );
    res.json({ code: 200, msg: '留言提交成功' });
  } catch (err) {
    res.status(500).json({ code: 500, msg: '提交失败', error: err.message });
  }
});

// 获取所有留言（按时间倒序）
app.get('/api/visitor-messages', async (req, res) => {
  try {
    const [rows] = await meishanPool.execute(
      'SELECT id, nickname, content, create_time FROM visitor_messages ORDER BY create_time DESC'
    );
    res.json({ code: 200, data: rows });
  } catch (err) {
    res.status(500).json({ code: 500, msg: '获取留言失败', error: err.message });
  }
});

// 启动服务
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ 服务运行：http://localhost:${PORT}`);
  console.log(`📸 打卡图片存储目录：${uploadDir}`);
  console.log(`🍜 眉山美食 + 用户打卡功能已就绪`);
});