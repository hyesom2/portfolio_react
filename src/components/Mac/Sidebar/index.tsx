import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '@/components/Button';
import Icons from '@/components/Icons';
import { fetchAllGuestBooks } from '@/supabase/guestbook';

type GuestBookTypes = {
  id: number;
  nickname: string;
  content: string;
  password: string;
  created_at: string;
};

function Sidebar() {
  const [guestBook, setGuestBook] = useState<GuestBookTypes[]>([]);
  const location = useLocation();

  const loadGuestBook = async () => {
    try {
      const data = await fetchAllGuestBooks();
      setGuestBook(data);
    } catch (error) {
      console.error('Error Loading guestBook! :', error);
    }
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
    <aside className="h-full w-full max-w-40 overflow-hidden px-3">
      <h2 className="fs-14 text-mac_light-gray02 mt-6 mb-3 font-bold">
        <Link to={'/guestbook'}>방명록 목록</Link>
      </h2>
      <ul className="mb-6 flex flex-col gap-2">
        {guestBook.map((item) => (
          <li
            className="fs-13 text-mac_light-font-active flex items-center justify-start gap-2 hover:font-bold focus:font-bold active:font-bold"
            key={item.id}
          >
            <Icons type="instagram" name="profile" className="fs-16" />
            <Link to={`/guestbook?nickname=${encodeURIComponent(item.nickname)}`}>
              {item.nickname}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <Button className="fs-20 text-mac_light-gray02">
          <Link to="/guestbook/add" className="w-full">
            <Icons type="instagram" name="create" />
          </Link>
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;
