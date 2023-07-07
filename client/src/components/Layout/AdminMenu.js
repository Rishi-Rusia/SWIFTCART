import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminMenu() {
  return (
    <div>
      <div className="list-group">
        <h2 className="text-center" style={{ "font-family": "sans-serif" }}>
          Admin Panel
        </h2>
        <NavLink
          to="/dashboard/admin/create-category"
          className="list-group-item list-group-item-action pb-3"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="list-group-item list-group-item-action pb-3"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          className="list-group-item list-group-item-action pb-3"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
}
