import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gkgzgermnlqtheawyhwr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZ3pnZXJtbmxxdGhlYXd5aHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NDQ3NzcsImV4cCI6MjA4NTAyMDc3N30.XMzFBWT2ropJXosmhEkEkZeZ1zSITF2I9szvS9PdeIY";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});