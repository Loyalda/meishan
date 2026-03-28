// api/index.js - 修复版（Vercel 兼容）
const { createClient } = require('@supabase/supabase-js');

export default async function handler(req, res) {
  // 跨域配置
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // 处理预检请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 连接 Supabase
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

  // ✅ 修复：使用 req.url 替代 req.path
  if (req.method === 'POST' && req.url === '/api/upload-checkin') {
    try {
      const { image, shop_id } = req.body;
      const fileName = `checkin/${Date.now()}_${image.name}`;

      const { error: uploadError } = await supabase.storage
        .from('uploads')
        .upload(fileName, image, { contentType: image.type, upsert: true });

      if (uploadError) throw uploadError;
      const { data: { publicUrl } } = supabase.storage.from('uploads').getPublicUrl(fileName);

      const { error: insertError } = await supabase
        .from('user_checkins')
        .insert([{ shop_id, image_url: publicUrl, created_at: new Date() }]);

      if (insertError) throw insertError;
      return res.status(200).json({ success: true, message: "打卡成功", imageUrl: publicUrl });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  if (req.method === 'GET' && req.url === '/api/meishan/shops') {
    try {
      const { data: shops } = await supabase.from('shops').select('*');
      const shopsWithCloudImages = shops.map(shop => ({
        ...shop,
        image_url: supabase.storage.from('uploads').getPublicUrl(shop.image_url).data.publicUrl
      }));
      return res.status(200).json(shopsWithCloudImages);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'GET' && req.url === '/api/checkins') {
    try {
      const { data: user_checkins } = await supabase.from('user_checkins').select('*');
      return res.status(200).json(user_checkins);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'GET' && req.url === '/api/meishan/trend') {
    try {
      const { data: pickle_records } = await supabase.from('pickle_records').select('*');
      return res.status(200).json(pickle_records);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'GET' && req.url === '/api/visitor-messages') {
    try {
      const { data: visitor_messages } = await supabase.from('visitor_messages').select('*');
      return res.status(200).json(visitor_messages);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'GET' && req.url === '/api/pickle-stats') {
    try {
      const { data: pickle_records } = await supabase.from('pickle_records').select('*');
      return res.status(200).json({ total: pickle_records.length, list: pickle_records });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'GET' && req.url === '/api') {
    try {
      const { data: shops } = await supabase.from('shops').select('*');
      const shopsWithCloudImages = shops.map(shop => ({
        ...shop,
        image_url: supabase.storage.from('uploads').getPublicUrl(shop.image_url).data.publicUrl
      }));

      const { data: user_checkins } = await supabase.from('user_checkins').select('*');
      const { data: user_reviews } = await supabase.from('user_reviews').select('*');
      const { data: visitor_messages } = await supabase.from('visitor_messages').select('*');
      const { data: pickle_records } = await supabase.from('pickle_records').select('*');

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
      return res.status(500).json({
        message: "❌ 接口请求失败",
        error: error.message
      });
    }
  }

  // 未知路径
  return res.status(404).json({ error: "接口不存在" });
}
