import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Icons from '@/components/Icons';

function Menubar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
        <nav className="flex fixed bottom-0 w-full h-12 items-center justify-between px-8 z-50 bg-white border-t border-insta_button-gray-hover">
          <h1>
            <Link to="/instagram">
              <Icons type="instagram" name="instagram_logo" className="fs-30" />
            </Link>
          </h1>
          <ul className="flex">
            <li className="w-full flex justify-start items-center rounded-lg gap-4 group">
              <Link to="/instagram/profile" className="fs-16 group-hover:font-bold">
                <Icons type="instagram" name="profile" className="fs-24 group-hover:scale-[1.1]" />
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="flex flex-col gap-7 w-full md:w-60 bg-insta-inactive bg-white border-r border-insta_button-gray-hover pt-10 px-3 pb-4 md:fixed left-0">
          <h1 className="px-3">
            <Icons type="instagram" name="instagram_logo" className="fs-30" />
          </h1>
          <ul className="flex flex-col items-start">
            <li className="w-full flex justify-start items-center rounded-lg gap-4 group">
              <Icons type="instagram" name="profile" className="fs-24 group-hover:scale-[1.1]" />
              <Link to="/instagram/profile" className="fs-16 group-hover:font-bold">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Menubar;
