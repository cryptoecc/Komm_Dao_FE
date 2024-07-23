// src/Router.tsx
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PATH } from './constants/path';
import Main from './pages/main/main';
import MainBoard from './pages/mainboard/mainBoard';
import Dashboard from './pages/mainboard/dashboard';
import Deal from './pages/mainboard/deal';
import Discover from './pages/mainboard/discover';
import Contribution from './pages/mainboard/contribution';
import Governance from './pages/mainboard/governance';
import ProfileMyPage from './pages/mainboard/dashboard/profile';
import ProfileUpdate from './pages/mainboard/dashboard/profile/profile_update';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: PATH.MAIN,
      element: <Main />,
    },
    {
      path: PATH.MAINBOARD,
      element: <MainBoard />,
      children: [
        { path: PATH.DASHBOARD, element: <Dashboard /> },
        { path: PATH.DEAL, element: <Deal /> },
        { path: PATH.DISCOVER, element: <Discover /> },
        { path: PATH.CONTRIBUTION, element: <Contribution /> },
        { path: PATH.GOVERNANCE, element: <Governance /> },
        { path: PATH.PROFILE, element: <ProfileMyPage /> },
        { path: PATH.PROFILE_UPDATE, element: <ProfileUpdate /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
