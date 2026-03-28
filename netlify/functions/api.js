const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

exports.handler = async (event, context) => {
  try {
    const { data, error } = await supabase
      .from('your_table_name')
      .select('*');

    if (error) throw error;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: '✅ 连接 Supabase 成功！',
        data: data
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: '❌ 连接失败',
        error: err.message
      })
    };
  }
};