import ContentBox from '@/components/Mac/ContentBox';
import { useModeStore } from '@/store/useModeStore';

const LANGUAGE_DATA = [
  {
    id: 0,
    title: 'HTML',
    light_icon: '/images/html_light.webp',
    dark_icon: '',
    content: (
      <>
        ▪ 시맨틱 마크업, 웹 접근성 준수, SEO 최적화를 위한 구조적인 HTML을 작성할 수 있습니다.
        {/* <br /> */}
        {/* ▪ ARIA 속성을 통한 접근성 향상 */}
        {/* <br />▪ meta 태그와 구조화된 데이터를 활용한 SEO 최적화 */}
      </>
    ),
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
    content: (
      <>
        ▪ ES6+ 문법, 비동기 처리, DOM 조작, 모듈 시스템 및 함수형 프로그래밍 구현을 할 수 있습니다.
      </>
    ),
  },
  {
    id: 4,
    title: 'TypeScript',
    light_icon: '/images/typescript_light.webp',
    dark_icon: '',
    content: (
      <>▪ 정적 타입 검사, 인터페이스 설계, 제네릭 활용으로 안정적인 코드 작성을 할 수 있습니다.</>
    ),
  },
];
const LIBRARY_DATA = [
  {
    id: 0,
    title: 'React',
    light_icon: '/images/react_light.webp',
    dark_icon: '',
    content: (
      <>
        ▪ 컴포넌트 설계, 상대 관리, 생명주기 이해, 커스텀 훅 개발 및 성능 최적화를 할 수 있습니다.
      </>
    ),
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
    content: <>▪ 복잡한 애니메이션, 제스처 처리, 레이아웃 애니메이션 구현할 수 있습니다.</>,
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
    content: (
      <>▪ 변수, 믹스인, 중첩 규칙, 함수 활용으로 효율적인 스타일시트를 작성할 수 있습니다.</>
    ),
  },
];
const STATE_DATA = [
  {
    id: 0,
    title: 'React Query',
    light_icon: '/images/react-query_light.webp',
    dark_icon: '',
    content: <>▪ 서버 상태 관리, 캐싱 전략, 백그라운드 업데이트, 낙관적 업데이트 구현 가능</>,
  },
  {
    id: 1,
    title: 'Redux Toolkit',
    light_icon: '/images/redux_light.webp',
    dark_icon: '',
    content: <>▪ 글로벌 상태 관리, 미들웨어 활용, 비동기 액션 처리 가능</>,
  },
  {
    id: 2,
    title: 'zustand',
    light_icon: '/images/zustand_light.webp',
    dark_icon: '',
    content: <>▪ 경량 상태 관리, 스토어 설계, 미들웨어 활용 가능</>,
  },
];
const BUILD_DATA = [
  {
    id: 0,
    title: 'Vite',
    light_icon: '/images/vite_light.webp',
    dark_icon: '',
    content: <>▪ 빠른 개발 환경 구축, 번들링 최적화, 플러그인을 활용합니다.</>,
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
