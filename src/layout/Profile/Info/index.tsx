import { useNavigate } from 'react-router-dom';

import Icons from '@/components/Icons';
import useDeviceResize from '@/hooks/useDeviceResize';
import { useModeStore } from '@/store/useModeStore';
import { useResponsiveStore } from '@/store/useResponsiveStore';

interface InfoTypes {
  id: number;
  title: string;
  content: string;
}

const INFO_DATA = [
  {
    id: 0,
    title: '이름',
    content: '김현주',
  },
  {
    id: 1,
    title: '생년월일',
    content: '1994.01.28',
  },
  {
    id: 2,
    title: 'Email',
    content: 'kimhyesom1202@gmail.com',
  },
  {
    id: 2,
    title: 'Github',
    content: 'https://github.com/hyesom2',
  },
  {
    id: 3,
    title: 'Blog',
    content: 'https://velog.io/@hyesom2',
  },
  {
    id: 3,
    title: '포트폴리오 사이트',
    content: 'https://hyeonju-portfolio.netlify.app/',
  },
];

function Info() {
  const mode = useModeStore((state) => state.mode);
  const navigate = useNavigate();
  const isTablet = useResponsiveStore((state) => state.isTablet);

  const renderContent = (item: InfoTypes) => {
    switch (item.title) {
      case 'Email':
        return (
          <a
            href={`mailto:${item.content}`}
            target="_blank"
            rel="noopener noreferrer"
            className={mode === 'dark' ? 'text-white' : 'text-mac_light-font/60'}
          >
            {item.content}
          </a>
        );
      case 'Github':
        return (
          <a
            href={item.content}
            target="_blank"
            rel="noopener noreferrer"
            className={mode === 'dark' ? 'text-white' : 'text-mac_light-font/60'}
          >
            {item.content}
          </a>
        );
      case 'Blog':
        return (
          <a
            href={item.content}
            target="_blank"
            rel="noopener noreferrer"
            className={mode === 'dark' ? 'text-white' : 'text-mac_light-font/60'}
          >
            {item.content}
          </a>
        );
      case '포트폴리오 사이트':
        return (
          <a
            href={item.content}
            target="_blank"
            rel="noopener noreferrer"
            className={mode === 'dark' ? 'text-white' : 'text-mac_light-font/60'}
          >
            {item.content}
          </a>
        );
      default:
        return item.content;
    }
  };

  const handleBackButton = () => {
    navigate('/profile', { replace: true });
  };

  useDeviceResize();

  return (
    <section
      className={`scrollbar-hide fixed top-0 right-0 bottom-0 left-0 flex flex-col items-start gap-4 overflow-y-scroll px-6 pt-7 lg:relative lg:w-full lg:bg-transparent lg:px-16 lg:py-11 ${mode === 'dark' ? 'bg-black' : 'bg-mac_light-gray06'}`}
    >
      <h1 className="sr-only">Profile Info</h1>

      {isTablet ? (
        <button type="button" onClick={handleBackButton} className="pt-4 pl-2">
          <Icons
            type="instagram"
            name="chevron-left"
            className={`fs-20 font-bold ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
          />
        </button>
      ) : null}
      <h3
        className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
      >
        기본 정보
      </h3>
      <img
        src="/images/profile.webp"
        alt="프로필"
        className="mx-auto h-60 w-60 rounded-full object-cover"
      />
      <dl
        className={`rounded-14 flex w-full flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
        role="menu"
      >
        {INFO_DATA.map((item) => (
          <div
            key={`info-${item.id}`}
            className={`fs-14 relative inline-flex w-full items-center gap-4 px-4 py-2 ${mode === 'dark' ? 'text-white' : 'text-mac_light-font/60'}`}
          >
            <dt className={`w-26 whitespace-nowrap lg:w-30`}>{item.title}</dt>
            <dd>{renderContent(item)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default Info;
