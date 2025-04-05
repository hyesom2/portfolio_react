interface IconsTypes {
  type: 'mac' | 'instagram';
  name: string;
  className?: string;
}

function Icons({ type, name, className }: IconsTypes) {
  return <span className={`${className} ${type} icon-${name}`} aria-hidden="true"></span>;
}

export default Icons;
