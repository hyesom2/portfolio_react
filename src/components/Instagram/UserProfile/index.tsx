import { USER } from '@/data/User';

function UserProfile() {
  return (
    <>
      <h1 className="sr-only">프로필 이미지</h1>
      <figure className="relative w-[10rem] h-[10rem] inline-block rounded-full overflow-hidden bg-gradient-to-r from-insta_yellow via-insta_orange to-insta_purple">
        <img
          src={USER.profile_img}
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[9.375rem] h-[9.375rem] rounded-full block p-1 bg-white"
        />
        <figcaption className="sr-only">{USER.name}</figcaption>
      </figure>
    </>
  );
}

export default UserProfile;
