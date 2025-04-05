import TrafficLights from '@/components/Mac/TrafficLights';

interface TitleBarTypes {
  title?: string;
}

function TitleBar({ title }: TitleBarTypes) {
  return (
    <div className="absolute top-0 left-0 bg-white flex w-full h-7 items-center px-2 z-50">
      <h1 className="absolute left-1/2 transform -translate-x-1/2 order-1 text-mac_light-font fs-13">
        {title}
      </h1>
      <TrafficLights />
    </div>
  );
}

export default TitleBar;
