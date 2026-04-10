import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../components/Home";
import Courts from "../pages/Court/Courts";
import DashboardLayout from "../layouts/DashboardLayout";
import Bookings from "../pages/Booking/Bookings";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import ErrorPage from "../pages/ErrorPage";
import PrivetRoute from "./PrivetRoute";
import Profile from "../pages/Dashboard/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/courts",
        element: <Courts></Courts>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUP",
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
    children: [
      { index: true, Component: DashboardHome },
      {
        path:"profile",
        element:<Profile></Profile>
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>
      }
    ]
  }
]);