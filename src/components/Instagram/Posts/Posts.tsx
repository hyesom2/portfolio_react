import { useNavigate } from 'react-router-dom';

import Icons from '@/components/Icons';
import PORTFOLIO_DATA from '@/data/Portfolio';

function Posts() {
  const navigate = useNavigate();
  function handleOpenModal(id: number) {
    navigate(`post/${id}`);
  }

  return (
    <ul className="grid grid-cols-3 gap-1 px-5 md:gap-2" role="list">
      {PORTFOLIO_DATA.slice()
        .reverse()
        .map((portfolio) => (
          <li
            key={portfolio.id}
            className="bg-insta_inactive relative flex cursor-pointer items-center justify-center"
            role="listitem"
            aria-label={`${portfolio.title} 게시물`}
            onClick={() => handleOpenModal(portfolio.id)}
          >
            <figure className="aspect-square w-full">
              <img
                src={portfolio.mainImage}
                alt=""
                className="block h-full w-full object-contain"
              />
              <figcaption className="sr-only">{portfolio.title}</figcaption>
            </figure>
            <Icons type="instagram" name="gallery" className="absolute top-4 right-4 text-white" />
          </li>
        ))}
    </ul>
  );
}
export default Posts;
