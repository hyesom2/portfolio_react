import { Outlet } from 'react-router-dom';

import TitleBar from '@/components/Mac/TitleBar';

function WindowFrame() {
  return (
    <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-mac_light-windowFrame-bg w-3/4 h-3/4 border border-mac_light-border rounded-xl overflow-hidden">
      <TitleBar title="instagram" />
      <Outlet />
    </section>
  );
}

export default WindowFrame;
