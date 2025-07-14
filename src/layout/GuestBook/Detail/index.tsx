import { AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Button from '@/components/Button';
import GlobalActionSheet from '@/components/GlobalActionSheet';
import Icons from '@/components/Icons';
import ChatBubble from '@/components/Mac/ChatBubble';
import { useAlertStore } from '@/store/useAlertStore';
import { useGuestBookStore } from '@/store/useGuestBookStore';
import { useModeStore } from '@/store/useModeStore';
import { deleteGuestBook, fetchGuestBook, updateGuestBook } from '@/supabase/guestbook';

type GuestBookTypes = {
  profile_img?: string;
  nickname: string;
  content: string;
  password: string;
  created_at: string;
};

function GuestDetail() {
  const [guestBook, setGuestBook] = useState<GuestBookTypes | null>();
  const [editContent, setEditContent] = useState('');
  const [showActionSheet, setShowActionSheet] = useState(false);
  const { isEdit, setIsEdit } = useGuestBookStore();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const mode = useModeStore((state) => state.mode);
  const showAlert = useAlertStore((state) => state.showAlert);
  const hideAlert = useAlertStore((state) => state.hideAlert);

  useEffect(() => {
    if (!id) return;

    fetchGuestBook(id)
      .then((data) => {
        setGuestBook(data);
        setEditContent(data?.content || '');
        console.log('guestBook:', data);
      })
      .catch((err) => {
        console.error('Error fetching guestbook:', err.message);
      });
  }, [id]);

  // > 더보기(GlobalActionSheet slide up)
  const handleMore = () => {
    setShowActionSheet(true);
  };

  // > 더보기 취소(GlobalActionSheet slide down)
  const handleCancel = () => {
    // setIsDelete(false);
    // setDeletePassword('');
    setShowActionSheet(false);
  };

  // > 더보기 수정(GlobalActionSheet Edit)
  const handleEdit = () => {
    showAlert({
      type: 'input',
      title: '방명록 수정',
      content: '2 ~ 10자의 비밀번호를 입력해 주세요.',
      onConfirm: (inputPassword) => {
        if (!inputPassword || inputPassword.length === 0) {
          console.log('패스워드를 입력해 주세요.');
          return;
        }
        if (inputPassword === guestBook?.password) {
          console.log('패스워드가 일치합니다.');
          setIsEdit(true);
          setShowActionSheet(false);
        } else {
          console.log('패스워드가 일치하지 않습니다.');
        }
      },
      onCancel: () => {
        hideAlert();
      },
    });
  };

  // > 더보기 삭제(GlobalActionSheets Delete)
  const handleDelete = () => {
    if (!id) return;

    showAlert({
      type: 'input',
      title: '방명록을 삭제 하시겠습니까?',
      content: '2 ~ 10자의 비밀번호를 입력해 주세요.',
      onConfirm: async (inputPassword) => {
        if (!inputPassword || inputPassword.length === 0) {
          console.log('패스워드를 입력해 주세요.');
          return;
        }
        if (inputPassword === guestBook?.password) {
          try {
            await deleteGuestBook(id);
            navigate('/guestbook');
          } catch (err) {
            console.error('Error deleting guestbook:', err);
          }
          setShowActionSheet(false);
        } else {
          console.log('패스워드가 일치하지 않습니다.');
        }
      },
      onCancel: () => {
        hideAlert();
      },
    });
  };

  // > isEdit 상태에서 저장버튼 클릭 시
  const handleUpdate = async () => {
    if (!id) return;

    try {
      const updatedData = await updateGuestBook(id, {
        content: editContent,
      });

      setGuestBook(updatedData);
      setIsEdit(false);
    } catch (err) {
      console.error('Error updating guestbook:', err);
    }
  };

  return (
    <section className={`relative flex h-full flex-1 flex-col p-4`}>
      {isEdit ? (
        <textarea
          placeholder="내용"
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className={`mb-4 h-32 resize-none rounded border border-gray-300 p-2 ${mode === 'dark' ? 'text-white' : 'text-black'}`}
        />
      ) : (
        <div className="flex flex-row items-center justify-start gap-2">
          <ChatBubble>{guestBook?.content}</ChatBubble>
          <Button
            className="fs-30 bg-mac_light-gray06 relative left-3 flex items-center justify-center rounded-full p-1"
            onClick={handleMore}
          >
            <Icons type="instagram" name="options" />
          </Button>
        </div>
      )}
      <div className="flex gap-4">
        {isEdit && (
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
                setIsEdit(false);
                setEditContent(guestBook?.content || '');
              }}
              className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            >
              취소
            </button>
          </>
        )}
      </div>

      <AnimatePresence>
        {showActionSheet && (
          <GlobalActionSheet onEdit={handleEdit} onDelete={handleDelete} onCancel={handleCancel} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default GuestDetail;
