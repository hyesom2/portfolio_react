import { useModeStore } from '@/store/useModeStore';

interface ButtonTypes {
  type?: 'traffic' | 'save' | 'cancel';
  color?: 'red' | 'yellow' | 'green';
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const TRAFFIC_COLORS = {
  red: 'bg-mac_light-red',
  yellow: 'bg-mac_light-yellow',
  green: 'bg-mac_light-green',
};

function Button({ type, color, className, children, onClick }: ButtonTypes) {
  const mode = useModeStore((state) => state.mode);

  switch (type) {
    case 'traffic':
      return (
        <button
          type="button"
          className={`h-3 w-3 ${color ? TRAFFIC_COLORS[color] : 'bg-mac_traffic_base'} rounded-full border border-black/12`}
          onClick={onClick}
        />
      );
    case 'save':
      return (
        <button
          type="button"
          className={`rounded-10 h-12 w-[72px] px-4 py-2 text-white ${mode === 'dark' ? 'bg-mac_dark-blue' : 'bg-mac_light-blue'}`}
          onClick={onClick}
        >
          {children}
        </button>
      );
    case 'cancel':
      return (
        <button
          type="button"
          className={`rounded-10 h-12 w-[72px] px-4 py-2 text-white ${mode === 'dark' ? 'bg-mac_dark-pink' : 'bg-mac_light-pink'}`}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
  return (
    <button type="button" className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
