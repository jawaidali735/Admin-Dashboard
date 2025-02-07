"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions, // ✅ Correct import for chart options
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const OrdersChart = () => {
  const data = {
    labels: ["First Day", "Second Day"],
    datasets: [
      {
        label: "Orders",
        data: [14, 50],
        borderColor: "#FB2E86",
        backgroundColor: "  rgba(251, 46, 134, 0.3) ",
      },
    ],
  };

  // ✅ FIX: Change "line" to "bar"
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Orders Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="bg-white p-5 rounded-xl shadow w-full h-[430px]">
      <Bar data={data} options={options} />
    </section>
  );
};

export default OrdersChart;
