import { Outlet, useLocation } from 'react-router-dom';

import GlobalSidebar from '@/components/Mac/GlobalSidebar';
import useDeviceResize from '@/hooks/useDeviceResize';
import { WindowFrame } from '@/layout';
import ProfileMain from '@/layout/Profile/Main';
import { useModeStore } from '@/store/useModeStore';
import { useResponsiveStore } from '@/store/useResponsiveStore';

function Finder() {
  const mode = useModeStore((state) => state.mode);
  const isTablet = useResponsiveStore((state) => state.isTablet);
  const { pathname, search } = useLocation();

  const hasIdQuery = new URLSearchParams(search).has('id');
  const isRootPath = pathname === '/guestbook' && !hasIdQuery;

  useDeviceResize();

  return (
    <WindowFrame
      className={`relative flex h-full flex-col pt-7 lg:flex-row ${mode === 'dark' ? 'bg-black' : 'bg-mac_light-gray06'}`}
    >
      <h1 className="sr-only">Profile</h1>
      <GlobalSidebar />
      {isRootPath ? isTablet ? null : <ProfileMain /> : <Outlet />}
    </WindowFrame>
  );
}

export default Finder;
