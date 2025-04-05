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
          className={`w-3 h-3 ${TRAFFIC_COLORS[color ?? 'red']} border border-mac_light-border rounded-full cursor-pointer`}
          onClick={onClick}
        />
      );
  }
  return (
    <button className={`${className} cursor-pointer`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
