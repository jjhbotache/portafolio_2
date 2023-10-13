import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Link, Outlet} from "react-router-dom";
import NavTabs from './components/NavTabs/NavTabs.jsx';
import { navLinks } from './consts/consts.jsx';
import Contacto from './pages/Contacto/Contacto.jsx';
import Habilidades from './pages/Habilidades/Habilidades.jsx';
import logo from "./static/media/logo.png"

const router = createBrowserRouter(
  [
    {
      path: "/:section?",
      element: <App/>,    
    },
    {
      path: "/habilidades",
      element: <Habilidades/>,    
    },
    {
      path: "/contacto",
      element: <Contacto/>,    
    },
    {
      path: "*",
      element: <App/>,    
    },
]);

// set the page icon to logo

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </React.StrictMode>
)

const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'icon';
link.href = logo;
document.head.appendChild(link);
