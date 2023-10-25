import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Home/Home';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "navbar",
        element:<Navbar></Navbar>
    },
    {
        path: "footer",
        element:<Footer></Footer>
    },
    ]
  },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
        <RouterProvider router={router} />
  </React.StrictMode>,
)
