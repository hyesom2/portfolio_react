import { Outlet } from 'react-router-dom';

import { useModeStore } from '@/store/useModeStore';

function RootLayout() {
  const { mode } = useModeStore();

  return (
    <section
      className={`relative min-h-screen min-w-screen ${mode === 'dark' ? 'bg-[url(/images/mac_dark.webp)]' : 'bg-[url(/images/mac_light.webp)]'} bg-cover bg-center bg-no-repeat`}
    >
      <Outlet />
    </section>
  );
}

export default RootLayout;
