interface IconsTypes {
  type: 'mac' | 'instagram';
  name: string;
}

function Icons({ type, name }: IconsTypes) {
  return <span className={`${type} icon-${name}`} aria-hidden="true"></span>;
}

export default Icons;
