import React from "react";
import send from "../../icons/send.svg";
import styles from "./TrafficCard.module.css";

const TrafficCard = () => {
  return (
    <div className={styles.salesCard}>
      <div className={styles.header}>
        <h3 className={styles.headerText}>Sales by traffic sources</h3>
        <button className={styles.compareBtn}>
          Compare
          <img src={send} alt="send" />
        </button>
      </div>

      <h2 className={styles.salesAmount}>$48K</h2>

      <div className={styles.progressBar}>
        <div
          className={`${styles.progress} ${styles.direct}`}
          style={{ width: "57.3%" }}
        ></div>
        <div
          className={`${styles.progress} ${styles.paid}`}
          style={{ width: "24%" }}
        ></div>
        <div
          className={`${styles.progress} ${styles.social}`}
          style={{ width: "17%" }}
        ></div>
      </div>

      <div className={styles.salesDetails}>
        <div className={styles.salesItem}>
          <div className={styles.label}>
            <span className={`${styles.dot} ${styles.directDot}`}></span>
            <p>Direct</p>
          </div>
          <span className={styles.amount}>$28K</span>
        </div>

        <div className={styles.salesItem}>
          <div className={styles.label}>
            <span className={`${styles.dot} ${styles.paidDot}`}></span>
            <p>Paid</p>
          </div>
          <span className={styles.amount}>$12K</span>
        </div>

        <div className={styles.salesItem}>
          <div className={styles.label}>
            <span className={`${styles.dot} ${styles.socialDot}`}></span>
            <p> Social</p>
          </div>
          <span className={styles.amount}>$8K</span>
        </div>
      </div>
    </div>
  );
};

export default TrafficCard;
