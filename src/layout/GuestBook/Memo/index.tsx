import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAlertStore } from '@/store/useAlertStore';
import { insertGuestBook } from '@/supabase/guestbook';

function GuestMemo() {
  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');

  const { showAlert } = useAlertStore();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImgFile(file);
    }
  };

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSave = async () => {
    if (!nickname || !content || !password) {
      showAlert({ type: 'one', title: '입력 확인', content: '모든 값을 입력해주세요.' });
      return;
    }

    try {
      await insertGuestBook(imgFile, nickname, content, password);
      showAlert({
        type: 'one',
        title: '방명록 등록 완료',
        content: '방명록이 등록되었습니다!',
        onConfirm: () => {
          navigate('/guestbook', {
            state: { refresh: true },
            replace: true,
          });
        },
      });
    } catch (error) {
      console.error('저장 중 오류:', error);
      showAlert({
        type: 'one',
        title: '저장 중 오류',
        content: '방명록 저장에 실패했습니다. 다시 시도해주세요.',
      });
    }
  };

  const handleCancel = () => {
    navigate('/guestbook', { replace: true });
  };

  return (
    <form className="flex h-full flex-1 flex-col overflow-hidden bg-white">
      <div className="flex">
        <label htmlFor="">작성자 :</label>
        <input
          type="text"
          placeholder="2~10자의 이름(닉네임)을 입력해 주세요."
          value={nickname}
          onChange={handleNickname}
          minLength={2}
          maxLength={10}
        />
      </div>
      <div>
        <label htmlFor="profile_img">프로필에 등록할 이미지를 선택해주세요 :</label>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          id="profile_img"
          name="profile_img"
          onChange={handleImageUpload}
        />
        {imgFile && (
          <div className="mt-2">
            <p>선택된 파일: {imgFile.name}</p>
          </div>
        )}
      </div>

      <textarea
        placeholder="남기고 싶은 말을 자유롭게 적어주세요."
        value={content}
        onChange={handleContent}
      />
      <input
        type="password"
        placeholder="2~10자의 비밀번호를 입력해주세요."
        value={password}
        onChange={handlePassword}
        minLength={2}
        maxLength={10}
      />
      <div className="flex gap-4">
        <button type="button" onClick={handleSave}>
          저장
        </button>
        <button type="button" onClick={handleCancel}>
          취소
        </button>
      </div>
    </form>
  );
}

export default GuestMemo;
