import { useModeStore } from '@/store/useModeStore';

function Info() {
  const mode = useModeStore((state) => state.mode);

  return (
    <section className="flex w-full flex-col gap-4 px-16 py-11">
      <h1 className="sr-only">Profile Info</h1>

      <h3 className="text-mac_light-font-active fs-14 pb-2 pl-4">기본 정보</h3>
      <img
        src="/images/profile.webp"
        alt="프로필"
        className="mx-auto h-60 w-60 rounded-full object-cover"
      />
      <dl
        className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
        role="menu"
      >
        <div className="border-b-mac_light-gray03 relative inline-flex w-full items-center gap-4 border-b px-4 py-2">
          <dt>이름</dt>
          <dd>김현주</dd>
        </div>
        <div className="border-b-mac_light-gray03 relative inline-flex w-full items-center gap-4 border-b px-4 py-2">
          <dt>생년월일</dt>
          <dd>1994.01.28</dd>
        </div>
        <div className="border-b-mac_light-gray03 relative inline-flex w-full items-center gap-4 border-b px-4 py-2">
          <dt>이메일</dt>
          <dd>
            <a href="mailto:kimhyesom1202@gmail.com">kimhyesom1202@gmail.com</a>
          </dd>
        </div>
        <div className="border-b-mac_light-gray03 relative inline-flex w-full items-center gap-4 border-b px-4 py-2">
          <dt>깃허브</dt>
          <dd>
            <a href="https://github.com/hyesom2" target="_blank">
              https://github.com/hyesom2
            </a>
          </dd>
        </div>
        <div className="border-b-mac_light-gray03 relative inline-flex w-full items-center gap-4 border-b px-4 py-2">
          <dt>블로그</dt>
          <dd>
            <a href="https://github.com/hyesom2" target="_blank">
              https://velog.io/@hyesom2
            </a>
          </dd>
        </div>
        <div className="relative inline-flex w-full items-center gap-4 px-4 py-2">
          <dt>포트폴리오 사이트</dt>
          <dd>
            <a href="https://github.com/hyesom2" target="_blank">
              https://hyeonju-portfolio.netlify.app/
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default Info;
