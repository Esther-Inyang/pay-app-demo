import React, { useContext } from "react";
import "../index.css";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";
import Sidebar from "./Sidebar";
import logo from "../images/logo.svg";

const Navbar = () => {
  const { openSidebar, isSidebarOpen, openSubmenu, closeSubmenu } =
    useContext(AppContext);

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  return (
    <section className="nav-section">
      <nav className="nav">
        <div className="logo-and-bars">
          <header className="nav-header">
            <img src={logo} alt="logo" />
          </header>
          <button className="show-nav-icon" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-ul">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </nav>
    </section>
  );
};

export default Navbar;
