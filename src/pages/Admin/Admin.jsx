import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import bg from '/src/assets/images/index.js';

export default function Admin() {
  return (
    <div 
      className="flex h-screen overflow-hidden font-sans bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.IUbg})` }}
    >
      {/* Sidebar Section */}
      <AdminSidebar />

      {/* Main Content Section */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}