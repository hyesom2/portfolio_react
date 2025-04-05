import { Outlet } from 'react-router-dom';

import Modal from '@/components/Instagram/Modal';
import Dock from '@/components/Mac/Dock';
import Menubar from '@/components/Mac/Menubar';
import { useModalStore } from '@/stores/useModalStore';

function Mac() {
  const { isOpen } = useModalStore();

  return (
    <section className="relative">
      <Menubar />
      <Outlet />
      {isOpen && <Modal />}
      <Dock />
    </section>
  );
}

export default Mac;
