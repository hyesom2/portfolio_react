import { useNavigate } from 'react-router-dom';

const DOCK_DATA = [
  {
    id: 0,
    title: 'instagram',
    img_url: '/images/instagram_logo.webp',
  },
  {
    id: 1,
    title: 'trash',
    img_url: '/images/trash_light.webp',
  },
];

function Dock() {
  const navigate = useNavigate();
  const handleAppClick = (title: string) => {
    navigate(`/${title}`);
  };

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-2">
      <div
        className="absolute top-0 left-0 bg-white opacity-20 w-full h-full rounded-xl"
        aria-hidden="true"
      ></div>
      <ul className="flex gap-8">
        {DOCK_DATA.map((app) => (
          <li key={app.id}>
            <button
              className="w-16 h-16 cursor-pointer group"
              onClick={() => handleAppClick(app.title)}
            >
              <figure className="flex flex-col relative">
                <img src={app.img_url} alt="" />
                <figcaption className="whitespace-nowrap absolute -top-1/2 left-1/2 transform -translate-x-1/2 bg-mac_dark-bg rounded-lg p-1 text-mac_dark-font invisible group-hover:visible">
                  {app.title}
                </figcaption>
              </figure>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Dock;
