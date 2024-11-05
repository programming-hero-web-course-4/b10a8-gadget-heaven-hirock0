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
    <main className="pb-20">
      <div className=" mt-5">
        <h1 className=" text-center text-xl mb-5 font-semibold">
          Selling Graph Chart
        </h1>
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

        <div className="mt-10 text-center flex flex-col items-center">
          <h1 className=" text-center text-xl font-semibold ">
            Selling Descriptions
          </h1>
          <p className=" mt-5 w-5/6">
            The gadget-selling rate on our website reflects strong demand and
            customer satisfaction, with consistent daily sales driven by popular
            products like smartphones, tablets, and accessories. Our
            user-friendly interface and competitive pricing attract a high
            volume of traffic, leading to increased conversion rates. Seasonal
            promotions and exclusive deals further boost sales, creating a
            dynamic and growing marketplace for tech enthusiasts
          </p>
        </div>
      </div>
    </main>
  );
};

export default Statistics;
