import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import Icons from '@/components/Icons';
import GuestbookProfile from '@/components/Mac/GuestbookProfile';
import { useModeStore } from '@/store/useModeStore';
import { fetchAllGuestBooks } from '@/supabase/guestbook';

type GuestBookTypes = {
  id: number;
  profile_img?: string;
  nickname: string;
  content: string;
  password: string;
  created_at: string;
};

function GlobalSidebar() {
  const [guestBook, setGuestBook] = useState<GuestBookTypes[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const mode = useModeStore((state) => state.mode);

  const loadGuestBook = async () => {
    try {
      const data = await fetchAllGuestBooks();
      setGuestBook(data);
    } catch (error) {
      console.error('Error Loading guestBook! :', error);
    }
  };

  const handleAddGuestBook = () => {
    navigate('/guestbook/add', { replace: true });
  };

  useEffect(() => {
    if (location.state?.refresh) {
      loadGuestBook();
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    loadGuestBook();
  }, []);

  return (
    <aside
      className={`flex h-full w-full flex-col gap-11 pt-11 sm:max-w-full lg:max-w-[320px] lg:border-r ${mode === 'dark' ? 'border-r-mac_dark-gray03' : 'border-r-mac_light-gray03'}`}
    >
      <header className="flex shrink-0 items-center justify-between px-2">
        <h2 className={`fs-34 font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
          <Link to={'/guestbook'}>GuestBooks</Link>
        </h2>
        <Button
          className="fs-20 text-mac_light-blue p-2 hover:font-bold focus:font-bold active:font-bold"
          onClick={handleAddGuestBook}
        >
          <Icons type="instagram" name="create" />
        </Button>
      </header>

      <div className="scrollbar-hide flex-1 overflow-y-scroll px-4 pb-11">
        <ul className="flex flex-col">
          {guestBook.map((item) => (
            <GuestbookProfile
              key={item.id}
              id={item.id}
              nickname={item.nickname}
              profile_img={item.profile_img}
              created_at={item.created_at}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default GlobalSidebar;
