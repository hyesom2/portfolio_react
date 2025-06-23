import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { deleteGuestBook, fetchGuestBook, updateGuestBook } from '@/supabase/guestbook';

type GuestBookTypes = {
  title: string;
  content: string;
  password: string;
};

function GuestDetail() {
  const [guestBook, setGuestBook] = useState<GuestBookTypes | null>();
  const [isEditing, setIsEditing] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [deletePassword, setDeletePassword] = useState('');
  const [error, setError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const nickname = searchParams.get('nickname');

  useEffect(() => {
    if (!nickname) return;

    fetchGuestBook(nickname)
      .then((data) => {
        setGuestBook(data);
        setEditTitle(data?.title || '');
        setEditContent(data?.content || '');
        console.log('guestBook:', data);
      })
      .catch((err) => {
        console.error('Error fetching guestbook:', err.message);
      });
  }, [nickname]);

  const handleUpdate = async () => {
    if (!nickname) return;

    try {
      const updatedData = await updateGuestBook(nickname, {
        title: editTitle,
        content: editContent,
      });
      setGuestBook(updatedData);
      setIsEditing(false);
      setError('');
    } catch (err) {
      console.error('Error updating guestbook:', err);
      setError('수정 중 오류가 발생했습니다.');
    }
  };

  const handleDelete = () => {
    setIsDelete(true);
    setError('');
  };

  const handleConfirmDelete = async () => {
    if (!nickname || !guestBook) return;

    if (deletePassword !== guestBook.password) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      await deleteGuestBook(nickname);
      navigate('/guestbook');
    } catch (err) {
      console.error('Error deleting guestbook:', err);
      setError('삭제 중 오류가 발생했습니다.');
    }
  };

  const handleCancelDelete = () => {
    setIsDelete(false);
    setDeletePassword('');
    setError('');
  };

  return (
    <section className="flex h-full flex-1 flex-col overflow-hidden bg-white">
      {error && (
        <div className="mb-4 rounded border border-red-400 bg-red-100 p-3 text-red-700">
          {error}
        </div>
      )}

      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="제목"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="mb-4 rounded border border-gray-300 p-2"
          />
          <textarea
            placeholder="내용"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="mb-4 h-32 resize-none rounded border border-gray-300 p-2"
          />
        </>
      ) : (
        <>
          <h1 className="mb-4 text-2xl font-bold">{guestBook?.title}</h1>
          <p className="mb-4">{guestBook?.content}</p>
        </>
      )}

      {isDelete && (
        <div className="mb-4 rounded border bg-gray-50 p-4">
          <p className="mb-2 text-sm text-gray-600">삭제하려면 비밀번호를 입력하세요:</p>
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={deletePassword}
            onChange={(e) => setDeletePassword(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleConfirmDelete();
              }
            }}
          />
        </div>
      )}

      <div className="flex gap-4">
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={handleUpdate}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              저장
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setEditTitle(guestBook?.title || '');
                setEditContent(guestBook?.content || '');
                setError('');
              }}
              className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            >
              취소
            </button>
          </>
        ) : isDelete ? (
          <>
            <button
              type="button"
              onClick={handleConfirmDelete}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              삭제
            </button>
            <button
              type="button"
              onClick={handleCancelDelete}
              className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              수정
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              삭제
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default GuestDetail;
