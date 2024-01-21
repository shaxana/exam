import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserRoot from "../pages/UserRoot";
import Home from "../pages/Home";
import AddPage from "../pages/AddPage";


export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddPage />,
      },
    
    ],
  },
];