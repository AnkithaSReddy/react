import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lay from "./Lay";
import Create from "./Create";
import Data from "./Data";
import Update from "./Update";
import View from "./View";

let route = createBrowserRouter([
  {
    path: "/",
    element: <Lay />,
    children: [
      {
        index: true,
        element:<Create/>
      },
      {
        path: "/view/:id",
        element:<View/>
      },
      {
        path: "/view",
        element:<View/>
      },
      {
        path: "/data",
        element:<Data/>
      },
      {
        path: "/update",
        element:<Update/>
      },
      {
        path: "/update/:id",
        element:<Update/>
      }
    ]
  }
])
const CrudRoute = () => {
  return (
    <RouterProvider router={route}/>
  )
}

export default CrudRoute