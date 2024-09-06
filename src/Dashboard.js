import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const data = [
  { name: "Jul", sales: 4000 },
  { name: "Aug", sales: 3000 },
  { name: "Sep", sales: 5000 },
  { name: "Oct", sales: 6000 },
  { name: "Nov", sales: 7000 },
  { name: "Dec", sales: 6000 },
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 6000 },
  { name: "May", sales: 7000 },
  { name: "Jun", sales: 7500 },
];

const pieData = [
  { name: "Electronics", value: 31, color: "#8884d8" },
  { name: "Clothing", value: 22, color: "#8dd1e1" },
  { name: "Home & Garden", value: 19, color: "#82ca9d" },
  { name: "Books", value: 14, color: "#a4de6c" },
  { name: "Sports & Outdoors", value: 13, color: "#d0ed57" },
];

const barData = [
  { name: "Electronics", sales: 45000 },
  { name: "Clothing", sales: 40000 },
  { name: "Home & Garden", sales: 35000 },
  { name: "Books", sales: 20000 },
  { name: "Sports & Outdoors", sales: 15000 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Total Sales</h2>
          <p className="text-2xl">$12,345</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">New Users</h2>
          <p className="text-2xl">1,234</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Total Products</h2>
          <p className="text-2xl">567</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Sales Overview</h2>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Category Distribution</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              cx={200}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>

      <div className="p-4 bg-gray-800 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-bold mb-4">Sales by Channel</h2>
        <BarChart width={600} height={300} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
