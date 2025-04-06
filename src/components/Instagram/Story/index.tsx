import { useLocation, useNavigate } from 'react-router-dom';

import PORTFOLIO_DATA from '@/data/Portfolio';

function Story() {
  const location = useLocation();
  const navigate = useNavigate();
  function handleStoryClick(id: number) {
    navigate(`${location.pathname}/post/${id}`);
  }

  return (
    <div className="w-full">
      <ul className="scrollbar-hide flex flex-nowrap items-start gap-4 overflow-x-scroll px-4 whitespace-nowrap">
        {PORTFOLIO_DATA.map((portfolio) => (
          <li
            key={portfolio.id}
            className="group h-full"
            onClick={() => handleStoryClick(portfolio.id)}
            tabIndex={0}
          >
            <figure className="h-full">
              <img
                src={portfolio.mainImage}
                alt=""
                className="border-insta_button-gray block h-14 w-14 cursor-pointer rounded-full border bg-white object-cover p-0.5 group-hover:border-2 md:h-20 md:w-20"
              />
              <figcaption className="fs-14 w-14 truncate text-center leading-none group-hover:font-semibold group-focus:font-semibold group-active:font-semibold md:w-20">
                {portfolio.title}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Story;
