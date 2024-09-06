import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

export default function ConnectedAccounts() {
  const [accounts, setAccounts] = useState({
    google: true,
    facebook: false,
    twitter: true,
  });

  const toggleConnection = (account) => {
    setAccounts((prevState) => ({
      ...prevState,
      [account]: !prevState[account],
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-md mt-6">
      <div className="flex items-center">
        <FaQuestionCircle className="text-2xl mr-4 text-blue-500 dark:text-purple-500" />
        <h2 className="text-lg font-medium">Connected Accounts</h2>
      </div>
      <div className="mt-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="google.jpg"
              alt="Google"
              className="w-6 h-6 rounded-full mr-2"
            />
            <p>Google</p>
          </div>
          <button
            onClick={() => toggleConnection("google")}
            className={`py-1 px-4 rounded-md ${
              accounts.google
                ? "bg-green-500 text-white"
                : "bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white"
            }`}
          >
            {accounts.google ? "Connected" : "Connect"}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="face.jpg"
              alt="Facebook"
              className="w-6 h-6 rounded-full mr-2"
            />
            <p>Facebook</p>
          </div>
          <button
            onClick={() => toggleConnection("facebook")}
            className={`py-1 px-4 rounded-md ${
              accounts.facebook
                ? "bg-green-500 text-white"
                : "bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white"
            }`}
          >
            {accounts.facebook ? "Connected" : "Connect"}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="x.jpg"
              alt="Twitter"
              className="w-6 h-6 rounded-full mr-2"
            />
            <p>Twitter</p>
          </div>
          <button
            onClick={() => toggleConnection("twitter")}
            className={`py-1 px-4 rounded-md ${
              accounts.twitter
                ? "bg-green-500 text-white"
                : "bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white"
            }`}
          >
            {accounts.twitter ? "Connected" : "Connect"}
          </button>
        </div>
      </div>
      <button className="mt-4 text-blue-500 dark:text-purple-500">
        + Add Account
      </button>
    </div>
  );
}
