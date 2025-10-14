import { Outlet } from "react-router-dom";
import { SideBar, Footer } from "./Components";

export default function AdminLayout() {
  return (
    <div className="flex bg-gray-200 min-h-screen">
      {/* Sidebar fixed on the left */}
      <div className="fixed top-0 left-0 h-screen w-64">
        <SideBar />
      </div>

      {/* Main Content (shifted to the right of sidebar) */}
      <div className="flex flex-col flex-1 ml-64 min-h-screen">
        <main className="flex-1 p-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
