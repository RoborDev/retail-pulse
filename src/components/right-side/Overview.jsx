import React from "react";
import styles from "./Overview.module.css";
import Button from "../utitlities/Button";
import plus from "../icons/plus.svg";
import download from "../icons/Download.svg";
function Overview() {
  return (
    <div className={styles.overview}>
      <h2>Overview</h2>
      <div className={styles.overviewButtons}>
        <Button
          imgSrc={plus}
          title={"Add New Product"}
          className={styles.blue}
        />
        <Button
          imgSrc={download}
          title={"Download Report"}
          className={styles.white}
        />
      </div>
    </div>
  );
}

export default Overview;
