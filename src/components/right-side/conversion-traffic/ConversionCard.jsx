import React from "react";
import send from "../../icons/send.svg";
import styles from "./ConversionCard.module.css";

const ConversionCard = () => {
  const funnelData = [
    {
      stage: "Added to cart",
      value: "43,000",
      percentage: "100%",
      width: "100%",
    },
    {
      stage: "Reached checkout",
      value: "28,380",
      percentage: "66%",
      width: "66%",
    },
    {
      stage: "Made purchase",
      value: "16,176",
      percentage: "57%",
      width: "57%",
    },
  ];

  return (
    <div className={styles.conversionCard}>
      <div className={styles.cardHeader}>
        <div>
          <p className={styles.cardTitle}>Conversion rate</p>
          <h2 className={styles.conversionRate}>37%</h2>
        </div>
        <button className={styles.compareBtn}>
          Compare
          <img src={send} alt="send" />
        </button>
      </div>

      <div className={styles.Title}>
        <p className={styles.funnelTitle}>Conversion funnel</p>
        <p className={styles.funnelTitle}>Session</p>
        <p className={styles.funnelTitle}>(%)</p>
      </div>

      <div className={styles.funnelContainer}>
        {funnelData.map((item, index) => (
          <div className={styles.funnelCon}>
            <div key={index} className={styles.testingRow}>
              {/* Funnel Stage - Left Side */}
              <div className={styles.funnelStageContainer}>
                <span className={styles.funnelStage}>{item.stage}</span>
              </div>

              {/* Progress Bar - Middle */}
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: item.width }}
                >
                  {item.value}
                </div>
              </div>
            </div>

            {/* Percentage - Right Side */}
            <div className={styles.percentageContainer}>
              <span className={styles.percentage}>{item.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversionCard;
