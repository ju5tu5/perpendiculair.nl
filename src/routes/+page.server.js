import { supabase } from '$lib/supabaseClient'

export async function load() {
  const { data } = await supabase.from('stuff').select()
  return {
    stuff: data ?? [],
  }
}
