import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
