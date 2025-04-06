interface portfolioDataTypes {
  id: number;
  title: string;
  description: string[];
  period: string;
  mainImage: string;
  image: string[];
  url: string;
  githubURL: string;
  skills: string[];
  contribution?: string[];
  problem?: string[];
  solve?: string[];
}

const PORTFOLIO_DATA: portfolioDataTypes[] = [
  {
    id: 0,
    title: '포켓몬도감 팀 프로젝트',
    description: [
      'Pokemon Open API데이터를 비동기적으로 처리하고 Redux Toolkit을 활용한 리액트 프로젝트 입니다.',
      '사용자에게 포켓몬 검색과 정보, 랜덤 선택, 포켓몬 배틀, 나의 포켓몬 리스트 관리 등 다양한 기능을 제공합니다.',
    ],
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
    skills: ['JavaScript', 'CSSModule', 'React', 'React Query', 'Redux', 'Axios'],
    contribution: [
      'CSS초기 세팅',
      '페이지 라우팅',
      '포켓몬 도감 페이지 제작(반응형, filter, search, 도감 기능 구현)',
      'Not Found page 제작',
    ],
    problem: ['처음 프로젝트를 진행하고 개발 기간이 짧다 보니 성능에 대한 고려를 하지 못함'],
    solve: [
      '기간도 짧았고, 처음 진행한 프로젝트다 보니 컴포넌트와 폴더 구조에 대한 아쉬움',
      '기본적인 API연동을 할 수 있게 되었음',
      '총 9팀 중 3등이라는 성과를 거둠',
    ],
  },
  {
    id: 1,
    title: '마켓칼리 팀 프로젝트',
    description: [
      '멋쟁이사자처럼 프론트엔드스쿨 10기에서 진행된 첫 번째 팀 프로젝트로, 기존의 마켓컬리를 클론코딩한 웹 사이트 입니다.',
      'Pocketbase를 활용하여 유저 데이터를 받아서 로그인/로그아웃, 회원가입을 관리하였고 기존의 마켓컬리처럼 메인페이지와 상품페이지, 장바구니 페이지 기능을 모두 구현했습니다.',
    ],
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
    contribution: [
      '자주 사용하는 아토믹 컴포넌트 제작',
      '상품 상세페이지 제작',
      '장바구니 페이지 제작 및 기능 구현',
      '페이지 라우팅',
    ],
    problem: [
      '아이콘 이미지가 개별로 되어있음',
      '이미지태그(img)에 어울리지 않는 대체텍스트(alt)',
      '팀원과의 회의 중 마켓컬리는 웹 접근성이 떨어지는 것을 파악',
    ],
    solve: [
      '아이콘을 sprite이미지로 변경 → 서버 요청 횟수를 줄임',
      '대체텍스트 동적으로 추가',
      '웹 접근성 중 키보드 포커싱안되는 점을 보완',
    ],
  },
  {
    id: 2,
    title: '득근득근',
    description: [
      '멋쟁이사자처럼 프론트엔드스쿨 10기에서 진행된 두 번째 팀 프로젝트로, 관심분야가 운동인 사람들이 만든 운동 기록 웹앱 입니다.',
      'Kakao API를 활용하여 로그인 연동 기능을 추가하였고, 데이터베이스는 Pocketbase를 사용하여 로그인과 회원가입, 회원탈퇴 기능을 구현했습니다.',
      '메인페이지에서는 관심 있는 운동의 정보를 얻을 수 있으며, 운동 기록 기능과 캘린더를 구현하여 기록된 내용들을 볼 수 있습니다.',
      '또, 지도페이지는 Kakao map API를 활용하여 지도와 검색기능을 구현했습니다.',
    ],
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
    contribution: [
      '자주 사용하는 아토믹 컴포넌트 제작 - Input, Icon과 같은 재사용 가능한 컴포넌트를 제작하여 코드 중복을 줄이고 유지보수성을 향상, input 컴포넌트는 재사용성을 고려하던 중 id 중복 문제 해결을 위해 `useId` 를 활용하여 고유한 id를 부여',
      '프로젝트 초기 세팅',
      'Pocketbase 세팅',
      '메인 페이지 제작 - 사용자의 관심과 운동 유형 별 필터 기능, 로그인한 유저의 프로필을 표시 (마이페이지/로그아웃 기능 추가)',
      '지도 페이지 제작 - Kakao Map API를 활용하여 운동 시설 검색 및 위치 정보를 제공',
      'Not Found Page 제작',
    ],
    problem: [
      'Input 컴포넌트 재사용성 여부 검토 → id 중복 문제 발생 가능성이 있기 때문',
      '다시 정의될 필요가 없는 코드가 존재함',
    ],
    solve: [
      'Input 컴포넌트 - "useId" 를 활용하여 고유한 id를 부여',
      '다시 정의될 필요가 없는 코드는 컴포넌트를 외부로 이동',
    ],
  },
  {
    id: 3,
    title: '폴짝(Polzzak) - 국내 여행지 검색 및 일정 관리 웹앱',
    description: [
      'React와 TypeScript, Supabase, Zustand, ShadCN UI를 사용하여 개발한 국내 여행 정보 제공 웹앱 입니다.',
      '사용자는 회원 가입 및 로그인 후 국내의 관광지, 축제, 맛집을 검색하여 정보를 얻을 수 있고, 마음에 드는 곳에 리뷰를 남길 수 있습니다.',
      '또, 즐겨찾기 기능을 활용하여 자신의 즐겨찾기 폴더를 생성하고, 이를 바탕으로 여행 일정을 계획할 수 있습니다. 지도 검색을 통해 위치 정보를 확인할 수 있습니다.',
      'TourAPI를 활용하여 최신 여행 정보를 가져오고, Supabase를 통해 사용자 인증, 즐겨찾기, 일정 데이터를 효율적으로 관리합니다. Zustand를 사용하여 전역 상태를 관리하고, ShadCN UI를 활용하여 일관된 디자인과 UI/UX를 구현했습니다.',
    ],
    period: '2025. 03. 10 ~ 진행중',
    mainImage: '/images/polzzak/polzzak.webp',
    image: [],
    url: '배포예정',
    githubURL: 'https://github.com/polzzak-by-nowashgirls/polzzak',
    skills: ['JavaScript', 'React', 'TypeScript', 'Zustand', 'Shadcn UI', 'Supabase', 'Vite'],
    contribution: [
      '프로젝트 초기 세팅',
      '자주 사용하는 아토믹 컴포넌트 제작',
      '페이지 레이아웃(마이페이지,폴짝,지도,검색/추가/수정)',
    ],
    problem: [],
    solve: [],
  },
];

export default PORTFOLIO_DATA;
