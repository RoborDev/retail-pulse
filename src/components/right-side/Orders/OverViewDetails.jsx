import React from "react";
import Button from "../../utitlities/Button";
import x from "../../icons/xMark.svg";
import macbook from "../../images/Macbook.png";
import ipad from "../../images/iPad.png";
import airpod from "../../images/Airpod.png";
import logout from "../../icons/logout - Copy.svg";
import styles from "./OverviewDetails.module.css";

const OverViewDetails = ({ onClose }) => {
  const order = {
    orderNumber: "#9781",
    orderDate: "Dec 30, 2023",
    orderStatus: "Delivered",
    customer: {
      name: "Floyd Miles",
      address:
        "Plot 37A, Awudu, Ekpekha Boulevard Off, Admiralty Way, Lekki Phase 1 Lekki, Lagos, Nigeria.",
      contact: "+234 9124581234",
      email: "Floydmiles@gmail.com",
    },
    items: [
      { name: "MacBook Pro 14”", quantity: 1, price: "$1,800", image: macbook },
      { name: "iPad Pro 12.9”", quantity: 1, price: "$600", image: ipad },
      { name: "AirPods Max", quantity: 1, price: "$800", image: airpod },
    ],
    summary: {
      subtotal: "$3200.00",
      delivery: "$100.00",
      discount: "-$100",
      total: "$3200.00",
    },
  };

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Order Information</h2>
        <Button imgSrc={x} className={styles.close} onClick={onClose} />
      </div>

      {/* Order Details */}
      <div className={styles.section}>
        <div className={styles.row}>
          <span className={styles.rowDt}>Order Number</span>
          <span className={styles.rowNu}>{order.orderNumber}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowDt}>Order Date</span>
          <span className={styles.rowNu}>{order.orderDate}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowDt}>Order Status</span>
          <span className={styles.status}>{order.orderStatus}</span>
        </div>
      </div>

      {/* Customer Information */}
      <div className={styles.section}>
        <h3>Customer Information</h3>
        <div className={styles.row}>
          <span className={styles.rowDt}>Name</span>
          <span className={styles.rowNu}>{order.customer.name}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowDt}>Shipping Address</span>
          <span className={styles.rowNu}>{order.customer.address}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowDt}>Contact</span>
          <span className={styles.rowNu}>{order.customer.contact}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowDt}>Email</span>
          <span className={styles.rowNu}>{order.customer.email}</span>
        </div>
      </div>

      {/* Items Ordered */}
      <div className={styles.section}>
        <h3>Items Ordered</h3>
        {order.items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.imgCon}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.itemImage}
              />
            </div>
            <div>
              <p className={styles.itemName}>{item.name}</p>
              <p className={styles.itemQuantity}>x{item.quantity}</p>
            </div>
            <p className={styles.itemPrice}>{item.price}</p>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className={styles.summarySection}>
        <h3>Order Summary</h3>
        <div className={styles.summaryRow}>
          <span className={styles.summaryDetails}>Subtotal</span>
          <span className={styles.summaryDetails}>
            {order.summary.subtotal}
          </span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryDetails}>Delivery</span>
          <span className={styles.summaryDetails}>
            {order.summary.delivery}
          </span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryDetails}>Discount</span>
          <span className={styles.summaryDetails}>
            {order.summary.discount}
          </span>
        </div>
        <hr className={styles.summaryDivider} />
        <div className={styles.summaryTotal}>
          <span className={styles.totalAmount}>Total</span>
          <span className={styles.totalAmount}>{order.summary.total}</span>
        </div>
        <Button
          imgSrc={logout}
          className={styles.exportButton}
          title="Export"
        />
      </div>
    </div>
  );
};

export default OverViewDetails;
