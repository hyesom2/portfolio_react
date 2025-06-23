import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { insertGuestBook } from '@/supabase/guestbook';

function GuestMemo() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
    if (!title || !nickname || !content || !password) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    try {
      await insertGuestBook(title, nickname, content, password);
      alert('방명록이 등록되었습니다!');
      navigate('/guestbook', {
        state: { refresh: true },
      });
    } catch (error) {
      console.error('저장 중 오류:', error);
      alert('방명록 저장에 실패했습니다. 다시 시도해주세요.');
    }
  };
  const handleDelete = () => {
    setTitle('');
    setNickname('');
    setContent('');
    navigate('/guestbook');
  };

  return (
    <form className="flex h-full flex-1 flex-col overflow-hidden bg-white">
      <div className="flex">
        <label>제목 : </label>
        <input
          type="text"
          placeholder="제목을 입력해 주세요."
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="flex">
        <label htmlFor="">작성자</label>
        <input
          type="text"
          placeholder="이름(닉네임)을 입력해 주세요."
          value={nickname}
          onChange={handleNickname}
        />
      </div>
      <textarea
        placeholder="남기고 싶은 말을 자유롭게 적어주세요."
        value={content}
        onChange={handleContent}
      />
      <input
        type="password"
        placeholder="2~10자의 비밀번호를 입력해주세요."
        onChange={handlePassword}
      />
      <div className="flex gap-4">
        <button type="button" onClick={handleSave}>
          저장
        </button>
        <button type="button" onClick={handleDelete}>
          취소
        </button>
        <button type="button" onClick={() => console.log('클릭하면 해당 글이 삭제되는 로직')}>
          삭제
        </button>
      </div>
    </form>
  );
}

export default GuestMemo;
