import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AdminLayout from './AdminLayout.jsx'
import UserLayout from './UserLayout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Router } from 'lucide-react'
import {EmpDetails, Home, Inventory, Settings, Menu, UserMenu} from './Components/index'
import QR from './Components/QR.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element:<AdminLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/employee-details',
        element: <EmpDetails/>
      },
      {
        path: '/inventory',
        element: <Inventory/>
      },
      // {
      //   path: '/order-details',
      //   element: <OrderDetails/>
      // },
      {
        path: '/settings',
        element: <Settings/>
      },
      {
        path: '/menu' ,
        element: <Menu/>
      },
      
      {
        path:'/qr',
        element: <QR/>
      }
    ]
  },
  {
      path: '/user', // separate route for users
    element: <UserLayout />,
    children: [
      {
        path: '', // this means /user
        element: <UserMenu />,
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  
)
