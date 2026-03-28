const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event, context) => {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

  try {
    // 测试查询（表名先随便写）
    const { data, error } = await supabase
      .from('your_table_name')
      .select('*');

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "✅ 连接 Supabase 成功！", data })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "❌ 连接失败", error: err.message })
    };
  }
};