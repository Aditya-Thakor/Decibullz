import Nav3 from "../components/Navbar/Nav3";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Nav3 />
      <Outlet />
    </>
  );
}

export default Layout;