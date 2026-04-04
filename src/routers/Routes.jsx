import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../components/Home";
import Courts from "../pages/Court/Courts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/courts",
        element:<Courts></Courts>
      }
    ]
  },
]);