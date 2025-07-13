import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

import TitleBar from '@/components/Mac/TitleBar';
import { useDockStore } from '@/store/useDockStore';
import { useModeStore } from '@/store/useModeStore';

interface WindowFrameTypes {
  children?: React.ReactNode;
  className?: string;
}

const getAppKey = (pathname: string) => {
  if (pathname.startsWith('/profile')) return 'profile';
  if (pathname.startsWith('/instagram')) return 'instagram';
  if (pathname.startsWith('/guestbook')) return 'guestbook';
  return 'default';
};

function WindowFrame({ children, className }: WindowFrameTypes) {
  const mode = useModeStore((state) => state.mode);
  const activeApp = useDockStore((state) => state.activeApp);
  const location = useLocation();
  const appKey = getAppKey(location.pathname);

  const getTitle = () => {
    if (location.pathname.startsWith('/profile')) return 'Profile';
    if (location.pathname.startsWith('/instagram')) return 'Hyeonstagram';
    if (location.pathname.startsWith('/guestbook')) return 'GuestBook';
    return 'default';
  };

  return (
    <AnimatePresence>
      {activeApp && (
        <motion.section
          key={appKey}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, animationDuration: 0.3 }}
          transition={{ duration: 0.3 }}
          className={`${mode === 'dark' ? 'bg-black' : 'bg-white'} fixed top-1/2 left-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform flex-col overflow-hidden rounded-lg border border-none md:h-3/4 md:w-3/4`}
        >
          <TitleBar title={getTitle()} />
          <main className={className}>{children}</main>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default WindowFrame;
