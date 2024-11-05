import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Statistics from "../pages/Statistics/Statistics";
import Details from "../pages/Details/Details";
import LatestUpdate from "../pages/LatestUpdate/LatestUpdate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/details/:productId",
        element: <Details></Details>,
      },
      {
        path: "/latest_update",
        element: <LatestUpdate></LatestUpdate>,
      },
    ],
  },
]);
