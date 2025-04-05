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
      className="w-full min-h-14 flex justify-center items-center gap-16 border-t border-insta_button-gray-hover"
      role="tablist"
      aria-label="instagram 콘텐츠 탭"
    >
      {TAB_LIST.map((tab) => (
        <li
          className="flex items-center gap-2 cursor-pointer hover:font-semibold text-insta_gray"
          role="tab"
          key={tab.id}
        >
          <Icons type="instagram" name={tab.icon_name} />
          <span className="uppercase fs-14">{tab.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Tab;
