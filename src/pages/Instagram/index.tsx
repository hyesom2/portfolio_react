import { Outlet } from 'react-router-dom';

import Menubar from '@/components/Instagram/Menubar';
import WindowFrame from '@/layout/WindowFrame';

function Instagram() {
  return (
    <WindowFrame className="relative flex flex-col h-full md:flex-row">
      <h1 className="sr-only">Instagram</h1>
      <aside className="w-full md:w-60">
        <Menubar />
      </aside>
      <main className="flex-1 h-full overflow-hidden">
        <Outlet />
      </main>
    </WindowFrame>
  );
}

export default Instagram;
