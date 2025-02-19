import React from "react";
import Button from "../../utitlities/Button";
import x from "../../icons/xMark.svg";
import macbook from "../../images/Macbook.png";
import ipad from "../../images/iPad.png";
import airpod from "../../images/Airpod.png";
import logout from "../../icons/logout - Copy.svg";
import styles from "./OverviewDetails.module.css";

const OverViewDetails = ({ order, onClose }) => {
  if (!order) {
    return null; // Don't render if no order is selected
  }

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Order Information</h2>
        <div className={styles.xCon}>
          <Button imgSrc={x} className={styles.close} onClick={onClose} />
        </div>
      </div>

      {/* Order Details */}
      <div className={styles.section}>
        <div className={styles.row}>
          <span className={styles.rowDt}>Order Number</span>
          <span className={styles.rowNu}>{order.id}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowDt}>Order Date</span>
          <span className={styles.rowNu}>{order.date}</span>
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
          <span className={styles.rowNu}>{order.customer}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowDt}>Shipping Address</span>
          <span className={styles.rowNu}>
            Plot 37A, Awudu, Ekpekha Boulevard Off, Admiralty Way, Lekki Phase 1
            Lekki, Lagos, Nigeria.
          </span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowDt}>Contact</span>
          <span className={styles.rowNu}>+234 9124581234</span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowDt}>Email</span>
          <span className={styles.rowNu}>Floydmiles@gmail.com</span>
        </div>
      </div>

      {/* Items Ordered (Hardcoded) */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Items Ordered</h3>
        {[
          {
            name: "MacBook Pro 14”",
            quantity: 1,
            price: "$1,800",
            image: macbook,
          },
          { name: "iPad Pro 12.9”", quantity: 1, price: "$600", image: ipad },
          { name: "AirPods Max", quantity: 1, price: "$800", image: airpod },
        ].map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.itemDetails}>
              <div className={styles.imgCon}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.itemImage}
                />
              </div>
              <div className={styles.itemText}>
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.itemQuantity}>x{item.quantity}</p>
              </div>
            </div>
            <p className={styles.itemPrice}>{item.price}</p>
          </div>
        ))}
      </div>

      {/* Order Summary (Hardcoded) */}
      <div className={styles.summarySection}>
        <h3>Order Summary</h3>
        <div className={styles.summaryRow}>
          <span className={styles.summaryDetails}>Subtotal</span>
          <span className={styles.summaryDetails}>$3200.00</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryDetails}>Delivery</span>
          <span className={styles.summaryDetails}>$100.00</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryDetails}>Discount</span>
          <span className={styles.summaryDetails}>-$100</span>
        </div>
        <hr className={styles.summaryDivider} />
        <div className={styles.summaryTotal}>
          <span className={styles.totalAmount}>Total</span>
          <span className={styles.totalAmount}>$3200.00</span>
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
