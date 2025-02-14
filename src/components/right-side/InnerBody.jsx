import React from "react";
import SalesCard from "./sales-track/SalesTrack";
import styles from "./InnerBody.module.css";
import ConversionCard from "./conversion-traffic/ConversionCard";
import TrafficCard from "./conversion-traffic/TrafficCard";
import TopSellingCard from "./conversion-traffic/TopSellingCard";
import SalesChartCard from "./sales-track/SalesChartCard";
import RecentOrders from "./sales-track/RecentOrders";

function InnerBody() {
  return (
    <div className={styles.innerBody}>
      <div className="track">
        <SalesCard />
        <SalesChartCard />
        <RecentOrders />
      </div>
      <div className={styles.rate}>
        <div className={styles.conversionTrafficWrapper}>
          <ConversionCard />
          <TrafficCard />
        </div>
        <div className={styles.topSellingScroll}>
          <TopSellingCard />
        </div>
      </div>
    </div>
  );
}

export default InnerBody;
