import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import DarkModeToggle from "./DarkModeToggle";
import CollapseButton from "./CollapseButton";
import {
  FaChartBar,
  FaBoxOpen,
  FaUsers,
  FaDollarSign,
  FaShoppingCart,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

const Navbar = ({ onToggleCollapse }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || false;
  });
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);
  const [isManuallyCollapsed, setIsManuallyCollapsed] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => {
      const newState = !prevState;
      setIsManuallyCollapsed(newState);
      onToggleCollapse(newState);
      return newState;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isManuallyCollapsed) {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isManuallyCollapsed]);

  return (
    <div
      className={`fixed top-0 left-0 h-full ${
        isCollapsed ? "w-20" : "w-64"
      } p-4 transition-all duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } border-r border-gray-200 dark:border-gray-700`}
    >
      <div className="flex justify-between items-center mb-6">
        <CollapseButton
          toggleCollapse={toggleCollapse}
          isDarkMode={isDarkMode}
        />
        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isCollapsed={isCollapsed}
        />
      </div>
      <nav>
        <ul className="space-y-4">
          <NavItem
            to="/"
            icon={<FaChartBar className="text-blue-500" />}
            label="Overview"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/products"
            icon={<FaBoxOpen className="text-purple-500" />}
            label="Products"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/users"
            icon={<FaUsers className="text-pink-500" />}
            label="Users"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/sales"
            icon={<FaDollarSign className="text-green-500" />}
            label="Sales"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/orders"
            icon={<FaShoppingCart className="text-orange-500" />}
            label="Orders"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/analytics"
            icon={<FaChartLine className="text-blue-500" />}
            label="Analytics"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/settings"
            icon={<FaCog className="text-green-500" />}
            label="Settings"
            isCollapsed={isCollapsed}
          />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
