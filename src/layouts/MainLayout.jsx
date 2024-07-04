import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ChatSidebar from "../components/ChatSidebar";
import SearchUserModal from "../components/SearchUserModal";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className=" container max-w-5xl mx-auto">
        <div className="grid grid-cols-12">
          <div
            className="col-span-12 md:col-span-4 overflow-auto"
            style={{ height: `calc(100vh - 64px)` }}
          >
            <ChatSidebar />
          </div>
          <div
            className="md:col-span-8 hidden md:block"
            style={{ height: `calc(100vh - 64px)` }}
          >
            <Outlet />
          </div>
        </div>
      </div>
      <SearchUserModal />
    </div>
  );
};

export default MainLayout;
