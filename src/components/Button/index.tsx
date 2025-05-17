interface ButtonTypes {
  type?: 'traffic';
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
  }
  return (
    <button className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
