// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR_PROJECT_ID.supabase.co';
const supabaseAnonKey = 'YOUR_PUBLIC_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
