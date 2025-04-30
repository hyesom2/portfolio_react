import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '@/layout';
import { Instagram, Mac, Modal, Note, Profile } from '@/pages';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Mac />,
        children: [
          {
            path: 'instagram',
            element: <Instagram />,
            children: [
              {
                path: 'profile',
                element: <Profile />,
                children: [
                  {
                    path: 'post/:id',
                    element: <Modal />,
                  },
                ],
              },
            ],
          },
          {
            path: 'Note',
            element: <Note />,
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
