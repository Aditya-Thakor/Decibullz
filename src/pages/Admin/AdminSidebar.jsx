import { NavLink } from "react-router-dom";
import logo from '../../../public/dzFavicon.png'

export default function AdminSidebar() {
  const activeLinkClass = "flex items-center gap-3 p-3 rounded-lg bg-white/60 text-orange-600 font-bold shadow-sm backdrop-blur-sm border border-white/50 transition-all";
  const inactiveLinkClass = "flex items-center gap-3 p-3 rounded-lg text-gray-800 hover:bg-white/40 hover:text-gray-900 transition-all";

  return (
    <div className="h-full w-64 bg-white/30 backdrop-blur-md border-r border-white/30 shadow-[4px_0_24px_rgba(0,0,0,0.05)] flex flex-col pt-6 px-4">
      {/* Brand Header */}
      <NavLink
        to="/admin/admindashboard"
        className="flex items-center gap-3 mb-8 px-2"
      >
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
        </div>
        <span className="text-2xl font-bold text-gray-900 drop-shadow-sm">Admin</span>
      </NavLink>

      {/* Navigation Links */}
      <div className="flex flex-col gap-2">
        <NavLink
          to="/admin/admindashboard"
          className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
        >
          <i className="ri-home-4-line text-xl"></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/"
          className={inactiveLinkClass}
        >
          <i className="ri-store-2-line text-xl"></i>
          <span>Go to Store</span>
        </NavLink>

        <div className="pt-4 pb-2">
          <p className="text-xs font-bold text-gray-600 uppercase tracking-wider px-3">Management</p>
        </div>

        <NavLink
          to="/admin/uploadproduct"
          className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
        >
          <i className="ri-upload-cloud-2-line text-xl"></i>
          <span>Upload Product</span>
        </NavLink>

        <NavLink
          to="/admin/uploadreview"
          className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
        >
          <i className="ri-star-smile-line text-xl"></i>
          <span>Upload Review</span>
        </NavLink>
      </div>

      {/* Bottom Section (e.g., Profile or Settings) can go here in the future */}
      <div className="mt-auto pb-6">
        <div className="flex items-center gap-3 p-3 rounded-lg text-gray-800 hover:bg-white/40 cursor-pointer transition-all">
          <i className="ri-settings-4-line text-xl"></i>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}
