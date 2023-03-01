import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './views/About/About';
import Landing from './views/Landing/Landing';
import Menu from '../src/views/Menu/Menu';
import NavbarLayout from './components/NavbarLayout/NavbarLayout';
import Profile from './views/Profile/Profile';
import Status from './views/Status/Status';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavbarLayout />,
      children: [
        {
          path: '/',
          element: <Landing />,
        },
        {
          path: '/menu',
          element: <Menu />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },

        {
          path: '/status',
          element: <Status />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
