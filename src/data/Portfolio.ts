interface portfolioDataTypes {
  id: number;
  title: string;
  description: string;
  period: string;
  mainImage: string;
  image: string[];
  url: string;
  githubURL: string;
  skills: string[];
}

const PORTFOLIO_DATA: portfolioDataTypes[] = [
  {
    id: 0,
    title: '포켓몬도감 팀 프로젝트',
    description:
      'Pokemon Open API를 활용하여 데이터를 비동기적으로 처리하고, Redux Toolkit을 활용한 리액트 프로젝트로, 사용자에게 포켓몬 검색과 정보, 랜덤 선택, 배틀, 나의 포켓몬 리스트 관리 등 다양한 기능을 제공합니다.',
    period: '2024. 04. 14 ~ 2024. 04. 21',
    mainImage: '/images/pokemon/pokemon.webp',
    image: [
      '/images/pokemon/main.webp',
      '/images/pokemon/dex.webp',
      '/images/pokemon/draw.webp',
      '/images/pokemon/battle.webp',
      '/images/pokemon/mypokemon.webp',
    ],
    url: 'https://pokemon-api-project-nine.vercel.app/',
    githubURL: 'https://github.com/henny1105/pokemon_api_project',
    skills: ['HTML5', 'JavaScript', 'CSSModule', 'React', 'React Query', 'Redux', 'Axios'],
  },
  {
    id: 1,
    title: '마켓칼리 팀 프로젝트',
    description:
      '멋쟁이사자처럼 프론트엔드스쿨 10기에서 진행된 첫 번째 팀 프로젝트로, 기존의 마켓컬리를 클론코딩한 적응형 웹 사이트 입니다. Pocketbase를 활용하여 로그인/로그아웃, 회원가입을 관리하였고 기존의 마켓컬리처럼 메인페이지와 상품페이지, 장바구니 페이지 기능이 모두 구현이 되어있으며 기존의 마켓컬리에는 웹 접근성 중 포커싱이 떨어진다는 점을 파악하고 이것을 보완하였습니다.',
    period: '2024. 07. 12 ~ 2024. 07. 18',
    mainImage: '/images/karly_js/karly.webp',
    image: [
      '/images/karly_js/main.webp',
      '/images/karly_js/login.webp',
      '/images/karly_js/register.webp',
      '/images/karly_js/productlist.webp',
      '/images/karly_js/details.webp',
      '/images/karly_js/cart.webp',
    ],
    url: 'https://sibi11jo.netlify.app/',
    githubURL: 'https://github.com/FRONTENDSCHOOL10/sibi11jo',
    skills: ['HTML5', 'SCSS', 'JavaScript', 'Pocketbase'],
  },
  {
    id: 2,
    title: '득근득근',
    description: `멋쟁이사자처럼 프론트엔드스쿨 10기에서 진행된 두 번째 팀 프로젝트로, 관심분야가 운동인 사람들이 만든 운동기록 웹앱 입니다. 
      Kakao API를 활용하여 로그인 연동 기능을 추가하였고, 데이터베이스는 Pocketbase를 사용하여 로그인과 회원가입, 회원탈퇴 기능을 구현했습니다.
      메인페이지에서는 관심있는 운동의 정보를 얻을 수 있으며, 운동 기록 기능과 캘린더를 구현하여 기록된 내용들을 볼 수 있습니다.
      또, 지도페이지는 Kakao map API를 활용하여 지도와 검색기능을 구현했습니다.
    `,
    period: '2024. 08. 26 ~ 2024. 09. 24',
    mainImage: '/images/dgdg/dgdg.webp',
    image: [
      '/images/dgdg/login.gif',
      '/images/dgdg/main.gif',
      '/images/dgdg/record.gif',
      '/images/dgdg/calendar.gif',
      '/images/dgdg/map-search.gif',
      '/images/dgdg/darkmode.gif',
    ],
    url: 'https://dgdg-ooo.netlify.app/start',
    githubURL: 'https://github.com/FRONTENDSCHOOL10/5unwan',
    skills: [
      'HTML5',
      'TypeScript',
      'CSS Module',
      'React',
      'ReactQuery',
      'Zustand',
      'React Router',
      'kakao API',
      'Pocketbase',
    ],
  },
  {
    id: 3,
    title: '마켓칼리 개인 프로젝트',
    description:
      '기존의 팀 프로젝트를 진행했던 마켓칼리(JS)를 React와 TypeScript를 사용하여 팀 프로젝트에서는 아쉬웠던 재사용성과 유지관리를 위해 컴포넌트 분리에 집중하고 경험해보지 못한 TailwindCSS를 사용했습니다.',
    period: '2024. 09. 30 ~',
    mainImage: '/images/karly_react/karly_react.webp',
    image: ['/images/karly_react/loading.webp'],
    url: '',
    githubURL: 'https://github.com/hyesom2/react_karly',
    skills: [
      'HTML5',
      'TailwindCSS',
      'React',
      'TypeScript',
      'Pocketbase',
      'Zustand',
      'React Router',
    ],
  },
  {
    id: 4,
    title: '포트폴리오 사이트',
    description: '',
    period: '',
    mainImage: '/images/portfolio/portfolio.webp',
    image: ['/images/karly_react/loading.webp'],
    url: '',
    githubURL: 'https://github.com/hyesom2/portfolio',
    skills: [''],
  },
  {
    id: 5,
    title: 'JMINI 쇼핑몰',
    description: 'JMINI 쇼핑몰의 UI/UX 및 유지보수를 담당하고 있습니다.',
    period: '2023.12 ~',
    mainImage: '/images/jmini/jmini.webp',
    image: ['/images/karly_react/loading.webp'],
    url: 'https://jmini.co.kr/',
    githubURL: '',
    skills: ['HTML5', 'CSS', 'JavaScript'],
  },
];

export default PORTFOLIO_DATA;
