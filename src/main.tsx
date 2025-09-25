import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CalenderCom from './mycomponents/CalenderCom.tsx';
import GraphChart from './mycomponents/GraphChart.tsx';
import LoginPage from './mycomponents/LoginPage.tsx';
import UserCart from './mycomponents/UserCart.tsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <LoginPage/>
  }
  ,
  {
    path : '/home',
    element : <App/>,
    children : [
      {
        path : 'calender',
        element : <CalenderCom/>
      },
      {
        path : 'chart',
        element : <GraphChart/>
      },
      {
        path : 'cart',
        element : <UserCart/>
      }
    ]
  },
  
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
