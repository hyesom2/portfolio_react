import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Icons from '@/components/Icons';
import ProfileMenu from '@/components/Mac/GlobalSidebar/ProfileSidebar/ProfileMenu';
import { useModeStore } from '@/store/useModeStore';

const PROFILE_MENU_LIST = [
  {
    id: 0,
    title: '자기소개 / 가치관',
    name: 'introduction',
  },
  {
    id: 1,
    title: '경력사항 / 교육',
    name: 'history',
  },
  {
    id: 2,
    title: '사용 언어',
    name: 'skills',
  },
  {
    id: 3,
    title: '자격증',
    name: 'certificate',
  },
];

function ProfileSidebar() {
  const mode = useModeStore((state) => state.mode);
  const navigate = useNavigate();

  return (
    <aside
      className={`flex h-full w-full max-w-80 flex-col gap-11 border-r pt-11 ${mode === 'dark' ? 'border-r-mac_dark-gray03' : 'border-r-mac_light-gray03'}`}
    >
      <header className="flex shrink-0 items-center justify-between px-2">
        <h2 className={`fs-34 font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
          <Link to={'/profile'}>Profile</Link>
        </h2>
      </header>

      <div className="scrollbar-hide flex h-full flex-1 flex-col gap-9 overflow-y-scroll px-4 pb-11">
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          <li
            role="menuitem"
            className={`border-b last:border-b-0 ${mode === 'dark' ? 'border-b-mac_dark-gray03' : 'border-b-mac_light-gray03'}`}
          >
            <button
              type="button"
              className="relative inline-flex w-full items-center gap-4 px-4 py-2 hover:font-bold focus:font-bold active:font-bold"
              onClick={() => navigate('info')}
            >
              <figure
                className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full"
                aria-hidden="true"
              >
                <img src="/images/profile.webp" alt="" className="h-full w-full object-cover" />
              </figure>
              <figcaption className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                김현주
              </figcaption>
              <Icons
                type="mac"
                name="chevron_light"
                className={`absolute top-1/2 right-4 -translate-y-1/2 ${mode === 'dark' ? 'text-mac_dark-font/30' : 'text-mac_light-font/30'}`}
              />
            </button>
          </li>
        </ul>
        <ul
          className={`rounded-14 flex flex-col ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'}`}
          role="menu"
        >
          {PROFILE_MENU_LIST.map((item) => (
            <ProfileMenu data={item} />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default ProfileSidebar;
