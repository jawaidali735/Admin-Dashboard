// Apne config file ka import karein

import { client } from "../lib/client";

export const getOrders = async () => {
  try {
    const orders = await client.fetch(`*[_type == "order"]`);
    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};
