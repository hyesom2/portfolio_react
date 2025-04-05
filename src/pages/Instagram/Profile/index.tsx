import { Link } from 'react-router-dom';

import Icons from '@/components/Icons';
import Posts from '@/components/Instagram/Posts/Posts';
import Story from '@/components/Instagram/Story';
import Tab from '@/components/Instagram/Tab';
import UserProfile from '@/components/Instagram/UserProfile';
import { USER } from '@/data/User';

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
  return (
    <section className="w-full md:px-16 flex flex-col gap-11 bg-white md:py-8 overflow-scroll scrollbar-hide h-full">
      <h1 className="sr-only">Profile</h1>
      <header className="flex justify-start items-center gap-24 px-5">
        <UserProfile />
        <div className="flex flex-col gap-5 items-start flex-1">
          <div className="inline-flex justify-center items-start gap-2">
            <strong className="text-insta_font font-regular fs-20">{USER.name}</strong>
            <Icons type="instagram" name="badge" className="fs-18 text-insta_badge-blue" />
          </div>
          <dl className="flex flex-col gap-0.5">
            {USER_INFO.map((info) => (
              <div className="flex gap-1.5" key={info.id}>
                <dt className="uppercase">{info.name} :</dt>
                <dd className="text-insta_link hover:font-semibold">
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
    </section>
  );
}

export default Profile;
