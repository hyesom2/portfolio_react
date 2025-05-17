import TrafficLights from '@/components/Mac/TrafficLights';
import { useModeStore } from '@/store/useModeStore';

interface TitleBarTypes {
  title?: string;
}

function TitleBar({ title }: TitleBarTypes) {
  const { mode } = useModeStore();

  return (
    <div
      className={`absolute top-0 left-0 z-50 flex h-7 w-full items-center ${mode === 'dark' ? 'bg-mac_dark-gray06' : 'bg-white'} shadow-drop px-2 shadow-inner`}
    >
      <h1
        className={`${mode === 'dark' ? 'text-mac_dark-font-active' : 'text-mac_light-font-active'} fs-13 absolute left-1/2 order-1 -translate-x-1/2 transform font-bold`}
      >
        {title}
      </h1>
      <TrafficLights />
    </div>
  );
}

export default TitleBar;
