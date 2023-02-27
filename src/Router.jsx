import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './components/Cart/Cart.jsx';

import Landing from "./views/Landing/Landing";

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/cart', 
      element: <Cart />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
