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
        <nav className="border-insta_button-gray-hover fixed bottom-0 z-50 flex h-12 w-full items-center justify-between border-t bg-white px-8">
          <h1>
            <Link to="/instagram">
              <Icons type="instagram" name="instagram_logo" className="fs-24" />
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
        <nav className="bg-insta-inactive border-insta_button-gray-hover left-0 flex w-full flex-col gap-7 border-r bg-white px-3 pt-10 pb-4 md:fixed md:w-60">
          <h1 className="px-3">
            <Link to="/instagram">
              <Icons type="instagram" name="instagram_logo" className="fs-30" />
            </Link>
          </h1>
          <ul className="flex flex-col items-start">
            <li className="group flex w-full items-center justify-start gap-4 rounded-lg">
              <Icons type="instagram" name="profile" className="fs-24 group-hover:scale-[1.1]" />
              <Link to="/instagram/profile" className="fs-16 group-hover:font-bold">
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Menubar;
