import { Outlet, useLocation } from 'react-router-dom';

import Sidebar from '@/components/Mac/Sidebar';
import { GuestBookMain } from '@/layout';
import WindowFrame from '@/layout/WindowFrame';

function GuestBook() {
  const { pathname, search } = useLocation();
  const hasNicknameQuery = new URLSearchParams(search).has('nickname');
  const isRootPath = pathname === '/guestbook' && !hasNicknameQuery;

  return (
    <WindowFrame className="relative flex h-full pt-7">
      <h1 className="sr-only">GuestBook</h1>
      <Sidebar />
      {isRootPath ? <GuestBookMain /> : <Outlet />}
    </WindowFrame>
  );
}

export default GuestBook;
