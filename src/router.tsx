import { createBrowserRouter } from 'react-router-dom';

import { GuestBookDetail, GuestBookMemo, RootLayout } from '@/layout';
import { Finder, GuestBook, Home, Instagram, Mac, Modal, Profile } from '@/pages';

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
            path: 'finder',
            element: <Finder />,
          },
          {
            path: 'instagram',
            element: <Instagram />,
            children: [
              {
                path: 'home',
                element: <Home />,
              },
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
            path: 'guestbook',
            element: <GuestBook />,
            children: [
              {
                path: '',
                element: <GuestBookDetail />,
              },
              {
                path: 'add',
                element: <GuestBookMemo />,
              },
              {
                path: ':id',
                element: <GuestBookDetail />,
              },
            ],
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
