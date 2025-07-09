import { useLocation } from 'react-router-dom';

import GuestbookSidebar from '@/components/Mac/GlobalSidebar/GuestbookSidebar';
import ProfileSidebar from '@/components/Mac/GlobalSidebar/ProfileSidebar';

function GlobalSidebar() {
  const location = useLocation();

  const renderSidebar = () => {
    if (location.pathname.startsWith('/profile')) {
      return <ProfileSidebar />;
    }
    if (location.pathname.startsWith('/guestbook')) {
      return <GuestbookSidebar />;
    }
  };

  return <>{renderSidebar()}</>;
}

export default GlobalSidebar;
