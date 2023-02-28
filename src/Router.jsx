import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Menu from "../src/views/Menu/Menu"
import Landing from "./views/Landing/Landing";

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/menu',
      element: <Menu />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
