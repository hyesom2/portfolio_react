import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import Icons from '@/components/Icons';
import { useModeStore } from '@/store/useModeStore';

type OpenItemState = {
  language: Record<number, boolean>;
  library: Record<number, boolean>;
  styling: Record<number, boolean>;
  state: Record<number, boolean>;
  build: Record<number, boolean>;
  tool: Record<number, boolean>;
};

const LANGUAGE_DATA = [
  {
    id: 0,
    title: 'HTML',
    light_icon: '/images/html_light.webp',
    dark_icon: '',
    content: <>HTML</>,
  },
  {
    id: 1,
    title: 'CSS',
    light_icon: '/images/css_light.webp',
    dark_icon: '',
    content: <>CSS</>,
  },
  {
    id: 2,
    title: 'JavaScript',
    light_icon: '/images/javascript_light.webp',
    dark_icon: '',
    content: <>JS</>,
  },
  {
    id: 4,
    title: 'TypeScript',
    light_icon: '/images/typescript_light.webp',
    dark_icon: '',
    content: <>TypeScript</>,
  },
];
const LIBRARY_DATA = [
  {
    id: 0,
    title: 'React',
    light_icon: '/images/react_light.webp',
    dark_icon: '',
    content: <>React</>,
  },
  {
    id: 1,
    title: 'Next.js',
    light_icon: '/images/nextjs_light.webp',
    dark_icon: '',
    content: <>Next.js</>,
  },
  {
    id: 2,
    title: 'Framer-motion',
    light_icon: '/images/framer-motion_light.webp',
    dark_icon: '',
    content: <>Framer-motion</>,
  },
];
const STYLING_DATA = [
  {
    id: 0,
    title: 'TailwindCSS',
    light_icon: '/images/tailwindcss_light.webp',
    dark_icon: '',
    content: <>TailwindCSS</>,
  },
  {
    id: 1,
    title: 'CSS Modules',
    light_icon: '/images/css-modules_light.webp',
    dark_icon: '',
    content: <>CSS Modules</>,
  },
  {
    id: 2,
    title: 'Sass(SCSS)',
    light_icon: '/images/sass_light.webp',
    dark_icon: '',
    content: <>Sass(SCSS)</>,
  },
];
const STATE_DATA = [
  {
    id: 0,
    title: 'React Query',
    light_icon: '/images/react-query_light.webp',
    dark_icon: '',
    content: <>React Query</>,
  },
  {
    id: 1,
    title: 'Redux Toolkit',
    light_icon: '/images/redux_light.webp',
    dark_icon: '',
    content: <>Redux</>,
  },
  {
    id: 2,
    title: 'zustand',
    light_icon: '/images/zustand_light.webp',
    dark_icon: '',
    content: <>zustand</>,
  },
];
const BUILD_DATA = [
  {
    id: 0,
    title: 'Vite',
    light_icon: '/images/vite_light.webp',
    dark_icon: '',
    content: <>Vite</>,
  },
  {
    id: 1,
    title: 'ESlint',
    light_icon: '/images/eslint_light.webp',
    dark_icon: '',
    content: <>ESlint</>,
  },
  {
    id: 2,
    title: 'prettier',
    light_icon: '/images/prettier_light.webp',
    dark_icon: '',
    content: <>prettier</>,
  },
];
const TOOL_DATA = [
  {
    id: 0,
    title: 'Github',
    light_icon: '/images/github_light.webp',
    dark_icon: '/images/github_dark.webp',
    content: <>Github</>,
  },
  {
    id: 1,
    title: 'Figma',
    light_icon: '/images/figma_light.webp',
    content: <>Figma</>,
  },
];

