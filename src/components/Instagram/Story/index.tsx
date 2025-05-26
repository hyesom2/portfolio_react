import { useLocation, useNavigate } from 'react-router-dom';

import PORTFOLIO_DATA from '@/data/Portfolio';
import { useModeStore } from '@/store/useModeStore';

function Story() {
  const location = useLocation();
  const navigate = useNavigate();
  const mode = useModeStore((state) => state.mode);

  function handleStoryClick(id: number) {
    navigate(`${location.pathname}/post/${id}`);
  }

  return (
    <div className="w-full">
      <ul className="scrollbar-hide flex flex-nowrap items-start gap-4 overflow-x-scroll px-4 whitespace-nowrap">
        {PORTFOLIO_DATA.map((portfolio) => (
          <li
            key={portfolio.id}
            className={`group h-full cursor-pointer`}
            onClick={() => handleStoryClick(portfolio.id)}
            tabIndex={0}
          >
            <figure className={`flex h-full flex-col gap-2`}>
              <img
                src={portfolio.mainImage}
                alt=""
                className={`border-insta_button-gray block h-14 w-14 rounded-full border bg-white object-cover p-0.5 group-hover:border-2 md:h-20 md:w-20`}
              />
              <figcaption
                className={`fs-14 w-14 truncate text-center leading-none group-hover:font-semibold group-focus:font-semibold group-active:font-semibold md:w-20 ${mode === 'dark' ? 'text-white' : 'text-black'}`}
              >
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
