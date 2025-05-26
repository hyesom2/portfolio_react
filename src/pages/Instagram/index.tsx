import { Outlet } from 'react-router-dom';

import Menubar from '@/components/Instagram/Menubar';
import WindowFrame from '@/layout/WindowFrame';
import { useModeStore } from '@/store/useModeStore';

function Instagram() {
  const mode = useModeStore((state) => state.mode);

  return (
    <WindowFrame
      className={`relative flex h-full flex-col md:flex-row ${mode === 'dark' ? 'bg-black' : ''}`}
    >
      <h1 className="sr-only">Instagram</h1>
      <aside className="w-full md:w-60">
        <Menubar />
      </aside>
      <main
        className={`scrollbar-hide h-full flex-1 overflow-auto ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}
      >
        <Outlet />
      </main>
    </WindowFrame>
  );
}

export default Instagram;
