import { supabase } from '@/supabase';

export async function fetchAllGuestBooks() {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function fetchGuestBook(nickname: string) {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .eq('nickname', nickname)
    .single();

  if (error) console.error('Error fetching guestbook :', error);
  return data;
}

export async function insertGuestBook(
  title: string,
  nickname: string,
  content: string,
  password: string,
) {
  const { data, error } = await supabase
    .from('guestbook')
    .insert([{ title: title, nickname: nickname, content: content, password: password }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateGuestBook(
  nickname: string,
  updatedData: Partial<{ title: string; content: string }>,
) {
  const { data, error } = await supabase
    .from('guestbook')
    .update(updatedData)
    .eq('nickname', nickname)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteGuestBook(nickname: string) {
  console.log('deleteGuestBook 호출됨, nickname:', nickname);

  const { data, error } = await supabase
    .from('guestbook')
    .delete()
    .eq('nickname', nickname)
    .select();

  console.log('삭제 결과:', { data, error });

  if (error) {
    console.error('삭제 에러:', error);
    throw error;
  }

  if (!data || data.length === 0) {
    throw new Error('삭제할 데이터를 찾을 수 없습니다.');
  }

  return data;
}
