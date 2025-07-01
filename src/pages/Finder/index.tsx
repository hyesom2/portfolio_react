import { WindowFrame } from '@/layout';
import { useModeStore } from '@/store/useModeStore';

function Finder() {
  const mode = useModeStore((state) => state.mode);

  return (
    <WindowFrame
      className={`relative flex h-full flex-col md:flex-row ${mode === 'dark' ? 'bg-black' : ''}`}
    >
      {/* <h1 className="sr-only">Finder 입니다.</h1> */}
      <h1 className="fs-20 absolute z-50 text-white">Finder 입니다.</h1>
    </WindowFrame>
  );
}

export default Finder;