function Skills() {
  const mode = useModeStore((state) => state.mode);
  const [openItem, setOpenItem] = useState<OpenItemState>({
    language: {},
    library: {},
    styling: {},
    state: {},
    build: {},
    tool: {},
  });

  const handleToggle = (
    section: 'language' | 'library' | 'styling' | 'state' | 'build' | 'tool',
    itemId: number,
  ) => {
    setOpenItem((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [itemId]: !prev[section][itemId],
      },
    }));
  };

  return (
    <section className="scrollbar-hide flex w-full flex-col gap-4 overflow-y-scroll px-16 py-11">
      <h1 className="sr-only">skills</h1>

      <div>
        <h3
          className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-white' : 'text-mac_light-font-active'}`}
        >
          언어
        </h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {LANGUAGE_DATA.map((item) => (
            <li
              role="menuitem"
              key={`language-${item.id}`}
              className={`border-b last:border-b-0 ${mode === 'dark' ? 'border-b-mac_dark-gray03' : 'border-b-mac_light-gray03'}`}
            >
              <button
                type="button"
                className={`relative inline-flex w-full items-center gap-4 px-4 py-2`}
                onClick={() => handleToggle('language', item.id)}
              >
                <figure className="flex flex-row gap-4">
                  <img
                    src={`${mode === 'dark' && item?.dark_icon ? item?.dark_icon : item.light_icon}`}
                    alt=""
                    className={`rounded-7 flex h-[30px] w-[30px] items-center justify-center object-contain ${mode === 'dark' && 'bg-white'}`}
                  />
                  <figcaption className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    {item.title}
                  </figcaption>
                </figure>
                <Icons
                  type="mac"
                  name="chevron_light"
                  className={`absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300 ${openItem.language[item.id] ? 'rotate-90' : 'rotate-0'} ${mode === 'dark' ? 'text-white' : 'text-black'}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openItem.language[item.id] && (
                  <motion.div
                    id={`motion-panel-language-${item.id}`}
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
                    <p
                      className={`fs-12 py-2 ${mode === 'dark' ? 'text-white' : 'text-mac_light-font-active'}`}
                    >
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3
          className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-white' : 'text-mac_light-font-active'}`}
        >
          프레임워크 및 라이브러리
        </h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {LIBRARY_DATA.map((item) => (
            <li
              role="menuitem"
              key={`library-${item.id}`}
              className={`border-b last:border-b-0 ${mode === 'dark' ? 'border-b-mac_dark-gray03' : 'border-b-mac_light-gray03'}`}
            >
              <button
                type="button"
                className={`relative inline-flex w-full items-center gap-4 px-4 py-2`}
                onClick={() => handleToggle('library', item.id)}
              >
                <figure className="flex flex-row gap-4">
                  <img
                    src={`${mode === 'dark' && item?.dark_icon ? item?.dark_icon : item.light_icon}`}
                    alt=""
                    className={`rounded-7 flex h-[30px] w-[30px] items-center justify-center object-contain ${mode === 'dark' && 'bg-white'}`}
                  />
                  <figcaption className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    {item.title}
                  </figcaption>
                </figure>
                <Icons
                  type="mac"
                  name="chevron_light"
                  className={`absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300 ${openItem.library[item.id] ? 'rotate-90' : 'rotate-0'} ${mode === 'dark' ? 'text-white' : 'text-black'}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openItem.library[item.id] && (
                  <motion.div
                    id={`motion-panel-library-${item.id}`}
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
                    <p
                      className={`fs-12 py-2 ${mode === 'dark' ? 'text-white' : 'text-mac_light-font-active'}`}
                    >
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-mac_light-font-active fs-14 pb-2 pl-4">스타일링</h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {STYLING_DATA.map((item) => (
            <li
              role="menuitem"
              key={`styling-${item.id}`}
              className={`border-b last:border-b-0 ${mode === 'dark' ? 'border-b-mac_dark-gray03' : 'border-b-mac_light-gray03'}`}
            >
              <button
                type="button"
                className={`relative inline-flex w-full items-center gap-4 px-4 py-2`}
                onClick={() => handleToggle('styling', item.id)}
              >
                <figure className="flex flex-row gap-4">
                  <img
                    src={`${mode === 'dark' && item?.dark_icon ? item?.dark_icon : item.light_icon}`}
                    alt=""
                    className={`rounded-7 flex h-[30px] w-[30px] items-center justify-center object-contain ${mode === 'dark' && 'bg-white'}`}
                  />
                  <figcaption className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    {item.title}
                  </figcaption>
                </figure>
                <Icons
                  type="mac"
                  name="chevron_light"
                  className={`absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300 ${openItem.styling[item.id] ? 'rotate-90' : 'rotate-0'} ${mode === 'dark' ? 'text-white' : 'text-black'}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openItem.styling[item.id] && (
                  <motion.div
                    id={`motion-panel-styling-${item.id}`}
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
                    <p
                      className={`fs-12 py-2 ${mode === 'dark' ? 'text-white' : 'text-mac_light-font-active'}`}
                    >
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-mac_light-font-active fs-14 pb-2 pl-4">상태관리 및 라우팅</h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {STATE_DATA.map((item) => (
            <li
              role="menuitem"
              key={`state-${item.id}`}
              className={`border-b last:border-b-0 ${mode === 'dark' ? 'border-b-mac_dark-gray03' : 'border-b-mac_light-gray03'}`}
            >
              <button
                type="button"
                className={`relative inline-flex w-full items-center gap-4 px-4 py-2`}
                onClick={() => handleToggle('state', item.id)}
              >
                <figure className="flex flex-row gap-4">
                  <img
                    src={`${mode === 'dark' && item?.dark_icon ? item?.dark_icon : item.light_icon}`}
                    alt=""
                    className={`rounded-7 flex h-[30px] w-[30px] items-center justify-center object-contain ${mode === 'dark' && 'bg-white'}`}
                  />
                  <figcaption className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    {item.title}
                  </figcaption>
                </figure>
                <Icons
                  type="mac"
                  name="chevron_light"
                  className={`absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300 ${openItem.state[item.id] ? 'rotate-90' : 'rotate-0'} ${mode === 'dark' ? 'text-white' : 'text-black'}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openItem.state[item.id] && (
                  <motion.div
                    id={`motion-panel-skill-${item.id}`}
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
                    <p
                      className={`fs-12 py-2 ${mode === 'dark' ? 'text-white' : 'text-mac_light-font-active'}`}
                    >
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-mac_light-font-active fs-14 pb-2 pl-4">빌드 및 환경 관리</h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {BUILD_DATA.map((item) => (
            <li
              role="menuitem"
              key={`build-${item.id}`}
              className={`border-b last:border-b-0 ${mode === 'dark' ? 'border-b-mac_dark-gray03' : 'border-b-mac_light-gray03'}`}
            >
              <button
                type="button"
                className={`relative inline-flex w-full items-center gap-4 px-4 py-2`}
                onClick={() => handleToggle('build', item.id)}
              >
                <figure className="flex flex-row gap-4">
                  <img
                    src={`${mode === 'dark' && item?.dark_icon ? item?.dark_icon : item.light_icon}`}
                    alt=""
                    className={`rounded-7 flex h-[30px] w-[30px] items-center justify-center object-contain ${mode === 'dark' && 'bg-white'}`}
                  />
                  <figcaption className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    {item.title}
                  </figcaption>
                </figure>
                <Icons
                  type="mac"
                  name="chevron_light"
                  className={`absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300 ${openItem.build[item.id] ? 'rotate-90' : 'rotate-0'} ${mode === 'dark' ? 'text-white' : 'text-black'}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openItem.build[item.id] && (
                  <motion.div
                    id={`motion-panel-build-${item.id}`}
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
                    <p
                      className={`fs-12 py-2 ${mode === 'dark' ? 'text-white' : 'text-mac_light-font-active'}`}
                    >
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-mac_light-font-active fs-14 pb-2 pl-4">협업 도구</h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {TOOL_DATA.map((item) => (
            <li
              role="menuitem"
              key={`tool-${item.id}`}
              className={`border-b last:border-b-0 ${mode === 'dark' ? 'border-b-mac_dark-gray03' : 'border-b-mac_light-gray03'}`}
            >
              <button
                type="button"
                className={`relative inline-flex w-full items-center gap-4 px-4 py-2`}
                onClick={() => handleToggle('tool', item.id)}
              >
                <figure className="flex flex-row gap-4">
                  <img
                    src={`${mode === 'dark' && item.dark_icon ? item.dark_icon : item.light_icon}`}
                    alt=""
                    className={`rounded-7 flex h-[30px] w-[30px] items-center justify-center object-contain ${mode === 'dark' && 'bg-white'}`}
                  />
                  <figcaption className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    {item.title}
                  </figcaption>
                </figure>
                <Icons
                  type="mac"
                  name="chevron_light"
                  className={`absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300 ${openItem.tool[item.id] ? 'rotate-90' : 'rotate-0'} ${mode === 'dark' ? 'text-white' : 'text-black'}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openItem.tool[item.id] && (
                  <motion.div
                    id={`motion-panel-skill-${item.id}`}
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
                    <p
                      className={`fs-12 py-2 ${mode === 'dark' ? 'text-white' : 'text-mac_light-font-active'}`}
                    >
                      {item.content}
                    </p>
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

export default Skills;
