import ContentBox from '@/components/Mac/ContentBox';
import { useModeStore } from '@/store/useModeStore';

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

  return (
    <section className="flex w-full flex-col gap-4 px-16 py-11">
      <h1 className="sr-only">history</h1>

      <div>
        <h3
          className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
        >
          경력사항
        </h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {WORK_DATA.map((item) => (
            <ContentBox data={item} type="work" />
          ))}
        </ul>
      </div>
      <div>
        <h3
          className={`fs-14 pb-2 pl-4 ${mode === 'dark' ? 'text-mac_dark-font/60' : 'text-mac_light-font/60'}`}
        >
          교육
        </h3>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {EDUCATION_DATA.map((item) => (
            <ContentBox data={item} type="education" />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default History;
