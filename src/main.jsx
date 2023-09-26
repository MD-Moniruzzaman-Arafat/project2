import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoute from './layout/MainRoute';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import Home from './components/Home/Home';
import Detials from './components/Details/Detials';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch('../public/data.json'),
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "donations/:id",
        loader: () => fetch('../public/data.json'),
        element: <Detials></Detials>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
