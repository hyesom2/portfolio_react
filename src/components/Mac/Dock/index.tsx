import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDockStore } from '@/store/useDockStore';
import { useModeStore } from '@/store/useModeStore';

const DOCK_DATA = [
  {
    id: 0,
    title: 'profile',
    img_light_url: '/images/finder_light.webp',
    img_dark_url: '/images/finder_dark.webp',
  },
  {
    id: 1,
    title: 'instagram',
    img_light_url: '/images/instagram_logo.webp',
    img_dark_url: '/images/instagram_logo.webp',
  },
  {
    id: 2,
    title: 'guestbook',
    img_light_url: '/images/messages_light.webp',
    img_dark_url: '/images/messages_dark.webp',
  },
];

function Dock() {
  const navigate = useNavigate();
  const { mode } = useModeStore();
  const setActiveApp = useDockStore((state) => state.setActiveApp);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleAppClick = (title: string) => {
    setActiveApp(title);

    if (title === 'instagram') {
      navigate(`/${title}/profile`);
    } else if (title === 'profile') {
      navigate(`/${title}/info`);
    } else {
      navigate(`/${title}`);
    }
  };
  const handleHoverIndex = (index: number | null) => {
    setHoverIndex(index);
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 transform p-2">
      <div
        className={`absolute top-0 left-0 h-full w-full rounded-xl opacity-20 ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}
        aria-hidden="true"
      ></div>
      <ul className="flex items-center gap-8">
        {DOCK_DATA.map((app) => (
          <li key={app.id} className="flex items-center justify-center">
            <button
              className="group h-16 w-16 cursor-pointer"
              onClick={() => handleAppClick(app.title)}
              onMouseEnter={() => handleHoverIndex(app.id)}
              onMouseLeave={() => handleHoverIndex(null)}
            >
              <figure className="relative flex flex-col">
                <img
                  src={mode === 'dark' ? app.img_dark_url : app.img_light_url}
                  alt=""
                  className="h-full"
                />
                {hoverIndex === app.id && (
                  <motion.figcaption
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-mac_dark-gray06/40 text-mac_dark-font absolute bottom-full left-1/2 -translate-x-1/2 transform rounded-lg px-2 py-1 font-bold whitespace-nowrap"
                  >
                    {app.title}
                  </motion.figcaption>
                )}
              </figure>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Dock;
