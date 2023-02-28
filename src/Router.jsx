import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OrderHistory from "./components/OrderHistory/OrderHistory";

import About from "./views/About/About";
import Landing from "./views/Landing/Landing";
import Profile from "./views/Profile/Profile";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
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
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
