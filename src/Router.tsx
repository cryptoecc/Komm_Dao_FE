// src/Router.tsx
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PATH } from './constants/path';
import Main from './pages/main/main';
import Dashboard from './pages/dashboard/';
import Contribution from './pages/dashboard/contribution';
import Deal from './pages/dashboard/deal';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: `${PATH.MAIN}`,
      children: [
        { index: true, element: <Main /> },
        { path: `${PATH.MAIN}`, element: <Main /> },
        {
          path: `${PATH.DASHBOARD}`,
          element: <Dashboard />,
          children: [
            { path: 'Deal', element: <Deal /> },
            { path: 'Contribution', element: <Contribution /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
