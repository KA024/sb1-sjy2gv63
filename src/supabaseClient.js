import { createClient } from '@supabase/supabase-js';

// Replace with your own Supabase project details
const supabaseUrl = 'https://your-project.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 