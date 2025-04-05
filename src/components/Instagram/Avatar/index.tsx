interface AvatarTypes {
  type?: string;
  imgURL: string;
  name?: string;
}

function Avatar({ type, imgURL, name }: AvatarTypes) {
  return (
    <figure className="flex shrink-0 items-center justify-start gap-4 overflow-hidden">
      <img src={imgURL} alt="" className="h-8 w-8 rounded-full object-cover" />
      <figcaption
        className={`${type === 'profile' ? 'fs-14 text-insta_font font-semibold' : 'sr-only'}`}
      >
        {name}
      </figcaption>
    </figure>
  );
}
export default Avatar;
