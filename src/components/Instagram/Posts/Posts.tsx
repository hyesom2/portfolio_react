import Icons from '@/components/Icons';
import PORTFOLIO_DATA from '@/data/Portfolio';

function Posts() {
  return (
    <ul className="grid grid-cols-3 gap-1 px-5" role="list">
      {PORTFOLIO_DATA.slice()
        .reverse()
        .map((portfolio) => (
          <li
            key={portfolio.id}
            className="relative flex justify-center items-center bg-insta_inactive cursor-pointer"
            role="listitem"
            aria-label={`${portfolio.title} 게시물`}
          >
            <figure className="w-full h-full">
              <img src={portfolio.mainImage} alt="" className="block w-full h-full object-cover" />
              <figcaption className="sr-only">{portfolio.title}</figcaption>
            </figure>
            <Icons type="instagram" name="gallery" className="absolute top-4 right-4 text-white" />
          </li>
        ))}
    </ul>
  );
}
export default Posts;
