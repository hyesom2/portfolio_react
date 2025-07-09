import { Outlet, useLocation } from 'react-router-dom';

import GlobalSidebar from '@/components/Mac/GlobalSidebar';
import { WindowFrame } from '@/layout';
import ProfileMain from '@/layout/Profile/Main';
import { useModeStore } from '@/store/useModeStore';

function Finder() {
  const mode = useModeStore((state) => state.mode);
  const { pathname, search } = useLocation();
  const hasIdQuery = new URLSearchParams(search).has('id');
  const isRootPath = pathname === '/guestbook' && !hasIdQuery;

  return (
    <WindowFrame
      className={`relative flex h-full pt-7 ${mode === 'dark' ? 'bg-black' : 'bg-mac_light-gray06'}`}
    >
      <h1 className="sr-only">Profile</h1>
      <GlobalSidebar />
      {isRootPath ? <ProfileMain /> : <Outlet />}
    </WindowFrame>
  );
}

export default Finder;
