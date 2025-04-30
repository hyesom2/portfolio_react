import { Outlet } from 'react-router-dom';

import Menubar from '@/components/Instagram/Menubar';
import WindowFrame from '@/layout/WindowFrame';

function Instagram() {
  return (
    <WindowFrame className="relative flex h-full flex-col md:flex-row">
      <h1 className="sr-only">Instagram</h1>
      <aside className="w-full md:w-60">
        <Menubar />
      </aside>
      <main className="h-full flex-1 overflow-hidden">
        <Outlet />
      </main>
    </WindowFrame>
  );
}

export default Instagram;
