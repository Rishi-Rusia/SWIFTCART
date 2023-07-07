import React from "react";
import { NavLink } from "react-router-dom";

export default function UserMenu() {
  return (
    <div>
      <div className="list-group">
        <h2 className="text-center" style={{ "font-family": "sans-serif" }}>
          Dashboard
        </h2>
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action pb-3"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="list-group-item list-group-item-action pb-3"
        >
          Orders
        </NavLink>
      </div>
    </div>
  );
}
