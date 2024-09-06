import React from "react";
import Title from "../../components/Title/title";
import List from "../../components/Lists/List";
import {
  FaUserCheck,
  FaUser,
  FaUserPlus,
  FaUserAltSlash,
} from "react-icons/fa";
import StatCard from "../../components/Statcards/StatCard";
import UserListData from "../../Data/Userlist";
import StackedBarChart from "../../components/Chart/StackedBarChart";
import { userActivityData, days, hours } from "./../../Data/userActivityData ";
import PieChartComponent from "../../components/Chart/PieChartComponent";
import demographicsData from "../../Data/Demographics";
import LineChartComponent from "../../components/Chart/LineChartComponent";
import userGrowthData from "../../Data/Usergrowth";

export default function Users() {
  const userColumns = [
    {
      key: "name",
      label: "Name",
      render: (item) => {
        return (
          <div className="flex items-center space-x-2">
            <div
              className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold"
              style={{ minWidth: "2rem", minHeight: "2rem" }}
            >
              {item.name.charAt(0).toUpperCase()}
            </div>
            <span>{item.name}</span>
          </div>
        );
      },
    },
    { key: "email", label: "Email" },
    {
      key: "role",
      label: "Role",
      render: (item) => {
        const roleStyles = {
          Admin: "bg-blue-600 text-white",
          Editor: "bg-purple-600 text-white",
          Viewer: "bg-yellow-500 text-white",
          Customer: "bg-blue-500 text-white",
          Moderator: "bg-indigo-600 text-white",
          Manager: "bg-orange-600 text-white",
        };

        return (
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              roleStyles[item.role]
            }`}
          >
            {item.role}
          </span>
        );
      },
    },
    {
      key: "status",
      label: "Status",
      render: (item) => {
        const statusStyles = {
          Active: "bg-green-600 text-white",
          Inactive: "bg-red-600 text-white",
        };

        return (
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              statusStyles[item.status]
            }`}
          >
            {item.status}
          </span>
        );
      },
    },
  ];

  return (
    <div className="side-layout min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 sm:p-6">
      <Title title="Users" />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <StatCard
          title="Total Users"
          value="1,2334"
          icon={<FaUser className="text-yellow-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />

        <StatCard
          title="New Users"
          value="232"
          icon={<FaUserPlus className="text-red-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
        <StatCard
          title="Active Users"
          value="506"
          icon={<FaUserCheck className="text-green-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
        <StatCard
          title="Blocked Users"
          value="13"
          icon={<FaUserAltSlash className="text-blue-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
      </div>
      <List data={UserListData} columns={userColumns} title="Users" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <PieChartComponent
          data={demographicsData}
          title="User Demographics by Age Group"
        />
        <LineChartComponent
          data={userGrowthData}
          dataKey={"Users"}
          title="User Growth Over 2024"
        />
      </div>
      <div className="mb-6 mt-3 mb-2">
        <StackedBarChart
          data={userActivityData}
          xKey="day"
          yKey="hour"
          valueKey="activity"
          xLabels={days}
          yLabels={hours}
        />
      </div>
    </div>
  );
}
