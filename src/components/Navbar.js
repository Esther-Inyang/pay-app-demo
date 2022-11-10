import React, { useContext } from "react";
import "../index.css";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { openSidebar, isSidebarOpen, openSubmenu, closeSubmenu } =
    useContext(AppContext);
  console.log(openSidebar);

  return (
    <nav className="nav">
      <div className="nav-icons">
        <button className="open-nav-icon" onClick={openSidebar}>
          <FaBars />
        </button>

        <ul className={`${isSidebarOpen ? "menu show-menu" : "menu"}`}>
          <li>About</li>
          <li>Contact</li>
          <li>News</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
