import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./types";

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
// This function creates a Supabase client for browser usage, using environment variables for configuration.
