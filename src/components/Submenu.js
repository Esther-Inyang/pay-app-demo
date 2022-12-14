import React, { useState, useRef, useEffect, useContext } from "react";
import { AppContext } from "./context";

function Submenu() {
  const { isSubmenuOpen } = useContext(AppContext);
  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}>
      Submenu
    </aside>
  );
}

export default Submenu;
