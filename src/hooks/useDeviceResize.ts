import { useEffect } from 'react';

import { useResponsiveStore } from '@/store/useResponsiveStore';

const useDeviceResize = () => {
  const setIsTablet = useResponsiveStore((state) => state.setIsTablet);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1024);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsTablet]);
};

export default useDeviceResize;
