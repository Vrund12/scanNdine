import React from 'react'
import { Outlet } from 'react-router-dom';

function UserLayout() {
  return (
    <div className="user-layout min-h-screen p-4 bg-gray-50">
      <Outlet /> {/* Render only user pages */}
    </div>
  );
}

export default UserLayout