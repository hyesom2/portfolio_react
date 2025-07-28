import { Outlet, useLocation } from 'react-router-dom';

import GlobalSidebar from '@/components/Mac/GlobalSidebar';
import useDeviceResize from '@/hooks/useDeviceResize';
import { GuestBookMain } from '@/layout';
import WindowFrame from '@/layout/WindowFrame';
import { useModeStore } from '@/store/useModeStore';
import { useResponsiveStore } from '@/store/useResponsiveStore';

function GuestBook() {
  const { pathname, search } = useLocation();
  const mode = useModeStore((state) => state.mode);
  const isTablet = useResponsiveStore((state) => state.isTablet);
  const hasIdQuery = new URLSearchParams(search).has('id');
  const isRootPath = pathname === '/guestbook' && !hasIdQuery;

  useDeviceResize();

  return (
    <WindowFrame
      className={`relative flex h-full flex-col pt-7 lg:flex-row ${mode === 'dark' ? 'bg-black' : 'bg-mac_light-gray06'}`}
    >
      <h1 className="sr-only">GuestBook</h1>
      <GlobalSidebar />
      {isRootPath ? isTablet ? null : <GuestBookMain /> : <Outlet />}
    </WindowFrame>
  );
}

export default GuestBook;
