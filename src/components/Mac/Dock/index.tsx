import { useNavigate } from 'react-router-dom';

const DOCK_DATA = [
  {
    id: 0,
    title: 'instagram',
    img_url: '/images/instagram_logo.webp',
  },
  {
    id: 1,
    title: 'note',
    img_url: '/images/note_light.webp',
  },
];

function Dock() {
  const navigate = useNavigate();
  const handleAppClick = (title: string) => {
    if (title === 'instagram') {
      navigate(`/${title}/profile`);
    } else {
      navigate(`/${title}`);
    }
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 transform p-2">
      <div
        className="absolute top-0 left-0 h-full w-full rounded-xl bg-white opacity-20"
        aria-hidden="true"
      ></div>
      <ul className="flex gap-8">
        {DOCK_DATA.map((app) => (
          <li key={app.id}>
            <button
              className="group h-16 w-16 cursor-pointer"
              onClick={() => handleAppClick(app.title)}
            >
              <figure className="relative flex flex-col">
                <img src={app.img_url} alt="" />
                <figcaption className="bg-mac_dark-bg text-mac_dark-font invisible absolute -top-1/2 left-1/2 -translate-x-1/2 transform rounded-lg p-1 whitespace-nowrap group-hover:visible">
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
