import { createClient } from '@supabase/supabase-js'

// 这两个信息在 Supabase 后台 → Settings → API 里复制
const SUPABASE_URL = 'https://faqtsgrwzfbvljbnhrhs.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_PfJeaLi5qVekPmzsJWuwbQ_H-zz6NPS'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)