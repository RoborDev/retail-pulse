import React, { useState } from "react";
import logout from "../icons/logout.svg";
import plus from "../icons/plus.svg";
import Overview from "../utitlities/Overview";
import SearchBar from "../right-side/SearchBar";
import OrdersTable from "../right-side/Orders/OrdersTable";
import OverViewDetails from "../right-side/Orders/OverViewDetails";
import styles from "./OrdersPage.module.css";

const OrdersPage = () => {
  const [isOrderClicked, setIsOrderClicked] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    console.log("Order clicked:", order);
    setSelectedOrder(order);
    setIsOrderClicked(true);
  };

  const handleCloseOverview = () => {
    console.log("Close button clicked!");
    setIsOrderClicked(false);
  };

  return (
    <div className={styles.container}>
      {/* Left Side (70%) */}
      <div className={styles.leftSection}>
        <SearchBar />
        <Overview
          title="Orders"
          buttons={[
            { imgSrc: logout, title: "Export", className: styles.white },
            { imgSrc: plus, title: "Create Order", className: styles.blue },
          ]}
        />
        <OrdersTable onOrderClick={handleOrderClick} />
      </div>

      {/* Right Side (30%) - Shows only when an order is clicked */}
      {isOrderClicked && (
        <div className={styles.rightSection}>
          <OverViewDetails
            order={selectedOrder}
            onClose={handleCloseOverview}
          />
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
