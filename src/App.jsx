import React, { useState } from "react";
import Navbar from "./Web-Page/navbar";
import Sidebar from "./Web-Page/sidebar";
import Loginpage from "./Web-Page/loginpage";
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar openSidebar={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
      <Loginpage />
    </>
  );
}
