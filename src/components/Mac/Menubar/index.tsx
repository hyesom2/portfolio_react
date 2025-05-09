import Button from '@/components/Button';
import Icons from '@/components/Icons';
import { useModeStore } from '@/store/useModeStore';

function Menubar() {
  const { mode, setMode } = useModeStore();
  const handleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  const MENUBAR_MENUS = ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'];
  const MENUBAR_SYSTEM = [
    {
      name: 'wifi_light',
      onClick: () => console.log('wifi'),
    },
    {
      name: 'battery_light',
      onClick: () => console.log('battery'),
    },
    {
      name: 'switch_light',
      onClick: handleMode,
    },
  ];

  return (
    <nav
      aria-label="macOS 메뉴바"
      className="relative flex h-6 w-full items-center justify-between px-3 md:justify-start"
    >
      <div
        className={`bg-mac_light-bg absolute top-0 left-0 -z-10 h-full w-full opacity-20 bg-blend-color-burn`}
      ></div>
      <h1
        className="mr-0.5 inline-flex h-full w-11 items-center justify-center"
        aria-label="apple 로고"
      >
        <Button>
          <Icons type="mac" name="logo_light" />
        </Button>
      </h1>
      <ul
        role="menubar"
        className="hidden flex-1 items-center justify-start gap-0.5 text-white md:flex"
      >
        {MENUBAR_MENUS.map((menu, index) => (
          <li role="none" key={index} className="flex items-center justify-center px-2">
            <button type="button" role="menuitem" className="fs-14">
              {menu}
            </button>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-end gap-1.5 text-white">
        {MENUBAR_SYSTEM.map((menu, index) => (
          <li role="none" key={index}>
            <button type="button" role="menuitem" onClick={menu.onClick}>
              <Icons type="mac" name={`${menu.name}`} />
            </button>
          </li>
        ))}
        <li role="none">Mon Jun 22</li>
        <li role="none">9:41 AM</li>
      </ul>
    </nav>
  );
}

export default Menubar;
