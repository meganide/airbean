import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./views/About/About";
import Landing from "./views/Landing/Landing";

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
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
