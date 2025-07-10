import ContentBox from '@/components/Mac/ContentBox';
import { useModeStore } from '@/store/useModeStore';

const LANGUAGE_DATA = [
  {
    id: 0,
    title: 'HTML',
    light_icon: '/images/html_light.webp',
    dark_icon: '',
    content: <>▪ 웹 접근성과 시맨틱 마크업을 고려하여 구조적인 HTML을 작성할 수 있습니다.</>,
  },
  {
    id: 1,
    title: 'CSS',
    light_icon: '/images/css_light.webp',
    dark_icon: '',
    content: (
      <>▪ Flex, Grid, 반응형 레이아웃, 애니메이션 등을 활용하여 다양한 UI를 구현할 수 있습니다.</>
    ),
  },
  {
    id: 2,
    title: 'JavaScript',
    light_icon: '/images/javascript_light.webp',
    dark_icon: '',
    content: <>▪ </>,
  },
  {
    id: 4,
    title: 'TypeScript',
    light_icon: '/images/typescript_light.webp',
    dark_icon: '',
    content: <>▪</>,
  },
];
const LIBRARY_DATA = [
  {
    id: 0,
    title: 'React',
    light_icon: '/images/react_light.webp',
    dark_icon: '',
    content: <>▪ </>,
  },
  {
    id: 1,
    title: 'Next.js',
    light_icon: '/images/nextjs_light.webp',
    dark_icon: '',
    content: <>▪ </>,
  },
  {
    id: 2,
    title: 'Framer-motion',
    light_icon: '/images/framer-motion_light.webp',
    dark_icon: '',
    content: <>▪ </>,
  },
];
const STYLING_DATA = [
  {
    id: 0,
    title: 'TailwindCSS',
    light_icon: '/images/tailwindcss_light.webp',
    dark_icon: '',
    content: (
      <>
        ▪ 유틸리티 클래스 기반으로 빠르게 스타일링하며, 커스터마이징 및 다크모드 설정에 익숙합니다.
      </>
    ),
  },
  {
    id: 1,
    title: 'CSS Modules',
    light_icon: '/images/css-modules_light.webp',
    dark_icon: '',
    content: <>▪ 컴포넌트 단위로 CSS를 모듈화하여 클래스 네이밍 충돌을 방지할 수 있습니다.</>,
  },
  {
    id: 2,
    title: 'Sass(SCSS)',
    light_icon: '/images/sass_light.webp',
    dark_icon: '',
    content: <>▪</>,
  },
];
const STATE_DATA = [
  {
    id: 0,
    title: 'React Query',
    light_icon: '/images/react-query_light.webp',
    dark_icon: '',
    content: <>▪</>,
  },
  {
    id: 1,
    title: 'Redux Toolkit',
    light_icon: '/images/redux_light.webp',
    dark_icon: '',
    content: <>▪</>,
  },
  {
    id: 2,
    title: 'zustand',
    light_icon: '/images/zustand_light.webp',
    dark_icon: '',
    content: <>▪</>,
  },
];
const BUILD_DATA = [
  {
    id: 0,
    title: 'Vite',
    light_icon: '/images/vite_light.webp',
    dark_icon: '',
    content: <>▪ </>,
  },
  {
    id: 1,
    title: 'ESlint',
    light_icon: '/images/eslint_light.webp',
    dark_icon: '',
    content: <>▪ </>,
  },
  {
    id: 2,
    title: 'prettier',
    light_icon: '/images/prettier_light.webp',
    dark_icon: '',
    content: <>▪ </>,
  },
];
const TOOL_DATA = [
  {
    id: 0,
    title: 'Github',
    light_icon: '/images/github_light.webp',
    dark_icon: '',
    content: (
      <>
        ▪ Branch 전략, Pull Request, Commit 메시지 규칙 등 협업에 필요한 Git 사용 경험이 있습니다 .
      </>
    ),
  },
  {
    id: 1,
    title: 'Figma',
    light_icon: '/images/figma_light.webp',
    dark_icon: '',
    content: <>▪ 디자인 시안을 분석하여 컴포넌트화하고, 디자이너와 협업에 적극 활용합니다.</>,
  },
];

function Skills() {
  const mode = useModeStore((state) => state.mode);

  return (
    <section className="scrollbar-hide flex w-full flex-col gap-4 overflow-y-scroll px-16 py-11">
      <h1 className="sr-only">skills</h1>

      <div>
        <h3
          className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
        >
          언어
        </h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {LANGUAGE_DATA.map((item) => (
            <ContentBox data={item} type="language" />
          ))}
        </ul>
      </div>
      <div>
        <h3
          className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
        >
          프레임워크 및 라이브러리
        </h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {LIBRARY_DATA.map((item) => (
            <ContentBox data={item} type="library" />
          ))}
        </ul>
      </div>
      <div>
        <h3
          className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
        >
          스타일링
        </h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {STYLING_DATA.map((item) => (
            <ContentBox data={item} type="styling" />
          ))}
        </ul>
      </div>
      <div>
        <h3
          className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
        >
          상태관리 및 라우팅
        </h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {STATE_DATA.map((item) => (
            <ContentBox data={item} type="state" />
          ))}
        </ul>
      </div>
      <div>
        <h3
          className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
        >
          빌드 및 환경 관리
        </h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {BUILD_DATA.map((item) => (
            <ContentBox data={item} type="build" />
          ))}
        </ul>
      </div>
      <div>
        <h3
          className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
        >
          협업 도구
        </h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {TOOL_DATA.map((item) => (
            <ContentBox data={item} type="tool" />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
