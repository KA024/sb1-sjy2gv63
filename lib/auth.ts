import { supabase } from './supabase';
import type { AuthError, User } from '@supabase/supabase-js';

export async function signUp(email: string, password: string, fullName: string): Promise<{ user: User | null; error: AuthError | null }> {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (data.user) {
    // Create profile after signup
    const username = email.split('@')[0];
    await supabase.from('profiles').insert({
      id: data.user.id,
      username,
      full_name: fullName,
    });
  }

  return { user: data.user, error };
}

export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function resetPassword(email: string) {
  return supabase.auth.resetPasswordForEmail(email);
}