"use client";

import { getOrders } from "@/sanity/helpers";
import Image from "next/image";
import { useEffect, useState } from "react";

// Define interface for product
export interface Product {
  _id: string;
  name: string;
  quantity: number;
  price: number;
}

// Define interface for review
export interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

// Define interface for order
export interface Order {
  _id: string;
  totalAmount: number;
  status: string;
  products: Product[];
  reviews?: Review[]; // Now using Review[] instead of { [key: string]: any }[]
}

// Define props interface for Card component
interface CardProps {
  title: string;
  value: number;
  imgUrl: string;
}

export default function CountMeter() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data: Order[] = await getOrders(); // Type-casting the response as Order[]
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const totalAmount = orders.reduce((acc, order) => acc + order.totalAmount, 0);
  
  const totalProductsOrdered = orders.reduce(
    (acc, order) =>
      acc + order.products.reduce((productAcc, product) => productAcc + product.quantity, 0),
    0
  );

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-5">
      <Card imgUrl="/box.png" title="Products" value={totalProductsOrdered} />
      <Card imgUrl="/received.png" title="Orders" value={orders.length} />
      <Card imgUrl="/profit-up.png" title="Revenue" value={totalAmount} />
      <Card imgUrl="/team.png" title="Customer" value={100} />
    </section>
  );
}

// Card component with proper typing
function Card({ title, value, imgUrl }: CardProps) {
  return (
    <div className="flex gap-2 px-4 py-2 bg-white shadow rounded-xl w-full justify-between items-center">
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl">{value}</h1>
        <h1 className="text-sm text-gray-700">{title}</h1>
      </div>
      <Image className="h-10 w-10" width={100} height={100} src={imgUrl} alt={title} />
    </div>
  );
}
