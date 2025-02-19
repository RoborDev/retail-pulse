import React, { useState } from "react";
import styles from "./OrdersTable.module.css";
import orders from "./OrderData";
import Button from "../../utitlities/Button";
import filter from "../../icons/filter.svg";
import OrdersList from "./OrdersList";

const OrdersTable = ({ onOrderClick }) => {
  const [activeTab, setActiveTab] = useState("All Orders");

  // Filter logic based on activeTab
  const filteredOrders = orders.filter((order) => {
    if (activeTab === "All Orders") return true; // Show all
    if (activeTab === "Fulfilled") return order.paymentStatus === "Paid";
    if (activeTab === "Unpaid") return order.paymentStatus === "Unpaid";
    if (activeTab === "Cancelled") return order.orderStatus === "Cancelled";
    return true; // Default to show all
  });

  console.log("Filtered Orders:", filteredOrders); // Debugging log

  const tabs = ["All Orders", "Fulfilled", "Unpaid", "Cancelled"];

  return (
    <div className={styles.ordersTable}>
      {/* Header Tabs */}
      <div className={styles.headerTabs}>
        {tabs.map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? styles.active : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
        <Button
          className={styles.filterButton}
          imgSrc={filter}
          title={"Filter"}
        />
        <hr />
      </div>

      {/* Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.hash}>
              <input type="checkbox" />
            </th>
            <th>Order</th>
            <th>Items</th>
            <th>Payment Status</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Order Status</th>
            <th>Total</th>
            <th>Delivery Date</th>
            <th className={styles.amountBd}></th>
          </tr>
        </thead>
        <tbody>
          <OrdersList orders={filteredOrders} onOrderClick={onOrderClick} />
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
