import Button from '@/components/Button';
import Icons from '@/components/Icons';

const MENUBAR_MENUS = ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'];

const MENUBAR_SYSTEM = ['wifi_light', 'battery_light', 'switch_light'];

function Menubar() {
  return (
    <nav
      aria-label="macOS 메뉴바"
      className="relative flex justify-between md:justify-start items-center w-full h-6 px-3"
    >
      <div className="bg-blend-color-burn bg-mac_light-bg w-full h-full absolute top-0 left-0 opacity-20 -z-10"></div>
      <h1
        className="inline-flex justify-center items-center w-11 h-full mr-0.5"
        aria-label="apple 로고"
      >
        <Button>
          <Icons type="mac" name="logo_light" />
        </Button>
      </h1>
      <ul
        role="menubar"
        className="hidden md:flex justify-start items-center flex-1 gap-0.5 text-white"
      >
        {MENUBAR_MENUS.map((menu, index) => (
          <li role="none" key={index} className="flex justify-center items-center px-2">
            <button type="button" role="menuitem" className="fs-14">
              {menu}
            </button>
          </li>
        ))}
      </ul>
      <ul className="flex justify-end items-center gap-1.5 text-white">
        {MENUBAR_SYSTEM.map((menu, index) => (
          <li role="none" key={index}>
            <button type="button" role="menuitem">
              <Icons type="mac" name={`${menu}`} />
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
