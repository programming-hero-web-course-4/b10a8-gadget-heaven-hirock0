import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home/Home"
import Dashboard from "../pages/Dashboard/Dashboard"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

export const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/dashboard",
          element:<Dashboard></Dashboard>
        }
      ]
    }
  ])
  