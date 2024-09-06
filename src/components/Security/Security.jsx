import React from "react";
import { FaLock } from "react-icons/fa";

export default function Security() {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-md mt-6">
      <div className="flex items-center">
        <FaLock className="text-2xl mr-4 text-blue-500 dark:text-purple-500" />
        <h2 className="text-lg font-medium">Security</h2>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p>Two-Factor Authentication</p>
          <input type="checkbox" className="form-toggle" />
        </div>
        <button className="mt-4 bg-blue-500 dark:bg-purple-600 text-white py-2 px-4 rounded-md">
          Change Password
        </button>
      </div>
    </div>
  );
}
