import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./views/About/About";
import Landing from "./views/Landing/Landing";
import Status from "./views/Status/Status";

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
      path: "/status",
      element: <Status />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
