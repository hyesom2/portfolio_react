import { Outlet, useLocation } from 'react-router-dom';

import GlobalSidebar from '@/components/Mac/GlobalSidebar';
import { GuestBookMain } from '@/layout';
import WindowFrame from '@/layout/WindowFrame';

function GuestBook() {
  const { pathname, search } = useLocation();
  const hasIdQuery = new URLSearchParams(search).has('id');
  const isRootPath = pathname === '/guestbook' && !hasIdQuery;

  return (
    <WindowFrame className="relative flex h-full pt-7">
      <h1 className="sr-only">GuestBook</h1>
      <GlobalSidebar />
      {isRootPath ? <GuestBookMain /> : <Outlet />}
    </WindowFrame>
  );
}

export default GuestBook;
