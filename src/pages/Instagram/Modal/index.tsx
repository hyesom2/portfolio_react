import { createPortal } from 'react-dom';
import { Link, useParams } from 'react-router-dom';

import Icons from '@/components/Icons';
import Avatar from '@/components/Instagram/Avatar';
import Reviews from '@/components/Instagram/Reviews';
import Overlay from '@/components/Overlay';
import PORTFOLIO_DATA from '@/data/Portfolio';

function Modal() {
  const { id } = useParams();
  const post = PORTFOLIO_DATA.find((item) => item.id === Number(id));
  if (!post) return;

  return createPortal(
    <Overlay>
      <h1 className="sr-only">{post?.title} 게시글</h1>
      <div className="fixed top-1/2 left-1/2 z-50 flex h-full max-h-[37.5rem] w-full max-w-[56.25rem] -translate-x-1/2 -translate-y-1/2 transform rounded-r-sm bg-white">
        {/* 왼쪽 */}
        <div className="flex h-full w-full max-w-[400px] shrink-0 grow-0 items-center justify-center bg-black">
          <img src={post?.mainImage} alt={post?.title} className="w-full bg-white object-contain" />
        </div>
        {/* 오른쪽 */}
        <div className="scrollbar-hide flex h-full w-full flex-col gap-8 overflow-scroll p-4">
          <header>
            <Avatar type="profile" imgURL={post?.mainImage} name={post?.title} />
            <div className="flex w-full flex-col gap-2 pl-12">
              <div>
                {post?.description.map((desc, index) => (
                  <p key={index} className="fs-14 text-insta_black">
                    {desc}
                  </p>
                ))}
              </div>
              <ul className="text-insta_link fs-14 flex flex-wrap items-center justify-start gap-2">
                {post?.skills.map((skill, index) => (
                  <li key={index} className="whitespace-nowrap">
                    #{skill}
                  </li>
                ))}
              </ul>
              <time dateTime={post?.period} className="fs-12 text-insta_gray">
                {post?.period}
              </time>
              <ul className="flex items-center justify-start gap-2">
                <li className="group flex items-center justify-start gap-1">
                  <Icons type="instagram" name="link" />
                  <Link
                    to={post.url}
                    target="_blank"
                    className="uppercase group-hover:font-semibold group-hover:underline"
                  >
                    demo
                  </Link>
                </li>
                <li className="group flex items-center justify-start gap-1">
                  <Icons type="instagram" name="link" />
                  <Link
                    to={post.githubURL}
                    target="_blank"
                    className="uppercase group-hover:font-semibold group-hover:underline"
                  >
                    github
                  </Link>
                </li>
              </ul>
            </div>
          </header>
          <Reviews post={post} />
        </div>
      </div>
    </Overlay>,
    document.body,
  );
}

export default Modal;
