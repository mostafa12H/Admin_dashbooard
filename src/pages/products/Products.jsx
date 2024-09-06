import React from "react";
import Title from "../../components/Title/title";
import List from "../../components/Lists/List";
import {
  FaDollarSign,
  FaTrophy,
  FaBoxOpen,
  FaExclamationTriangle,
} from "react-icons/fa";
import StatCard from "../../components/Statcards/StatCard";
import PieChartComponent from "../../components/Chart/PieChartComponent";
import pieData from "../../Data/pieData";
import sales from "../../Data/Sales";
import Productlist from "../../Data/productlist";
import LineChartvertical from "../../components/Chart/lineChatvertical";

export default function Products() {
  const productColumns = [
    { key: "name", label: "Name" },
    { key: "category", label: "Category" },
    { key: "price", label: "Price", type: "number" },
    { key: "stock", label: "Stock", type: "number" },
    { key: "sales", label: "Sales", type: "number" },
  ];

  const handleEditProduct = (product) => {
    console.log("Product edited: ", product);
  };

  const handleDeleteProduct = (productId) => {
    console.log("Product deleted: ", productId);
  };

  return (
    <div className="side-layout min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 sm:p-6">
      <Title title="Products" />

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <StatCard
          title="Total Revenue"
          value="$ 123,345"
          icon={<FaDollarSign className="text-green-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
        <StatCard
          title="Top Selling"
          value="1,234"
          icon={<FaTrophy className="text-yellow-500 text-2xl" />}
          className="bg-white shadow-md rounded-lg p-4"
        />
        <StatCard
          title="Total Products"
          value="567"
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

      <div className="mb-6">
        <List
          data={Productlist}
          columns={productColumns}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
          title="Product Inventory"
        />
      </div>

      <div className="mb-6">
        <LineChartvertical data={sales} title="Sales Trend" />
      </div>

      <div className="mb-6">
        <PieChartComponent title="Category Distribution" data={pieData} />
      </div>
    </div>
  );
}
