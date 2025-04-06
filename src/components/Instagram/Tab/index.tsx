import Icons from '@/components/Icons';

const TAB_LIST = [
  {
    id: 0,
    name: 'posts',
    icon_name: 'grid',
  },
  {
    id: 1,
    name: 'reels',
    icon_name: 'reels',
  },
  {
    id: 2,
    name: 'saved',
    icon_name: 'bookmark',
  },
];

function Tab() {
  return (
    <ul
      className="border-insta_button-gray-hover fs-14 flex min-h-14 w-full items-center justify-center gap-8 border-t md:gap-16"
      role="tablist"
      aria-label="instagram 콘텐츠 탭"
    >
      {TAB_LIST.map((tab) => (
        <li
          className="text-insta_gray flex cursor-pointer items-center gap-2 hover:font-semibold"
          role="tab"
          key={tab.id}
          tabIndex={0}
        >
          <Icons type="instagram" name={tab.icon_name} />
          <span className="uppercase">{tab.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Tab;
