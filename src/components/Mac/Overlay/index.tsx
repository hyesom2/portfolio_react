type OverlayProps = {
  children: React.ReactNode;
};

function Overlay({ children }: OverlayProps) {
  return (
    <div className="bg-insta_overlay fixed top-0 right-0 bottom-0 left-0 z-50">{children}</div>
  );
}

export default Overlay;
