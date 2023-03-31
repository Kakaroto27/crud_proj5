import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sobre from './routes/sobre';
import Login from './routes/Login.jsx';
import Home from './routes/home';
import Cadastro from './routes/Register';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'; 
import Register from './routes/Register';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
