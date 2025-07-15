import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://avwsfpcbxisbpqwozhnf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2d3NmcGNieGlzYnBxd296aG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0NjA4MjMsImV4cCI6MjA2ODAzNjgyM30.PyPkS-mmOuPoMQJFNZklI3FNM6VEGg0wX-ho_IFOAQQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
