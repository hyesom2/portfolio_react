import { Link } from 'react-router-dom';

import Icons from '@/components/Icons';
import Overlay from '@/components/Overlay';

function Modal() {
  return (
    <Overlay>
      <h1 className="sr-only">Modal내용</h1>
      <div className="fixed top-1/2 left-1/2 z-50 flex max-h-[37.5rem] w-full max-w-[56.25rem] -translate-x-1/2 -translate-y-1/2 transform rounded-r-sm bg-white">
        {/* 왼쪽 */}
        <div className="min-w-[400px]">
          <img src="/images/pokemon/pokemon.webp" alt="포켓몬" className="w-full" />
        </div>
        {/* 오른쪽 */}
        <div className="flex w-full flex-col gap-8 p-4">
          <div>
            <figure className="flex items-center justify-start gap-4">
              <img
                src="/images/pokemon/pokemon.webp"
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
              <figcaption className="fs-14 text-insta_font font-semibold">
                포켓몬도감 팀 프로젝트
              </figcaption>
            </figure>
            <div className="flex flex-col gap-2 pl-12">
              <p className="fs-14 text-insta_black">
                'Pokemon Open API를 활용하여 데이터를 비동기적으로 처리하고, Redux Toolkit을 활용한
                리액트 프로젝트로, 사용자에게 포켓몬 검색과 정보, 랜덤 선택, 배틀, 나의 포켓몬
                리스트 관리 등 다양한 기능을 제공합니다.'
              </p>
              <ul className="text-insta_link fs-14 flex items-center justify-start gap-1">
                <li>#HTML5</li>
                <li>#JavaScript</li>
                <li>#Axios</li>
              </ul>
              <time dateTime="2024. 04. 14 ~ 2024. 04. 21" className="fs-12 text-insta_gray">
                2024. 04. 14 ~ 2024. 04. 21
              </time>
              <ul>
                <li>
                  <Icons type="instagram" name="icon-link" />
                  <Link to="/">DEMO</Link>
                </li>
                <li>
                  <Icons type="instagram" name="icon-link" />
                  <Link to="/">GitHub</Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="scrollbar-hide flex flex-col gap-7 overflow-scroll">
            <li className="justif flex gap-4">
              <img
                src="https://i.namu.wiki/i/1mEwgl9rjQOSNrLd0BztTE7NcPOGnzRxHl_SW_uawAxtnMk9Tdzh3wTwqZK7Q1Q3FENfDJ4yqEmRMiKnTg_wNA.webp"
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <strong className="mr-2">기여한 일</strong>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus earum, et
                nisi iste repellat explicabo ea quibusdam quo quod quia ipsum ad. Inventore ea,
                laboriosam in perfe
              </div>
            </li>
            <li className="justif flex gap-4">
              <img
                src="https://i.namu.wiki/i/1mEwgl9rjQOSNrLd0BztTE7NcPOGnzRxHl_SW_uawAxtnMk9Tdzh3wTwqZK7Q1Q3FENfDJ4yqEmRMiKnTg_wNA.webp"
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <strong className="mr-2">기여한 일</strong>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus earum, et
                nisi iste repellat explicabo ea quibusdam quo quod quia ipsum ad. Inventore ea,
                laboriosam in perfe
              </div>
            </li>
            <li className="justif flex gap-4">
              <img
                src="https://i.namu.wiki/i/1mEwgl9rjQOSNrLd0BztTE7NcPOGnzRxHl_SW_uawAxtnMk9Tdzh3wTwqZK7Q1Q3FENfDJ4yqEmRMiKnTg_wNA.webp"
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <strong className="mr-2">기여한 일</strong>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus earum, et
                nisi iste repellat explicabo ea quibusdam quo quod quia ipsum ad. Inventore ea,
                laboriosam in perfe
              </div>
            </li>
            <li className="justif flex gap-4">
              <img
                src="https://i.namu.wiki/i/1mEwgl9rjQOSNrLd0BztTE7NcPOGnzRxHl_SW_uawAxtnMk9Tdzh3wTwqZK7Q1Q3FENfDJ4yqEmRMiKnTg_wNA.webp"
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <strong className="mr-2">기여한 일</strong>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus earum, et
                nisi iste repellat explicabo ea quibusdam quo quod quia ipsum ad. Inventore ea,
                laboriosam in perfe
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Overlay>
  );
}

export default Modal;
