import React from "react";
import logo from "../../../assets/images/logo-white.svg"
import icon1 from "../../../assets/images/dashboard.png";
import icon2 from "../../../assets/images/arrival.png";
import icon3 from "../../../assets/images/departure.png";
import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div class="sidebar_component">
      <img src={logo} alt="" />
      <div class="sidebar_nav">
        <span class="active">
          <img src={icon1} alt="" />
          Dashboard
        </span>
        <span>
          <img src={icon2} alt="" />
          Arrivals
        </span>
        <span>
          <img src={icon3} alt="" />
          Departures
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
