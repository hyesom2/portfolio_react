import Button from '@/components/Button';
import Icons from '@/components/Icons';
import { useModalStore } from '@/stores/useModalStore';

function Overlay({ children }: { children: React.ReactNode }) {
  const { closeModal } = useModalStore();

  return (
    <div className="open bg-insta_overlay fixed inset-0 top-0 right-0 bottom-0 left-0 z-50">
      <Button className="fs-20 absolute top-4 right-4 p-0.5 text-white" onClick={closeModal}>
        <Icons type="instagram" name="close" />
      </Button>
      {children}
    </div>
  );
}

export default Overlay;
