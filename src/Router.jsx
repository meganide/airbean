import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
