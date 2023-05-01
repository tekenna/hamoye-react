import React from "react";
import Sidebar from "../navbar/sidebar/Sidebar";
import Topbar from "../navbar/topbar/Topbar";
import "./DashboardLayout.scss"

const DashboardLayout = ({ children }) => {
  return (
    <div class="dashboard_layout">
      <div class="sidebar_container">
        <Sidebar />
      </div>
      <div class="dashboard_container">
        <div class="topbar_container">
          <Topbar />
        </div>
        <div class="body">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
