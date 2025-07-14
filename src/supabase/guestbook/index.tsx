import { supabase } from '@/supabase';

export async function fetchAllGuestBooks() {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function fetchGuestBook(id: string) {
  const { data, error } = await supabase.from('guestbook').select('*').eq('id', id).single();

  if (error) throw error;
  return data;
}

export async function insertGuestBook(
  imgFile: File | null,
  nickname: string,
  content: string,
  password: string,
) {
  let imgUrl = '';

  if (imgFile) {
    const fileExt = imgFile.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `guestbook/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('guestbook-images')
      .upload(filePath, imgFile);

    if (uploadError) {
      throw new Error(`이미지 업로드 실패: ${uploadError.message}`);
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from('guestbook-images').getPublicUrl(filePath);

    imgUrl = publicUrl;
  }

  const { data, error } = await supabase
    .from('guestbook')
    .insert([
      {
        profile_img: imgUrl,
        nickname: nickname,
        content: content,
        password: password,
      },
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateGuestBook(id: string, updatedData: Partial<{ content: string }>) {
  const { data, error } = await supabase
    .from('guestbook')
    .update(updatedData)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteGuestBook(id: string) {
  const { data, error } = await supabase.from('guestbook').delete().eq('id', id).select();

  if (error) {
    console.error('삭제 에러:', error);
    throw error;
  }

  if (!data || data.length === 0) {
    throw new Error('삭제할 데이터를 찾을 수 없습니다.');
  }

  return data;
}
