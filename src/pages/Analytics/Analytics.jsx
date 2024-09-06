import React from "react";
import {
  FaDollarSign,
  FaBoxOpen,
  FaUser,
  FaEye,
  FaChartLine,
  FaCogs,
  FaThumbsUp,
} from "react-icons/fa";
import Title from "../../components/Title/title";
import StatCard from "../../components/Statcards/StatCard";
import RevenueVsTargetChart from "./../../components/Chart/Areachart";
import Rev_T_data from "../../Data/Rev_T_data";
import ProductPerformanceChart from "../../components/Chart/ProductPerformanceChart";
import data from "../../Data/productperformace";
import CustomRadarChart from "../../components/Chart/RadarChart";
import retentionData from "./../../Data/UserRetention";
import LineChartComponent from "../../components/Chart/LineChartComponent";

export default function Analytics() {
  return (
    <div className="side-layout min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 sm:p-6">
      <Title title="Analytics" />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <StatCard
          title="Users "
          value="1,2334"
          icon={<FaUser className="text-yellow-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
        <StatCard
          title="Revenue"
          value="$ 12000"
          icon={<FaDollarSign className="text-green-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
        <StatCard
          title="Orders"
          value="221"
          icon={<FaBoxOpen className="text-blue-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
        <StatCard
          title="Page Views"
          value="123343399"
          icon={<FaEye className="text-green-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <RevenueVsTargetChart data={Rev_T_data} title={"Revenue Vs Target"} />
        <ProductPerformanceChart data={data} title={"Product Performance"} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <CustomRadarChart title={"Customer Segmentation"} />
        <LineChartComponent
          data={retentionData}
          title={"User Retention"}
          dataKey={"retention"}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-6">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <FaChartLine className="text-blue-500 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-medium">Sales Growth:</h3>
                <p className="text-sm text-gray-900 dark:text-white">
                  Sales have increased by 20% in the last quarter, showing
                  positive growth trends.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaCogs className="text-purple-500 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-medium">Operational Efficiency:</h3>
                <p className="text-sm text-gray-900 dark:text-white">
                  Operational efficiency improved by reducing process time by
                  15%.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaThumbsUp className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-medium">Customer Satisfaction:</h3>
                <p className="text-sm text-gray-900 dark:text-white">
                  Customer satisfaction ratings have increased to 90% this
                  month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
