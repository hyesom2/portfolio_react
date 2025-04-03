import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/layout/RootLayout';
import { Instagram, Mac, Profile } from '@/pages';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Mac />,
      },
      {
        path: 'instagram',
        element: <Instagram />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});

export default router;
