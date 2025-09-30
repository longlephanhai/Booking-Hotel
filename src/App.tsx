import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import HomePage3 from "./pages/home/index3";
import HomePage2 from "./pages/home/index2";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/home-2",
          element: <HomePage2 />,
        },
        {
          path: "/home-3",
          element: <HomePage3 />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
