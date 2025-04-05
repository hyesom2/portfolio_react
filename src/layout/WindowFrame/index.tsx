import TitleBar from '@/components/Mac/TitleBar';

interface WindowFrameTypes {
  children?: React.ReactNode;
  className?: string;
}

function WindowFrame({ children, className }: WindowFrameTypes) {
  return (
    <section className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-mac_light-windowFrame-bg w-3/4 h-3/4 border border-mac_light-border">
      <TitleBar title="instagram" />
      <main className={className}>{children}</main>
    </section>
  );
}

export default WindowFrame;
