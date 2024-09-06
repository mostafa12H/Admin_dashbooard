import React from "react";
import { FaBell } from "react-icons/fa";

export default function Notifications() {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-md mt-6">
      <div className="flex items-center">
        <FaBell className="text-2xl mr-4 text-blue-500 dark:text-purple-500" />
        <h2 className="text-lg font-medium">Notifications</h2>
      </div>
      <div className="mt-4 space-y-4">
        <div className="flex justify-between items-center">
          <p>Push Notifications</p>
          <input type="checkbox" className="form-toggle" />
        </div>
        <div className="flex justify-between items-center">
          <p>Email Notifications</p>
          <input type="checkbox" className="form-toggle" />
        </div>
        <div className="flex justify-between items-center">
          <p>SMS Notifications</p>
          <input type="checkbox" className="form-toggle" />
        </div>
      </div>
    </div>
  );
}
