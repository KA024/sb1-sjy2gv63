import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Replace with your own Supabase project details
const supabaseUrl = 'https://your-project.supabase.co';
const supabaseAnonKey = 'your-anon-key';

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
        