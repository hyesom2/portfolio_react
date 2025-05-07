import { useLocation } from 'react-router-dom';

import TitleBar from '@/components/Mac/TitleBar';

interface WindowFrameTypes {
  children?: React.ReactNode;
  className?: string;
}

function WindowFrame({ children, className }: WindowFrameTypes) {
  const location = useLocation();
  const getTitle = () => {
    if (location.pathname.startsWith('/instagram')) return 'Instagram';
    if (location.pathname.startsWith('/note')) return 'GuestBook';
  };

  return (
    <section className="bg-mac_light-windowFrame-bg border-mac_light-border fixed top-1/2 left-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform flex-col border md:h-3/4 md:w-3/4">
      <TitleBar title={getTitle()} />
      <main className={className}>{children}</main>
    </section>
  );
}

export default WindowFrame;
