import { createClient } from '@supabase/supabase-js'

// 这两个信息在 Supabase 后台 → Settings → API 里复制
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)