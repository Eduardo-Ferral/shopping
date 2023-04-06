import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { ErrorPages } from './rutes/errorPages';
import { Historial } from './rutes/historial';
import { Nosotros } from './rutes/nosotros';
import { Home } from './components/home';
import { Sesion } from './rutes/sesion';
import Main from './rutes/main';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPages/>,
    children:[
      {
        path:"",
        element:<Main/>,
      },
      {
        path:"historial",
        element:<Historial/>,
      },
      {
        path:"nosotros",
        element:<Nosotros/>,
      },
      {
        path:"sesion",
        element:<Sesion/>,
      }
    ]
  },
 
  

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
