import React from "react";
import LineChartComponent from "../../components/Chart/LineChartComponent";
import PieChartComponent from "../../components/Chart/PieChartComponent";
import BarChartComponent from "../../components/Chart/BarChartComponent";
import StatCard from "../../components/Statcards/StatCard";
import Linedata from "../../Data/lineData";
import pieData from "./../../Data/pieData";
import barData from "./../../Data/barData";
import Title from "../../components/Title/title";
import { FaBoxOpen, FaUsers, FaDollarSign, FaChartLine } from "react-icons/fa";

export default function Overview() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 sm:p-6">
        <Title title="Overview" />

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-4">
          <StatCard
            title="Total Sales"
            value="$12,345"
            icon={<FaDollarSign className="text-green-500 text-2xl" />}
          />
          <StatCard
            title="New Users"
            value="1,234"
            icon={<FaUsers className="text-purple-500 text-2xl" />}
          />

          <StatCard
            title="Total Products"
            value="567"
            icon={<FaBoxOpen className="text-blue-500 text-2xl" />}
          />

          <StatCard
            title="Growth Rate"
            value="12.5%"
            icon={<FaChartLine className="text-green-500 text-2xl" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <LineChartComponent
            title="Sales Overview"
            data={Linedata}
            dataKey={"sales"}
          />
          <PieChartComponent title="Category Distribution" data={pieData} />
        </div>

        <div className="mt-4 sm:mt-6">
          <BarChartComponent title="Sales by Channel" data={barData} />
        </div>
      </div>
    </>
  );
}
