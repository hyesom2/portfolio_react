import { createBrowserRouter } from 'react-router-dom';

import { Instagram, Mac, Profile, WindowFrame } from '@/pages';

export const routes = [
  {
    path: '/',
    element: <Mac />,
    children: [
      {
        path: 'instagram',
        element: <WindowFrame />,
        children: [
          {
            index: true,
            element: <Instagram />,
          },
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
