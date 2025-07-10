import { AnimatePresence, motion } from 'framer-motion';
import { JSX } from 'react';
import { useState } from 'react';

import Icons from '@/components/Icons';
import { useModeStore } from '@/store/useModeStore';

interface OpenItemState {
  language: Record<number, boolean>;
  library: Record<number, boolean>;
  styling: Record<number, boolean>;
  state: Record<number, boolean>;
  build: Record<number, boolean>;
  tool: Record<number, boolean>;
  certificate: Record<number, boolean>;
  work: Record<number, boolean>;
  education: Record<number, boolean>;
  introduction: Record<number, boolean>;
  values: Record<number, boolean>;
}

interface DataProps {
  data: {
    id: number;
    title: string;
    light_icon?: string;
    dark_icon?: string;
    content: JSX.Element;
  };
  type: SectionTypes;
}

type SectionTypes =
  | 'language'
  | 'library'
  | 'styling'
  | 'state'
  | 'build'
  | 'tool'
  | 'certificate'
  | 'work'
  | 'education'
  | 'introduction'
  | 'values';

function ContentBox({ data, type }: DataProps) {
  const mode = useModeStore((state) => state.mode);
  const [openItem, setOpenItem] = useState<OpenItemState>({
    language: {},
    library: {},
    styling: {},
    state: {},
    build: {},
    tool: {},
    certificate: {},
    work: {},
    education: {},
    introduction: {},
    values: {},
  });

  const handleToggle = (section: SectionTypes, itemId: number) => {
    setOpenItem((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [itemId]: !prev[section][itemId],
      },
    }));
  };

  return (
    <li
      role="menuitem"
      key={`${type}-${data.id}`}
      className={`border-b last:border-b-0 ${mode === 'dark' ? 'border-b-mac_dark-gray03' : 'border-b-mac_light-gray03'}`}
    >
      <button
        type="button"
        className={`relative inline-flex w-full items-center gap-4 px-4 py-2`}
        onClick={() => handleToggle(`${type}`, data.id)}
      >
        <figure className="flex flex-row gap-4">
          {data.light_icon && (
            <img
              src={`${mode === 'dark' && data?.dark_icon ? data?.dark_icon : data.light_icon}`}
              alt=""
              className={`rounded-7 flex h-[30px] w-[30px] items-center justify-center object-contain ${mode === 'dark' && 'bg-white'}`}
            />
          )}
          <figcaption className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
            {data.title}
          </figcaption>
        </figure>
        <Icons
          type="mac"
          name="chevron_light"
          className={`absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300 ${openItem[type][data.id] ? 'rotate-90' : 'rotate-0'} ${mode === 'dark' ? 'text-mac_dark-font/30' : 'text-mac_light-font/30'}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {openItem[type][data.id] && (
          <motion.div
            id={`motion-panel-${type}-${data.id}`}
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
              className={`fs-14 py-2 ${mode === 'dark' ? 'text-white' : 'text-mac_light-font/60'}`}
            >
              {data.content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default ContentBox;
