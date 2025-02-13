import React from "react";
import styles from "./TopSellingCard.module.css";
import airpodsImg from "../../images/Airpod.png";
import macbookImg from "../../images/Macbook.png";
import ipadImg from "../../images/iPad.png";

const products = [
  { id: "#9024", name: "AirPods Max", sold: "1,238", image: airpodsImg },
  { id: "#8124", name: 'MacBook Pro 14"', sold: "1,196", image: macbookImg },
  { id: "#7652", name: 'iPad Pro 12.9"', sold: "1,023", image: ipadImg },
  { id: "#9024", name: 'MacBook Pro 14"', sold: "1,196", image: macbookImg },
];

const TopSellingCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Top selling products</h2>
      <p className={styles.subtitle}>
        Products driving the most revenue and sales
      </p>
      <div className={styles.list}>
        {products.map((product, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.productInfo}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <div>
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.productId}>{product.id}</p>
              </div>
            </div>
            <div className={styles.salesInfo}>
              <span className={styles.soldAmount}>{product.sold}</span>
              <span className={styles.soldLabel}>Sold</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingCard;
