import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";

function MainLayout() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <div className="flex-1 p-6">

        <Navbar />

        {/* PAGE CONTENT */}

        <div className="mt-6">

          <Outlet />

        </div>

      </div>

    </div>

  );
}

export default MainLayout;