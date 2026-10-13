import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./LayoutComponent/HomeLayout";
import { AboutPage, aboutLoader } from "./pageComponent/AboutPage";
import { HomePage } from "./pageComponent/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
        loader: aboutLoader,
      },
    ],
  },
]);
