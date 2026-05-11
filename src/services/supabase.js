import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://ofuxkposphpcuxwgtlsm.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mdXhrcG9zcGhwY3V4d2d0bHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3OTc3ODIsImV4cCI6MjA5MjM3Mzc4Mn0.i1meBB99yNAOTE-eNKh8EJe8Wsalatup52CEtObPh3E";
// const supabase = createClient(supabaseUrl, supabaseKey);


export const supabaseUrl = "https://kmnbwcjohrzwjzubycqg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttbmJ3Y2pvaHJ6d2p6dWJ5Y3FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODQ4ODkyMSwiZXhwIjoyMDk0MDY0OTIxfQ.0ZtQUKN8bjWbAc38krXzOd4VdMTy2SVqWoqsNLA-EJQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
