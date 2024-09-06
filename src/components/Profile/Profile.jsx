import React from "react";
import { FaUser } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <FaUser className="text-2xl mr-4 text-blue-500 dark:text-purple-500" />
        <div>
          <h2 className="text-lg font-medium">Profile</h2>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <img
          src="favicon.ico"
          alt="User Avatar"
          className="rounded-full h-16 w-16 mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">John Doe</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            john.doe@example.com
          </p>
        </div>
      </div>
      <button className="mt-4 bg-blue-500 dark:bg-purple-600 text-white py-2 px-4 rounded-md">
        Edit Profile
      </button>
    </div>
  );
}
