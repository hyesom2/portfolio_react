import { USER } from '@/data/User';

function UserProfile() {
  return (
    <>
      <h1 className="sr-only">프로필 이미지</h1>
      <figure className="from-insta_yellow via-insta_orange to-insta_purple relative inline-block h-28 w-28 overflow-hidden rounded-full bg-gradient-to-r md:h-[10rem] md:w-[10rem]">
        <img
          src={USER.profile_img}
          alt=""
          className="absolute top-1/2 left-1/2 block h-26 w-26 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white p-1 md:h-[9.375rem] md:w-[9.375rem]"
        />
        <figcaption className="sr-only">{USER.name}</figcaption>
      </figure>
    </>
  );
}

export default UserProfile;
