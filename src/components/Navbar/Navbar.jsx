import { NavLink } from "react-router-dom";
import logo from "/src/assets/images/index.js";

export default function Navbar() {
  return (
    <div className="h-28 z-50 bg-[#ffffffd1] position-fixed top-0 w-full flex justify-between items-center">
      {/* logo */}
      <div className="h-20 w-60">
        <img className="h-full w-full invert" src={logo.logo} alt="logo" />
      </div>
      {/* Navlinks */}
      <div className="flex gap-4">
        <span
          to="/"
          className="font-bold text-slate-950 text-md hover:text-orange-500"
        >
          SHOP
        </span>
        <span
          to="/"
          className="font-bold text-slate-950 text-md hover:text-orange-500"
        >
          PRODUCT FINDER
        </span>
        <span
          to="/"
          className="font-bold text-slate-950 text-md hover:text-orange-500"
        >
          BEST SELLERS
        </span>
        <span
          to="/"
          className="font-bold text-slate-950 text-md hover:text-orange-500"
        >
          SUPPORT
        </span>
        <span to="/" className="font-semibold text-slate-700 text-md">
          UploadItem
        </span>
      </div>
      {/* profile, cart */}
      <div className="flex gap-4 text-slate-950 text-xl">
        {/* search */}
        <i class="ri-search-2-line hover:text-orange-500"></i>
        {/* user */}
        <i className="ri-user-line hover:text-orange-500"></i>
        {/* Cart */}
        <i className="ri-shopping-cart-line hover:text-orange-500"></i>
      </div>
    </div>
  );
}
