import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="sidebar">
    <div className="logo">
      <Link to="/register">BETA</Link>
    </div>
    <Menu
      className="sideMenu"
      theme="light"
      items={[
        {
          key: "workspace",
          label: "Workspaces",
        },
        {
          key: "profile",
          label: "My Profile",
        },
      ]}
    />
  </div>
  );
}

export default Sidebar();
