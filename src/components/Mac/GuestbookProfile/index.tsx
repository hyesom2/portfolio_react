import { useNavigate, useSearchParams } from 'react-router-dom';

import { useModeStore } from '@/store/useModeStore';

interface GuestbookProfileProps {
  id: number;
  profile_img?: string;
  nickname: string;
  created_at: string;
}

function GuestbookProfile({ id, nickname, profile_img, created_at }: GuestbookProfileProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = useModeStore((state) => state.mode);
  const currentGuestbook = searchParams.get('id');
  const isActive = currentGuestbook === String(id);

  const handleProfileClick = () => {
    navigate(`/guestbook?id=${id}`);
  };

  return (
    <li
      className={`fs-14 text-mac_light-font-active ${mode === 'dark' ? 'hover:bg-mac_dark-profileBg' : 'hover:bg-mac_light-gray06'} rounded-10 focus:${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-mac_light-gray06'} relative flex h-[70px] w-full items-center justify-start gap-2 px-4 hover:cursor-pointer ${isActive ? (mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-mac_light-gray06') : ''} `}
      onClick={handleProfileClick}
    >
      <figure className="flex w-full gap-3">
        <img
          src={profile_img || '/images/guestbook_profile.webp'}
          alt=""
          className="border-mac_light-gray03 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white object-cover"
        />
        <figcaption className={`flex w-full flex-col`}>
          <span className={`fs-16 font-semibold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
            {nickname}
          </span>
          <span
            className={`fs-12 ${mode === 'dark' ? 'text-mac_dark-font-active' : 'text-mac_light-font-active'}`}
          >
            {created_at.slice(0, 10)}
          </span>
        </figcaption>
      </figure>
      {isActive && (
        <span className="bg-mac_light-blue h-2.5 w-2.5 flex-shrink-0 rounded-full"></span>
      )}
    </li>
  );
}

export default GuestbookProfile;
