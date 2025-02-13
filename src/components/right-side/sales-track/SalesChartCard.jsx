import React from "react";
import SalesGraph from "./SalesGraph";
import calender from "./../../icons/calender.svg";
import Button from "../../utitlities/Button";
import styles from "./SalesChartCard.module.css";

const SalesChartCard = () => {
  return (
    <div className={styles.salesChartCard}>
      <div className={styles.header}>
        <h2>Today</h2>
        <div className={styles.filterButtons}>
          <Button imgSrc={calender} className={styles.size} title={"Today"} />
          <span>Compared to</span>
          <Button
            imgSrc={calender}
            className={styles.size}
            title={"Yesterday"}
          />

          <Button className={styles.size} title={"Total Sales"} />
        </div>
      </div>

      <h1 className={styles.salesFigure}>69.7K</h1>
      <div className={styles.period}>
        <p className={styles.title}>Sales over time</p>

        <div className={styles.dates}>
          <div className={styles.label}>
            <span className={`${styles.dot} ${styles.blueDot}`}></span>
            <p>17 Aug 2023</p>
          </div>

          <div className={styles.label}>
            <span className={`${styles.dot} ${styles.orangeDot}`}></span>
            <p>16 Aug 2023</p>
          </div>
        </div>
      </div>

      <SalesGraph />
    </div>
  );
};

export default SalesChartCard;
