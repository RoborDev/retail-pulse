import React from "react";
import styles from "./Overview.module.css";
import Button from "./Button";

function Overview({ title, buttons }) {
  return (
    <div className={styles.overview}>
      <h2>{title}</h2>
      <div className={styles.overviewButtons}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            imgSrc={button.imgSrc}
            title={button.title}
            className={button.className}
          />
        ))}
      </div>
    </div>
  );
}

export default Overview;
