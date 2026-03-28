// api/index.js - Vercel 适配版（保留你所有原有逻辑）
const { createClient } = require('@supabase/supabase-js');

// Vercel 固定接口格式
export default async function handler(req, res) {
  // 配置跨域（必须加）
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 处理预检请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

  try {
    // ==============================
    // 你原来的所有查询逻辑 👇 完全不变
    // ==============================
    const { data: shops, error: errShops } = await supabase
      .from('shops').select('*');
    if (errShops) throw errShops;

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
    // Vercel 响应格式
    // ==============================
    return res.status(200).json({
      message: "✅ 两个库所有表查询全部成功！",
      meishan_food: {
        shops: shops,
        user_checkins: user_checkins,
        user_reviews: user_reviews,
        visitor_messages: visitor_messages
      },
      pickle_db: {
        pickle_records: pickle_records
      }
    });

  } catch (error) {
    return res.status(500).json({
      message: "❌ 查询失败，请检查表名是否和数据库一致",
      error: error.message
    });
  }
};