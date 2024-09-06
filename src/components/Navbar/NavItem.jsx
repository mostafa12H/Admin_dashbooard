// NavItem.js
import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon, label, isCollapsed }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors ${
            isActive ? "bg-gray-200 dark:bg-gray-800" : ""
          }`
        }
      >
        {icon}
        {!isCollapsed && <span>{label}</span>}
      </NavLink>
    </li>
  );
};

export default NavItem;
