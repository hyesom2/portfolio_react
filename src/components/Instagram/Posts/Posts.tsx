import Icons from '@/components/Icons';
import PORTFOLIO_DATA from '@/data/Portfolio';
import { useModalStore } from '@/stores/useModalStore';

function Posts() {
  const { openModal } = useModalStore();

  return (
    <ul className="grid grid-cols-3 gap-1 px-5" role="list">
      {PORTFOLIO_DATA.slice()
        .reverse()
        .map((portfolio) => (
          <li
            key={portfolio.id}
            className="bg-insta_inactive relative flex cursor-pointer items-center justify-center"
            role="listitem"
            aria-label={`${portfolio.title} 게시물`}
            onClick={openModal}
          >
            <figure className="h-full w-full">
              <img src={portfolio.mainImage} alt="" className="block h-full w-full object-cover" />
              <figcaption className="sr-only">{portfolio.title}</figcaption>
            </figure>
            <Icons type="instagram" name="gallery" className="absolute top-4 right-4 text-white" />
          </li>
        ))}
    </ul>
  );
}
export default Posts;
