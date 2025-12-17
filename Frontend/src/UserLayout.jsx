import React from 'react'
import { Outlet } from 'react-router-dom';
//import {OrderIdContextProvider} from './Context/OrderIdContextProvider'

function UserLayout() {
  return (
   // <OrderIdContextProvider>
    <div className="user-layout min-h-screen p-4 bg-gray-50">
      <Outlet /> {/* Render only user pages */}
    </div>
    //</OrderIdContextProvider>
  );
}

export default UserLayout