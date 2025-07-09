import { useModeStore } from '@/store/useModeStore';

function ProfileMain() {
  const mode = useModeStore((state) => state.mode);

  return (
    <section className="flex h-full w-full items-center justify-center">
      <figure className="flex flex-col items-center gap-4">
        <img src="/images/guestbook.webp" alt="" className="h-64 w-64 rounded-full object-cover" />
        <figcaption className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
          저에게 남기고 싶은 말을 자유롭게 적어주세요😄
        </figcaption>
      </figure>
    </section>
  );
}

export default ProfileMain;
