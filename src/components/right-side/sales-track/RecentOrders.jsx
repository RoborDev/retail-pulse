import React, { useState } from "react";
import styles from "./RecentOrders.module.css";
import calender from "./../../icons/calender.svg";
import Button from "../../utitlities/Button";

const RecentOrders = () => {
  const [filter, setFilter] = useState("All");

  const orders = [
    {
      id: 1,
      orderId: "#9234",
      customer: "Favour Dumnoi",
      date: "Aug 17, 2023",
      status: "Paid",
      amount: "$1200.82",
    },
    {
      id: 2,
      orderId: "#8291",
      customer: "Roxana Johnsson",
      date: "Aug 17, 2023",
      status: "Pending",
      amount: "$800.46",
    },
    {
      id: 3,
      orderId: "#8291",
      customer: "Roxana Johnsson",
      date: "Aug 16, 2023",
      status: "Pending",
      amount: "$800.46",
    },
    {
      id: 4,
      orderId: "#8291",
      customer: "Bobby Johnsson",
      date: "Aug 19, 2023",
      status: "Paid",
      amount: "$800.46",
    },
  ];

  // Filter orders based on selected value
  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Recent Orders</h3>
        <div className={styles.filters}>
          <Button imgSrc={calender} className={styles.button} title="August" />
          <select
            className={styles.filterSelect}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Show: All</option>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
          </select>
        </div>
      </div>

      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            <th className={`${styles.customerHead} ${styles.hash}`}>#</th>
            <th className={styles.customerHead}>Order ID</th>
            <th className={styles.customerHead}>Customer Name</th>
            <th className={styles.customerHead}>Date</th>
            <th className={styles.customerHead}>Status</th>
            <th className={`${styles.customerHead} ${styles.amountBd}`}>
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className={styles.customer}>{order.id}</td>
                <td className={styles.customer}>{order.orderId}</td>
                <td className={styles.customer}>{order.customer}</td>
                <td className={styles.customer}>{order.date}</td>
                <td className={styles.customer}>
                  <span
                    className={`${styles.status} ${
                      order.status === "Paid" ? styles.paid : styles.pending
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className={styles.customer}>{order.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className={styles.noData}>
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
