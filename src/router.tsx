import { createBrowserRouter } from 'react-router-dom';

import {
  GuestBookDetail,
  GuestBookMemo,
  ProfileCertificate,
  ProfileHistory,
  ProfileInfo,
  ProfileIntroduction,
  ProfileSkills,
  RootLayout,
} from '@/layout';
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
            path: 'profile',
            element: <Finder />,
            children: [
              {
                path: 'info',
                element: <ProfileInfo />,
              },
              {
                path: 'history',
                element: <ProfileHistory />,
              },
              {
                path: 'skills',
                element: <ProfileSkills />,
              },
              {
                path: 'introduction',
                element: <ProfileIntroduction />,
              },
              {
                path: 'certificate',
                element: <ProfileCertificate />,
              },
            ],
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
