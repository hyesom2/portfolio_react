interface ButtonTypes {
  type?: 'traffic' | 'modify' | 'delete';
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
  switch (type) {
    case 'traffic':
      return (
        <button
          type="button"
          className={`h-3 w-3 ${color ? TRAFFIC_COLORS[color] : 'bg-mac_traffic_base'} rounded-full border border-black/12`}
          onClick={onClick}
        />
      );
    case 'modify':
      return (
        <button
          type="button"
          className="bg-mac_light-indigo h-[78px] w-[72px] rounded-l-[10px] rounded-r-[2px] px-4 py-2 text-white"
          onClick={onClick}
        >
          {children}
        </button>
      );
    case 'delete':
      return (
        <button
          type="button"
          className="bg-mac_light-pink h-[78px] w-[72px] rounded-l-[2px] rounded-r-[10px] px-4 py-2 text-white"
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
