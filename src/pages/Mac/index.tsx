import { Outlet } from 'react-router-dom';

import Dock from '@/components/Mac/Dock';
import Menubar from '@/components/Mac/Menubar';

function Mac() {
  return (
    <section className="relative w-screen h-screen bg-[url(/images/mac_light.webp)] bg-no-repeat bg-center bg-cover">
      <Menubar />
      <Dock />
      <Outlet />
    </section>
  );
}

export default Mac;
