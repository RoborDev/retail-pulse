import React from "react";
import styles from "./OrderList.module.css";

const OrdersList = ({ orders }) => {
  return (
    <>
      {orders.map((order, index) => (
        <tr key={index}>
          <td>
            <input type="checkbox" />
          </td>
          <td>{order.id}</td>
          <td>{order.items}</td>
          <td>
            <span className={`${styles.statusBadge} ${order.paymentClass}`}>
              {order.paymentStatus}
            </span>
          </td>
          <td>{order.customer}</td>
          <td>{order.date}</td>
          <td>
            <span className={`${styles.statusBadge} ${order.orderClass}`}>
              {order.orderStatus}
            </span>
          </td>
          <td>{order.total}</td>
          <td>{order.deliveryDate}</td>
          <td>⋮</td>
        </tr>
      ))}
      <span className={styles.navigate}>Page 1 of 12 </span>
    </>
  );
};

export default OrdersList;
