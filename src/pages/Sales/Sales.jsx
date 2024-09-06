import React from "react";
import {
  FaDollarSign,
  FaTrophy,
  FaBoxOpen,
  FaExclamationTriangle,
} from "react-icons/fa";
import Title from "../../components/Title/title";
import StatCard from "../../components/Statcards/StatCard";
import sales from "../../Data/Sales";
import LineChartvertical from "../../components/Chart/lineChatvertical";
import PieChartComponent from "../../components/Chart/PieChartComponent";
import pieData from "../../Data/pieData";
import BarChartComponent from "../../components/Chart/BarChartComponent";
import barData from "../../Data/barData";
import salesData from "./../../Data/SalesData";
import DynamicTreemap from "../../components/Chart/Treemap";

export default function Sales() {
  return (
    <div className="side-layout min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 sm:p-6">
      <Title title="Sales" />

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <StatCard
          title="Total Revenue"
          value="$ 123,37745"
          icon={<FaDollarSign className="text-green-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
        <StatCard
          title="Top Selling"
          value="Mens Clothings"
          icon={<FaTrophy className="text-yellow-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
        <StatCard
          title="Avg. Order Value"
          value="221"
          icon={<FaBoxOpen className="text-blue-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
        <StatCard
          title="Low Stock"
          value="100"
          icon={<FaExclamationTriangle className="text-red-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <LineChartvertical data={sales} title="Sales Trend" />

        <PieChartComponent title="Category Distribution" data={pieData} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <BarChartComponent title="Sales by Channel" data={barData} />
        <DynamicTreemap
          data={salesData}
          title="Sales by Product Category"
          width="100%"
          height={400}
          aspectRatio={3 / 2}
          stroke="#333"
          fill="#82ca9d"
        />
      </div>
    </div>
  );
}
