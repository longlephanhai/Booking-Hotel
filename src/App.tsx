import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";


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
