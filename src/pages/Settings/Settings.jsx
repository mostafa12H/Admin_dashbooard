import React from "react";
import Title from "../../components/Title/title";
import Profile from "../../components/Profile/Profile";
import Notifications from "../../components/Notfication/Notification";
import Security from "../../components/Security/Security";
import ConnectedAccounts from "../../components/ConnectedAccounts/ConnectedAccounts";
import DangerZone from "../../components/DangerZone/DangerZone";

export default function Settings() {
  return (
    <div className="side-layout min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 sm:p-6">
      <Title title="Settings" />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </div>
    </div>
  );
}
