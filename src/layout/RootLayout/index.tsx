import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useModeStore } from '@/store/useModeStore';

function RootLayout() {
  const { mode } = useModeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  return (
    <section className="relative min-h-screen min-w-screen bg-[url(/images/mac_light.webp)] bg-cover bg-center bg-no-repeat">
      <Outlet />
    </section>
  );
}

export default RootLayout;
