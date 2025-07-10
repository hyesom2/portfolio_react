import { useNavigate } from 'react-router-dom';

import Icons from '@/components/Icons';
import { useModeStore } from '@/store/useModeStore';

interface DataProps {
  data: {
    id: number;
    title: string;
    name: string;
  };
}

function ProfileMenu({ data }: DataProps) {
  const mode = useModeStore((state) => state.mode);
  const navigate = useNavigate();

  return (
    <li
      role="menuitem"
      className={`border-b last:border-b-0 ${mode === 'dark' ? 'border-b-mac_dark-gray03' : 'border-b-mac_light-gray03'}`}
    >
      <button
        type="button"
        className="relative inline-flex w-full items-center gap-4 px-4 py-2 hover:font-bold focus:font-bold active:font-bold"
        onClick={() => navigate(`${data.name}`)}
      >
        <span className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>{data.title}</span>
        <Icons
          type="mac"
          name="chevron_light"
          className={`absolute top-1/2 right-4 -translate-y-1/2 ${mode === 'dark' ? 'text-mac_dark-font/30' : 'text-mac_light-font/30'}`}
        />
      </button>
    </li>
  );
}

export default ProfileMenu;
