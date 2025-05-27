import { Link, Outlet } from 'react-router-dom';

import Button from '@/components/Button';
import Icons from '@/components/Icons';
import Posts from '@/components/Instagram/Posts/Posts';
import Story from '@/components/Instagram/Story';
import Tab from '@/components/Instagram/Tab';
import UserProfile from '@/components/Instagram/UserProfile';
import { USER } from '@/data/User';
import { useModeStore } from '@/store/useModeStore';

const USER_INFO = [
  {
    id: 0,
    name: 'github',
    url: USER.github,
  },
  {
    id: 1,
    name: 'blog',
    url: USER.blog,
  },
  {
    id: 2,
    name: 'email',
    url: USER.email,
  },
];

function Profile() {
  const mode = useModeStore((state) => state.mode);
  function handleResumeButton() {
    window.open(USER.resume, '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="flex h-full max-h-full w-full flex-col justify-start gap-4 pt-7 lg:gap-11 lg:px-16 lg:py-7">
      <h1 className="sr-only">Profile</h1>
      <header className="flex flex-col items-center justify-start gap-2 px-5 pt-2 md:flex-row md:gap-4 lg:gap-24 lg:pt-4">
        <UserProfile />
        <div className="flex flex-1 flex-col items-center gap-5 md:items-start">
          <div className="inline-flex items-center justify-center gap-2">
            <strong
              className={`font-regular fs-20 ${mode === 'dark' ? 'text-white' : 'text-insta_gray-900'}`}
            >
              {USER.name}
            </strong>
            <Icons type="instagram" name="badge" className="fs-20 text-insta_blue" />
            <Button
              onClick={handleResumeButton}
              className={`bg-insta_gray-200 hover:bg-insta_gray-300 fs-13 rounded-lg px-4 py-2 font-semibold text-black`}
            >
              이력서 보기
            </Button>
          </div>
          <dl className="flex flex-col gap-0.5">
            {USER_INFO.map((info) => (
              <div className="fs-14 md:fs-16 flex gap-1.5" key={info.id}>
                <dt className={`uppercase ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                  {info.name} :
                </dt>
                <dd
                  className={`${mode === 'dark' ? 'text-insta_link-light' : 'text-insta_link-dark'} hover:font-semibold`}
                >
                  <Link to={info.url} target="_blank">
                    {info.url}
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>
      <Story />
      <Tab />
      <Posts />
      <Outlet />
    </section>
  );
}

export default Profile;
