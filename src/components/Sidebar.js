import React, { useContext } from "react";
import { AppContext } from "./context";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import "../index.css";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);
  console.log(isSidebarOpen);

  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-container show-overlay" : "sidebar-container"
      }`}
    >
      <div className="sidebar">
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className="sidebar-pages-section">
          {sublinks.map((item, index) => {
            const { links, page } = item;

            return (
              <article key={index} className="sidebar-pages-container">
                <h4 className="sidebar-page-label">{page}</h4>
                <div className="sidebar-links-container">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url} className="sidebar-link">
                        <span className="link-icon">{icon}</span>
                        <span className="link-label">{label}</span>
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
