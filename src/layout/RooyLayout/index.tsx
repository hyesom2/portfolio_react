import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <section className="relative min-h-screen min-w-screen bg-[url(/images/mac_light.webp)] bg-cover bg-center bg-no-repeat">
      <Outlet />
    </section>
  );
}

export default RootLayout;
