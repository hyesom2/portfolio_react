import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import Icons from '@/components/Icons';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import useDeviceResize from '@/hooks/useDeviceResize';
import { useAlertStore } from '@/store/useAlertStore';
import { useModeStore } from '@/store/useModeStore';
import { useResponsiveStore } from '@/store/useResponsiveStore';
import { insertGuestBook } from '@/supabase/guestbook';

function GuestMemo() {
  const navigate = useNavigate();
  const mode = useModeStore((state) => state.mode);
  const isTablet = useResponsiveStore((state) => state.isTablet);
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

  useDeviceResize();

  return (
    <form
      className={`scrollbar-hide fixed top-0 right-0 bottom-0 left-0 flex flex-col items-start gap-4 overflow-y-scroll px-6 pt-7 pb-7 lg:relative lg:w-full lg:bg-transparent lg:px-16 lg:py-11 ${mode === 'dark' ? 'bg-black' : 'bg-mac_light-gray06'}`}
    >
      {isTablet ? (
        <button type="button" onClick={handleCancel} className="pt-4 pl-2">
          <Icons
            type="instagram"
            name="chevron-left"
            className={`fs-20 font-bold ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
          />
        </button>
      ) : null}

      <div className="flex w-full flex-col gap-2">
        <Input
          id="author"
          label="작성자"
          type="text"
          placeholder="2 ~ 10자의 이름(닉네임)을 입력해 주세요."
          min={2}
          max={10}
          value={nickname}
          onChange={handleNickname}
        />
        <Input
          id="profile_img"
          type="file"
          label="프로필 이미지"
          accept=".png, .jpg, .jpeg"
          onChange={handleImageUpload}
        />
        <Textarea
          id="message"
          label="내용"
          placeholder="남기고 싶은 말을 자유롭게 적어주세요."
          value={content}
          onChange={handleContent}
        />
        <Input
          label="비밀번호"
          id="password"
          type="password"
          placeholder="2 ~ 10자의 비밀번호를 입력해 주세요."
          min={2}
          max={10}
          value={password}
          onChange={handlePassword}
        />
        <div className="flex justify-center gap-1">
          <Button type="save" onClick={handleSave}>
            저장
          </Button>
          <Button type="cancel" onClick={handleCancel}>
            취소
          </Button>
        </div>
      </div>
    </form>
  );
}

export default GuestMemo;
