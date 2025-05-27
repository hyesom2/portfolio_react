import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Icons from '@/components/Icons';
import { useModeStore } from '@/store/useModeStore';

const MENUBAR_LIST = [
  { id: 0, name: 'Home', icon: 'home' },
  { id: 1, name: 'Profile', icon: 'profile' },
];

function Menubar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const mode = useModeStore((state) => state.mode);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <nav
          className={`border-insta_gray-300 fixed bottom-0 z-50 flex h-12 w-full items-center justify-between border-t px-8 ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}
        >
          <h1 className="h-15 px-3">
            <Link to="/instagram/home" className="inline-flex h-full w-full">
              {mode === 'dark' ? (
                <img src="/images/hyeonstagram_dark.webp" alt="" className="block h-full w-full" />
              ) : (
                <img src="/images/hyeonstagram_light.webp" alt="" className="block h-full w-full" />
              )}
            </Link>
          </h1>
          <ul className="flex">
            <li className="group flex w-full items-center justify-start gap-4 rounded-lg">
              <Icons type="instagram" name="profile" className="fs-24 group-hover:scale-[1.1]" />
              <Link to="/instagram/profile" className="fs-16 group-hover:font-bold">
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav
          className={`border-insta_gray-300 left-0 flex w-full flex-col gap-7 border-r px-3 pt-10 pb-4 md:fixed md:w-60 ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}
        >
          <h1 className="h-25 px-3">
            <Link to="/instagram/home" className="inline-flex h-full w-full">
              {mode === 'dark' ? (
                <img src="/images/hyeonstagram_dark.webp" alt="" className="block h-full w-full" />
              ) : (
                <img src="/images/hyeonstagram_light.webp" alt="" className="block h-full w-full" />
              )}
            </Link>
          </h1>
          <ul className="flex flex-col items-start gap-2">
            {MENUBAR_LIST.map((menu) => {
              const isActive = location.pathname === `/instagram/${menu.icon}`;
              return (
                <li
                  key={menu.id}
                  className={`group flex w-full items-center justify-start gap-4 rounded-lg p-3 ${mode === 'dark' ? 'text-white' : 'text-black'} hover:cursor-pointer ${isActive && 'font-bold'}`}
                >
                  <Icons
                    type="instagram"
                    name={menu.icon}
                    className="fs-24 group-hover:scale-[1.1]"
                  />
                  <Link to={`/instagram/${menu.icon}`} className="fs-16 group-hover:font-bold">
                    <span>{menu.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}

export default Menubar;
