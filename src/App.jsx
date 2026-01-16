import React, { useState } from "react";
import Navbar from "./Web-Page/navbar";
import Sidebar from "./Web-Page/sidebar";
import Loginpage from "./Web-Page/loginpage";
import Footer from "./Web-Page/footer";
import Termandcondition from "./Web-Page/Terns/termandcondition";
import Contact from "./Web-Page/contact";
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar openSidebar={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
       <Termandcondition />
      <Footer />
     
    </>
  );
}
