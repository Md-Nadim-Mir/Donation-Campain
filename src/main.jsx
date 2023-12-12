import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Component/Root/Root';

import Error from './assets/Component/ErrorPage/Error';
import Donation from './assets/Component/Donation/Donation';
import Home from './assets/Component/Home/Home';
import Statistics from './assets/Component/Statistics/Statistics';
import Donation_Details from './assets/Component/Donation_Details/Donation_Details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        loader:()=>fetch('/info.json'),
        element:<Home></Home>
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
         path:'/donation_details/:id',
         loader:()=>fetch('/info.json'),
         element:<Donation_Details></Donation_Details>  
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
