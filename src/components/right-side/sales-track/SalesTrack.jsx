import React from "react";
import dollar from "../../icons/dollar.svg";
import styles from "./SalesTrack.module.css";
import user from "../../icons/user.svg";
import bag from "../../icons/bag.svg";
import ArrowUp from "../../icons/ArrowUp.svg";
import graph from "../../icons/Graph.svg";
import Arrowdown from "../../icons/ArrowDown.svg";

const SalesCard = () => {
  const sales = [
    {
      title: "Total Sales",
      amount: "$259.4k",
      text: "18.4%",
      img: dollar,
      icon: ArrowUp,
    },
    {
      title: "Total Vsitors",
      amount: "43k",
      text: "4.7%",
      img: user,
      icon: Arrowdown,
    },
    {
      title: "Total Orders",
      amount: "192k",
      text: " +2.5%",
      img: bag,
      icon: ArrowUp,
    },
  ];
  return (
    <div className={styles.salesCardContainer}>
      {sales.map(({ title, amount, text, img, icon }) => {
        const isRed = text === "4.7%";

        return (
          <div key={title} className={styles.salesCard}>
            <div className={styles.salesHeader}>
              <div className={styles.iconContainer}>
                <img src={img} alt={title} />
              </div>
              <span className={styles.growth}>
                <img src={icon} alt="Arrow" />
                <span
                  className={`${styles.growthText} ${isRed ? styles.red : ""}`}
                >
                  {text}
                </span>
              </span>
            </div>

            <div className={styles.salesInfo}>
              <p className={styles.salesTitle}>{title}</p>
              <h2 className={styles.salesAmount}>{amount}</h2>
            </div>

            <div>
              <img src={graph} className={styles.graphBg} alt="graph" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SalesCard;
