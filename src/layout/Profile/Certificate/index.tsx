import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import Icons from '@/components/Icons';
import { useModeStore } from '@/store/useModeStore';

type OpenItemState = {
  certificate: Record<number, boolean>;
};

const CERTIFICATE_DATA = [
  {
    id: 0,
    title: 'SQLD(SQL 개발자)',
    content: (
      <>
        자격증번호 : SQLD-052008004
        <br />
        기관 : 한국데이터산업진흥원
        <br />
        취득일 : 2024.04.05
      </>
    ),
  },
  {
    id: 1,
    title: '웹디자인기능사 ',
    content: (
      <>
        자격증번호 : 24401051097J
        <br />
        기관 : 한국산업인력공단
        <br />
        취득일 : 2024.04.09
      </>
    ),
  },
];

function Certificate() {
  const mode = useModeStore((state) => state.mode);
  const [openItem, setOpenItem] = useState<OpenItemState>({
    certificate: {},
  });

  const handleToggle = (section: 'certificate', itemId: number) => {
    setOpenItem((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [itemId]: !prev[section][itemId],
      },
    }));
  };
  return (
    <section className="flex w-full flex-col gap-4 px-16 py-11">
      <h1 className="sr-only">certificate</h1>

      <div>
        <h3 className="text-mac_light-font-active fs-14 pb-2 pl-4">자격증</h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {CERTIFICATE_DATA.map((item) => (
            <li role="menuitem" key={`education-${item.id}`}>
              <button
                type="button"
                className="relative inline-flex w-full items-center gap-4 px-4 py-2"
                onClick={() => handleToggle('certificate', item.id)}
              >
                <span>{item.title}</span>
                <Icons
                  type="mac"
                  name="chevron_light"
                  className={`absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300 ${openItem.certificate[item.id] ? 'rotate-90' : 'rotate-0'} ${mode === 'dark' ? 'text-white' : 'text-black'}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openItem.certificate[item.id] && (
                  <motion.div
                    id={`motion-panel-certificate-${item.id}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: 'auto', opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden px-4"
                  >
                    <p className="py-2 text-sm text-gray-700 dark:text-white">{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certificate;
