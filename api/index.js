// api/index.js - Vercel 最终终极版（课程作业100%完成）
const { createClient } = require('@supabase/supabase-js');

// Vercel 服务器接口固定格式
export default async function handler(req, res) {
  // 配置跨域（允许前端访问接口，必须配置）
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // 处理浏览器预检请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 连接 Supabase 云端数据库（自动读取 Vercel 环境变量）
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

  // ==============================
  // ✅ 适配你的前端：打卡图片上传接口 /api/upload-checkin
  // ==============================
  if (req.method === 'POST' && req.path === '/api/upload-checkin') {
    try {
      // 获取前端上传的图片和店铺ID
      const { image, shop_id } = req.body;

      // 生成唯一文件名
      const fileName = `checkin/${Date.now()}_${image.name}`;

      // 上传图片到 Supabase 云端存储
      const { error: uploadError } = await supabase.storage
        .from('uploads')
        .upload(fileName, image, {
          contentType: image.type,
          upsert: true
        });

      if (uploadError) throw uploadError;

      // 获取云端图片链接
      const { data: { publicUrl } } = supabase.storage
        .from('uploads')
        .getPublicUrl(fileName);

      // 将打卡记录存入数据库
      const { error: insertError } = await supabase
        .from('user_checkins')
        .insert([
          {
            shop_id,
            image_url: publicUrl,
            created_at: new Date()
          }
        ]);

      if (insertError) throw insertError;

      return res.status(200).json({
        success: true,
        message: "✅ 打卡上传成功！图片已保存至云端",
        imageUrl: publicUrl
      });

    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "❌ 打卡失败",
        error: err.message
      });
    }
  }

  // ==============================
  // 1. 查询店铺表 + 自动生成【云端图片链接】
  // ==============================
  try {
    const { data: shops, error: errShops } = await supabase
      .from('shops').select('*');
    if (errShops) throw errShops;

    // 核心：将本地图片路径转换为 Supabase 云端公开链接
    const shopsWithCloudImages = shops.map(shop => ({
      ...shop,
      image_url: supabase.storage.from('uploads').getPublicUrl(shop.image_url).data.publicUrl
    }));

    // ==============================
    // 2. 查询其他所有数据表（文字内容：留言、评论等）
    // ==============================
    const { data: user_checkins, error: errCheckins } = await supabase
      .from('user_checkins').select('*');
    if (errCheckins) throw errCheckins;

    const { data: user_reviews, error: errReviews } = await supabase
      .from('user_reviews').select('*');
    if (errReviews) throw errReviews;

    const { data: visitor_messages, error: errMessages } = await supabase
      .from('visitor_messages').select('*');
    if (errMessages) throw errMessages;

    const { data: pickle_records, error: errPickle } = await supabase
      .from('pickle_records').select('*');
    if (errPickle) throw errPickle;

    // ==============================
    // 3. 返回数据给前端（包含云端图片+所有文字数据）
    // ==============================
    return res.status(200).json({
      message: "✅ 接口部署成功！数据+图片均加载自云端",
      meishan_food: {
        shops: shopsWithCloudImages,
        user_checkins: user_checkins,
        user_reviews: user_reviews,
        visitor_messages: visitor_messages
      },
      pickle_db: {
        pickle_records: pickle_records
      }
    });

  } catch (error) {
    // 错误处理
    return res.status(500).json({
      message: "❌ 接口请求失败",
      error: error.message
    });
  }
}