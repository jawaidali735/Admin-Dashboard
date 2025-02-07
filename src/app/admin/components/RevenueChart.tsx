"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions, // ✅ Import correct type for options
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  const data = {
    labels: ["First Day", "Second Day"],
    datasets: [
      {
        label: "Revenue",
        data: [14, 50],
        borderColor: "#FB2E86",
        backgroundColor: "rgba(251, 46, 134, 0.3)",
        tension: 0.4, // ✅ Smoother curve
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top", // ✅ No need for explicit casting
      },
      title: {
        display: false,
        text: "Revenue Chart",
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
    <section className="bg-white p-5 rounded-xl shadow max-w-full h-[300px] sm:h-[430px]">
      <Line data={data} options={options} />
    </section>
  );
};

export default RevenueChart;
