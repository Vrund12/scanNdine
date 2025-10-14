import { Home, User, Settings, HandPlatterIcon, Warehouse, Menu, MenuIcon, LucideMenu, MenuSquareIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white flex flex-col">
      {/* Logo / Header */}
      <div className=" border-b border-gray-700">
        <h1 className="text-xl font-bold py-2">Dashboard</h1>
    </div>

      {/* Menu Items */}
      <nav className="mt-4 flex-1 flex flex-col gap-2">
        <Link to="/">
          <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">
            <Home size={20} />
            <span>Home</span>
          </button>
        </Link>

        <Link to="/employee-details">
          <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">
            <User size={20} />
            <span>Employee Details</span>
          </button>
        </Link>

        {/* <Link to="/order-details">
          <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">
            <HandPlatterIcon size={20} />
            <span>Order Details</span>
          </button>
        </Link> */}
        <Link to="/inventory">
          <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">
            <Warehouse size={20} />
            <span>Inventory</span>
          </button>
        </Link>
         <Link to="/menu">
          <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">
            <MenuSquareIcon size={20} />
            <span>Menu</span>
          </button>
        </Link>
       
          <Link to="/QR">
          <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">
            <MenuSquareIcon size={20} />
            <span>QR</span>
          </button>
        </Link>

        <Link to="/settings">
          <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </Link>
      </nav>
    </div>
  );
}
