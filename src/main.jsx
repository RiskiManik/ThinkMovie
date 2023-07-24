import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage, LoginPage, DetailMoviePage } from "./index";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExploreMovie from "./pages/ExploreMovie";
import People from "./pages/People";
import Account from "./pages/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/detail/:movieId",
    element: <DetailMoviePage />,
  },
  {
    path: "/explore",
    element: <ExploreMovie />,
  },
  {
    path: "/people",
    element: <People />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
