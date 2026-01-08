import React, { useEffect, useRef } from "react";

export default function Sidebar({ open, closeSidebar }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        closeSidebar();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [closeSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`sidebar ${open ? "active" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="sidebar-items">
        <div className="col">
          <button className="btn btn-danger login-btn">Login</button>
        </div>

        <div className="col mode">
          <div className="light-mode">Light</div>
          <div className="dark-mode">Dark</div>
        </div>

        <hr className="hr" />

        <div className="col"><a>Store Locator</a></div>
        <div className="col"><a>Track Order</a></div>
        <div className="col"><a>Explore Menu</a></div>

        <hr className="hr" />

        <div className="col"><a>About Us</a></div>
        <div className="col"><a>Feed Back</a></div>
        <div className="col"><a>Term & Conditions</a></div>
        <div className="col"><a>Privacy Policy</a></div>
        <div className="col"><a>Contact Us</a></div>
      </div>
    </div>
  );
}
