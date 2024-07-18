import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PATH } from './constants/path';
import Main from './pages/main/main';
import Dashboard from './pages/dashboard/dashboard';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: `${PATH.MAIN}`,
      children: [
        { index: true, element: <Main /> },
        { path: `${PATH.MAIN}`, element: <Main /> },
        { path: `${PATH.DASHBOARD}`, element: <Dashboard /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
