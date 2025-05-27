import { useNavigate, useParams } from 'react-router-dom';

import Button from '@/components/Button';
import Icons from '@/components/Icons';
import PORTFOLIO_DATA from '@/data/Portfolio';

function Overlay({ children }: { children: React.ReactNode }) {
  const { id } = useParams();
  const navigate = useNavigate();

  function handlePostFn(direction: 'prev' | 'next') {
    const currentIndex = PORTFOLIO_DATA.findIndex((item) => item.id === Number(id));
    const lastIndex = PORTFOLIO_DATA.length - 1;
    let newIndex;

    if (currentIndex === -1) return;

    if (direction === 'prev') {
      newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    }

    const newId = PORTFOLIO_DATA[newIndex].id;
    navigate(`/instagram/profile/post/${newId}`, { replace: true });
  }

  return (
    <div className="open bg-insta_overlay fixed inset-0 top-0 right-0 bottom-0 left-0 z-50">
      <Button
        className="fs-20 absolute top-4 right-4 p-0.5 text-white"
        onClick={() => navigate(-1)}
      >
        <Icons type="instagram" name="close" />
      </Button>
      {children}
      <div className="fixed top-1/2 flex w-full -translate-y-1/2 transform items-center justify-between px-6">
        <Button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
          onClick={() => handlePostFn('prev')}
        >
          <Icons type="instagram" name="chevron-left" />
        </Button>
        <Button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
          onClick={() => handlePostFn('next')}
        >
          <Icons type="instagram" name="chevron-right" />
        </Button>
      </div>
    </div>
  );
}

export default Overlay;
