import { useNavigate } from 'react-router-dom';

import Icons from '@/components/Icons';
import ContentBox from '@/components/Mac/ContentBox';
import useDeviceResize from '@/hooks/useDeviceResize';
import { useModeStore } from '@/store/useModeStore';
import { useResponsiveStore } from '@/store/useResponsiveStore';

const CERTIFICATE_DATA = [
  {
    id: 0,
    title: 'GTQ(그래픽기술자격) 1급',
    content: (
      <>
        자격증번호 : GA10120110231054
        <br />
        기관 : 한국생산성본부
        <br />
        취득일 : 2020.11.13
      </>
    ),
  },
  {
    id: 1,
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
    id: 2,
    title: '웹디자인기능사',
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
  const navigate = useNavigate();
  const isTablet = useResponsiveStore((state) => state.isTablet);

  const handleBackButton = () => {
    navigate('/profile', { replace: true });
  };

  useDeviceResize();

  return (
    <section
      className={`scrollbar-hide fixed top-0 right-0 bottom-0 left-0 flex flex-col items-start gap-4 overflow-y-scroll px-6 pt-7 pb-7 lg:relative lg:w-full lg:bg-transparent lg:px-16 lg:py-11 ${mode === 'dark' ? 'bg-black' : 'bg-mac_light-gray06'}`}
    >
      <h1 className="sr-only">certificate</h1>

      {isTablet ? (
        <button type="button" onClick={handleBackButton} className="pt-4 pl-2">
          <Icons
            type="instagram"
            name="chevron-left"
            className={`fs-20 font-bold ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
          />
        </button>
      ) : null}

      <div className="flex w-full flex-col gap-2">
        <h3
          className={`fs-14 pl-4 ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
        >
          자격증
        </h3>
        <ul
          className={`rounded-14 mb-2 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {CERTIFICATE_DATA.map((item) => (
            <ContentBox data={item} type="certificate" />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certificate;
