import React from "react";
import { FaDollarSign, FaBoxOpen, FaClock } from "react-icons/fa";
import Title from "../../components/Title/title";
import StatCard from "../../components/Statcards/StatCard";
import LineChartComponent from "../../components/Chart/LineChartComponent";
import PieChartComponent from "../../components/Chart/PieChartComponent";
import dailyOrdersData from "./../../Data/Dailyorders";
import orderStatusData from "./../../Data/orderDist";
import List from "../../components/Lists/List";
import dummyOrderData from "./../../Data/OrderData";

export default function Orders() {
  const columns = [
    { key: "orderNumber", label: "Order Number" },
    { key: "customerName", label: "Customer Name" },
    { key: "date", label: "Date" },
    { key: "total", label: "Total" },
    { key: "status", label: "Status" },
  ];

  return (
    <div className="side-layout min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 sm:p-6">
      <Title title="Orders" />

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <StatCard
          title="Avg. Orders/Month "
          value="3929"
          icon={<FaBoxOpen className="text-yellow-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
        <StatCard
          title="Total Orders Value"
          value="$ 123,37745"
          icon={<FaDollarSign className="text-green-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />

        <StatCard
          title="Avg. Order Value"
          value="221"
          icon={<FaDollarSign className="text-blue-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
        <StatCard
          title="Pending Orders"
          value="12"
          icon={<FaClock className="text-red-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <LineChartComponent
          data={dailyOrdersData}
          dataKey={"orders"}
          title="Daily Orders"
        />

        <PieChartComponent
          title="Order Status Distributio"
          data={orderStatusData}
        />
      </div>
      <List
        data={dummyOrderData}
        columns={columns}
        itemsPerPage={5}
        title="Orders"
      />
    </div>
  );
}
