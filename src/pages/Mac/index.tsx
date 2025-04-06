import { Outlet } from 'react-router-dom';

import Dock from '@/components/Mac/Dock';
import Menubar from '@/components/Mac/Menubar';

function Mac() {
  return (
    <section className="relative">
      <Menubar />
      <Outlet />
      <Dock />
    </section>
  );
}

export default Mac;
