import { createClient } from '@supabase/supabase-js'

// 方案1：优先读取环境变量（线上/本地通用）
// 方案2：环境变量失效时，直接用你的固定配置（兜底，永不白屏）
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://faqtsgrwzfbljbnhrhs.supabase.co"
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_PfJeaLi5qVekPmzsJWuwbQ_H-zz6NPS"

// 初始化客户端（自带兜底，永远不会报错白屏）
export const supabase = createClient(supabaseUrl, supabaseAnonKey)