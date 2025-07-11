import ContentBox from '@/components/Mac/ContentBox';
import { useModeStore } from '@/store/useModeStore';

const INTRODUCTION_DATA = [
  {
    id: 0,
    title: '자기소개',
    content: (
      <>
        안녕하세요. 저는 웹 프론트엔드 신입 개발자 김현주 입니다.
        <br />
        사용자에게 즐거움과 최고의 경험을 드리는 것을 추구합니다.
      </>
    ),
  },
];
const VALUES_DATA = [
  {
    id: 0,
    title: '사용자 중심의 사고',
    content: (
      <>
        다양한 사용 환경을 고려한 접근성 주심의 웹 구현을 지향합니다.
        <br />
        보기 좋은 UI만이 아닌 반응형 웹, 키보드/스크린 리더 사용자 등 모두가 접근 가능한 UX도
        고려합니다.
      </>
    ),
  },
  {
    id: 1,
    title: '배움에 대한 열정',
    content: (
      <>
        기술은 빠르게 변화하는 중 입니다.
        <br />
        새로운 기술에 대한 호기심과 학습 태도를 키웁니다.
        <br />
        모르면 무작정 찾아보는 것이 아닌 “왜?”라고 생각하며, 문제를 끝까지 해결합니다.
      </>
    ),
  },
  {
    id: 2,
    title: '협업을 위한 소통',
    content: (
      <>
        프론트엔드 개발자는 혼자 일하는 것이 아닌 다양한 분야의 사람들과 소통하며 일합니다.
        <br />
        적극적인 소통을 통해 명확하게 나의 의견을 전달하고, 상대방의 피드백을 수용합니다.
      </>
    ),
  },
  {
    id: 3,
    title: '깨끗한 코드와 꾸준한 리팩토링',
    content: (
      <>
        코드 한 줄에도 의도와 목적을 고민하며 작성합니다.
        <br />더 나은 구조와 성능을 위해 고민하고 리팩토링을 반복하며 끊임없이 고민합니다.
      </>
    ),
  },
];

function Introduction() {
  const mode = useModeStore((state) => state.mode);

  return (
    <section className="scrollbar-hide flex w-full flex-col gap-4 overflow-y-scroll px-16 py-11">
      <h1 className="sr-only">Introduction</h1>

      <div>
        <h3
          className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
        >
          자기소개
        </h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {INTRODUCTION_DATA.map((item) => (
            <ContentBox data={item} type="introduction" />
          ))}
        </ul>
      </div>
      <div>
        <h3
          className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
        >
          가치관
        </h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {VALUES_DATA.map((item) => (
            <ContentBox data={item} type="values" />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Introduction;
