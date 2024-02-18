import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bopnrvadbakdyexbizdw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcG5ydmFkYmFrZHlleGJpemR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2NDM5ODgsImV4cCI6MjAyMzIxOTk4OH0.lcPfOiaWMve-DIyuTUVr9BpD2sJwI9sEqdXSEK7LFcw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
