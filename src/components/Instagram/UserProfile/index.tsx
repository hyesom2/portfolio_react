import { USER } from '@/data/User';
import { useModeStore } from '@/store/useModeStore';

function UserProfile() {
  const mode = useModeStore((state) => state.mode);

  return (
    <>
      <h1 className="sr-only">프로필 이미지</h1>
      <figure className="from-insta_yellow via-insta_orange to-insta_purple relative inline-block h-28 w-28 shrink-0 grow-0 overflow-hidden rounded-full bg-gradient-to-r md:h-[10rem] md:w-[10rem]">
        <img
          src={USER.profile_img}
          alt=""
          className={`absolute top-1/2 left-1/2 block h-26 w-26 -translate-x-1/2 -translate-y-1/2 transform rounded-full p-1 md:h-[9.375rem] md:w-[9.375rem] ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}
        />
        <figcaption className="sr-only">{USER.name}</figcaption>
      </figure>
    </>
  );
}

export default UserProfile;
