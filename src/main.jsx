import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoute from './layout/MainRoute';
import Donation from './components/Donation/Donation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    children: [
      {
        path: "/donation",
        element: <Donation></Donation>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
