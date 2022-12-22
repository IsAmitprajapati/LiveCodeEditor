import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import SpinnerLoader from './component/SpinnerLoader';

const router = createBrowserRouter([
    {
      path:"/",
      element : <App/>,
      children : [
        {
          path : "/",
          element: <Home/>,
        },
        {
          path : "/Editor/:roomId",
          element : <EditorPage/>,
        }
      ]
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} fallbackElement={<SpinnerLoader/>}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
