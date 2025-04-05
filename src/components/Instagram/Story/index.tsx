import PORTFOLIO_DATA from '@/data/Portfolio';

function Story() {
  return (
    <ul className="flex gap-4 px-5">
      {PORTFOLIO_DATA.map((portfolio) => (
        <li key={portfolio.id} className="group">
          <figure>
            <img
              src={portfolio.mainImage}
              alt=""
              className="cursor-pointer w-20 h-20 rounded-full p-0.5 bg-white object-cover border border-insta_button-gray group-hover:border-2"
            />
            <figcaption className="w-20 truncate">{portfolio.title}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default Story;
