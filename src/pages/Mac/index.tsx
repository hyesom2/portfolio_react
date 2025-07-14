import { Outlet } from 'react-router-dom';

import GlobalAlert from '@/components/GlobalAlert';
import Dock from '@/components/Mac/Dock';
import Menubar from '@/components/Mac/Menubar';
import Overlay from '@/components/Mac/Overlay';
import { useAlertStore } from '@/store/useAlertStore';

function Mac() {
  const isAlertVisible = useAlertStore((state) => state.visible);

  return (
    <section className="relative">
      <Menubar />
      <Outlet />
      <Dock />
      {isAlertVisible && (
        <Overlay>
          <GlobalAlert />
        </Overlay>
      )}
    </section>
  );
}

export default Mac;
