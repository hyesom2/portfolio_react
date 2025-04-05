import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <section className="relative min-w-screen min-h-screen bg-[url(/images/mac_light.webp)] bg-no-repeat bg-center bg-cover">
      <Outlet />
    </section>
  );
}

export default RootLayout;
