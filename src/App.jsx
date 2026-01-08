import React, { useState } from "react";
import Sidebar from "./Web-Page/Sidebar";
import Navbar from "./Web-Page/navbar";
import TopDeal from "./Web-Page/TopDeal";
import Dealsection from "./Web-Page/dealsection";
import Header from "./Web-Page/header";
import Footer from "./Web-Page/footer";
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar openSidebar={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        <Header />
        <TopDeal />
        <Dealsection />
        <Footer />
    </>
  );
}
