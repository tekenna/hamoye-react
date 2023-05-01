import React from "react";
import { useNavigate } from "react-router-dom";
import "./Topbar.scss"

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div class="topbar">
      <span class="profile_wrap">
        Welcome back {localStorage.username}
        <img src="../../../../../assets/images/chevron.png" alt="" />
        <div class="options">
          <span
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            logout
          </span>
        </div>
      </span>
    </div>
  );
};

export default Topbar;
