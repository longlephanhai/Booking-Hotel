import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import HomePage3 from "./pages/home/index3";
import HomePage2 from "./pages/home/index2";
import SideMenu from "./pages/home/index4";
import HomePageFullMenu from "./pages/home/index5";
import AboutPage from "./pages/about";
import RoomPage from "./pages/room";
import RoomDetail from "./pages/room/room.detail";
import ServicePage from "./pages/service";
import ServiceDetail from "./pages/service/service.detail";


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
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/room",
          element: <RoomPage />,
        },
        {
          path: "/room-detail",
          element: <RoomDetail />,
        },
        {
          path: "/services",
          element: <ServicePage />,
        },
        {
          path: "/service-detail",
          element: <ServiceDetail />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ]
    },
    {
      path: "/side-menu",
      element: <SideMenu />,
    },
    {
      path: "/full-menu",
      element: <HomePageFullMenu />,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
