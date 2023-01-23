import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddItems from "../pages/AddItems/AddItems";
import Blog from "../pages/Blog/Blog";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home/Home";
import Items from "../pages/Items/Items";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
        path: "/items/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:7000/products/${params.id}`),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews",
        element: (
          
            <MyReviews></MyReviews>
 
        ),
        loader: () => fetch("http://localhost:7000/reviews"),
      },
      {
        path: "/additems",
        element: (
          <PrivateRoute>
            <AddItems></AddItems>
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
