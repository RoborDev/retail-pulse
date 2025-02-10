import React from "react";
import styles from "./Button.module.css";

function Button({ imgSrc, title, className }) {
  return (
    <button className={`${styles.button} ${className || ""}`}>
      {imgSrc && <img src={imgSrc} alt={title} className={styles.icon} />}
      {title}
    </button>
  );
}

export default Button;
