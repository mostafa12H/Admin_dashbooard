import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import Products from "./pages/products/Products";
import Users from "./pages/Users/Users";
import Sales from "./pages/Sales/Sales";
import Orders from "./pages/Orders/Orders";
import Analytics from "./pages/Analytics/Analytics";
import Settings from "./pages/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = (collapsed) => {
    setIsCollapsed(collapsed);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen ">
        <div className="flex flex-grow">
          <Navbar onToggleCollapse={handleToggleCollapse} />
          <div
            className={`${
              isCollapsed ? "ml-20" : "ml-64"
            } flex-grow transition-margin ease-in-out`}
          >
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
        <Footer isCollapsed={isCollapsed} />
      </div>
    </Router>
  );
}

export default App;
