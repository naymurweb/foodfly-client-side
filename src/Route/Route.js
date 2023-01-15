import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Items from "../pages/Home/Items/Items";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/items",
        element: <Items></Items>,
        loader: () => fetch("http://localhost:7000/products"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
