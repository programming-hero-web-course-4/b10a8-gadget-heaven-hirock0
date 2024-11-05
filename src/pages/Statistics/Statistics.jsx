import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const Statistics = () => {




  const data = [
    { name: "Laptop", rate: 4000, price: 2400 },
    { name: "Phones", rate: 3000, price: 1398 },
    { name: "Accessories", rate: 2000, price: 9800 },
    { name: "Smart Watches", rate: 2780, price: 3908 },
    { name: "MacBook", rate: 1890, price: 4800 },
    { name: "Iphone", rate: 2390, price: 3800 },
  ];

  return (
    <main>
      <div className="">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" />
            <Bar dataKey="rate" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default Statistics;
