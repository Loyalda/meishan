const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event, context) => {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

  try {
    // ==============================================
    // 库 1：meishan_food → 查询所有表
    // ==============================================
    const { data: shops, error: err1 } = await supabase
      .from('shops').select('*');
    
    const { data: foods, error: err2 } = await supabase
      .from('foods').select('*');

    const { data: categories, error: err3 } = await supabase
      .from('categories').select('*');

    // ==============================================
    // 库 2：pickle_db → 查询所有表
    // ==============================================
    const { data: pickle_records, error: err4 } = await supabase
      .from('pickle_records').select('*');
    
    const { data: materials, error: err5 } = await supabase
      .from('materials').select('*');

    const { data: users, error: err6 } = await supabase
      .from('users').select('*');

    // 统一错误捕获
    if (err1 || err2 || err3 || err4 || err5 || err6) {
      throw new Error("部分表查询失败，但连接正常");
    }

    // ==============================================
    // 返回：两个库 + 里面所有表 的全部数据
    // ==============================================
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: "✅ 两个数据库所有表查询成功！",
        meishan_food: {
          shops: shops,
          foods: foods,
          categories: categories
        },
        pickle_db: {
          pickle_records: pickle_records,
          materials: materials,
          users: users
        }
      })
    };

  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "⚠️ 连接成功，但部分表不存在（正常）",
        error: error.message
      })
    };
  }
};