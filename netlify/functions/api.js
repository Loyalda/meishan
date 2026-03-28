const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event, context) => {
  // 从 Netlify 环境变量读取 Supabase 连接信息
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

  try {
    // ==============================
    // 1. 查询 meishan_food 库的 4 张表
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

    // ==============================
    // 2. 查询 pickle_db 库的 1 张表
    // ==============================
    const { data: pickle_records, error: errPickle } = await supabase
      .from('pickle_records').select('*');
    if (errPickle) throw errPickle;

    // ==============================
    // 3. 返回所有表数据
    // ==============================
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // 允许前端跨域调用
      },
      body: JSON.stringify({
        message: "✅ 两个库所有表查询成功！",
        meishan_food: {
          shops: shops,
          user_checkins: user_checkins,
          user_reviews: user_reviews,
          visitor_messages: visitor_messages
        },
        pickle_db: {
          pickle_records: pickle_records
        }
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "❌ 查询失败",
        error: error.message
      })
    };
  }
};