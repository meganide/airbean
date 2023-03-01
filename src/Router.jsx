import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Menu from "../src/views/Menu/Menu"
import About from "./views/About/About";
import Landing from "./views/Landing/Landing";
import Status from "./views/Status/Status";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import Profile from "./views/Profile/Profile";


function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: '/menu',
      element: <Menu />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/orderhistory",
      element: <OrderHistory />,
    },
    {
      path: "/status",
      element: <Status />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
