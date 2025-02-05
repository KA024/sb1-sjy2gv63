import { supabase } from './supabase';
import type { Post } from '../types/database.types';

export async function createPost(userId: string, content: string, mediaFile?: File): Promise<{ post: Post | null; error: Error | null }> {
  try {
    let mediaUrl = null;
    let mediaType = null;

    if (mediaFile) {
      const fileExt = mediaFile.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${userId}/${fileName}`;

      mediaType = mediaFile.type.startsWith('image/') ? 'image' : 'video';

      const { error: uploadError } = await supabase.storage
        .from('media')
        .upload(filePath, mediaFile);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(filePath);

      mediaUrl = publicUrl;
    }

    const { data, error } = await supabase
      .from('posts')
      .insert({
        user_id: userId,
        content,
        media_url: mediaUrl,
        media_type: mediaType,
      })
      .select()
      .single();

    if (error) throw error;

    return { post: data, error: null };
  } catch (error) {
    return { post: null, error: error as Error };
  }
}

export async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      profiles (
        username,
        full_name,
        avatar_url
      )
    `)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}