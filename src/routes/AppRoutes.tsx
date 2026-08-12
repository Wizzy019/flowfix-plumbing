import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Services from "../pages/Services";
import Reviews from "../pages/Reviews";
import Contact from "../pages/Contact";

export const router = createHashRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
