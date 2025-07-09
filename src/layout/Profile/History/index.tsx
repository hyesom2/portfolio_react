import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import Icons from '@/components/Icons';
import { useModeStore } from '@/store/useModeStore';

type OpenItemState = {
  work: Record<number, boolean>;
  education: Record<number, boolean>;
};

const WORK_DATA = [
  {
    id: 0,
    title: '주식회사 샤이닝라이언(인턴)',
    content: (
      <>
        팀명 : 프론트엔드 B2B 2팀
        <br />
        기간 : 2025. 01. ~ 2025. 03
      </>
    ),
  },
];
const EDUCATION_DATA = [
  {
    id: 0,
    title: '멋쟁이사자처럼 프론트엔드 스쿨 10기 수료',
    content: <>기간 : 2024.04.22 ~ 2024.09.25</>,
  },
  {
    id: 1,
    title: '코딩 알려주는 누나 리액트 스터디 1기 수료',
    content: <>기간 : 2024.03.17 ~ 2024.04.21</>,
  },
  {
    id: 2,
    title: '안양대학교 졸업',
    content: (
      <>
        학과 : 컴퓨터학과
        <br />
        학점 : 3.75/4.5
        <br />
        기간 : 2015.03 ~ 2019.02
      </>
    ),
  },
];

function History() {
  const mode = useModeStore((state) => state.mode);
  const [openItem, setOpenItem] = useState<OpenItemState>({
    work: {},
    education: {},
  });

  const handleToggle = (section: 'work' | 'education', itemId: number) => {
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
      <h1 className="sr-only">history</h1>

      <div>
        <h3 className="text-mac_light-font-active fs-14 pb-2 pl-4">경력사항</h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {WORK_DATA.map((item) => (
            <li role="menuitem" key={`work-${item.id}`}>
              <button
                type="button"
                className="relative inline-flex w-full items-center gap-4 px-4 py-2"
                onClick={() => handleToggle('work', item.id)}
              >
                <span>{item.title}</span>
                <Icons
                  type="mac"
                  name="chevron_light"
                  className={`absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300 ${openItem.work[item.id] ? 'rotate-90' : 'rotate-0'} ${mode === 'dark' ? 'text-white' : 'text-black'}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openItem.work[item.id] && (
                  <motion.div
                    id={`motion-panel-work-${item.id}`}
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
                    <p className="py-2 text-sm text-black dark:text-white">{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-mac_light-font-active fs-14 pb-2 pl-4">교육</h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {EDUCATION_DATA.map((item) => (
            <li role="menuitem" key={`education-${item.id}`}>
              <button
                type="button"
                className="relative inline-flex w-full items-center gap-4 px-4 py-2"
                onClick={() => handleToggle('education', item.id)}
              >
                <span>{item.title}</span>
                <Icons
                  type="mac"
                  name="chevron_light"
                  className={`absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300 ${openItem.education[item.id] ? 'rotate-90' : 'rotate-0'} ${mode === 'dark' ? 'text-white' : 'text-black'}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openItem.education[item.id] && (
                  <motion.div
                    id={`motion-panel-values-${item.id}`}
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

export default History;
