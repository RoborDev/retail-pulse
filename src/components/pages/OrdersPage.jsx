import React, { useState } from "react";
import logout from "../icons/logout.svg";
import plus from "../icons/plus.svg";
import Overview from "../utitlities/Overview";
import SearchBar from "../right-side/SearchBar";
import OrdersTable from "../right-side/Orders/OrdersTable";
import Sidebar from "../left-side/SideBar";
import OverViewDetails from "../right-side/Orders/OverViewDetails";
import styles from "./OrdersPage.module.css";

const OrdersPage = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    console.log("Order clicked:", order);
    setSelectedOrder(order); // Set clicked order
  };

  const handleCloseOverview = () => {
    console.log("Close button clicked!");
    setSelectedOrder(null); // Hide details when "X" is clicked
  };

  return (
    <div className={styles.container}>
      {/* Left Side */}
      <div
        className={`${styles.leftSection} ${
          selectedOrder ? styles.shrink : ""
        } ${selectedOrder ? styles.blur : ""}`}
      >
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

      {/* Right Side - Only render when an order is selected */}
      {selectedOrder && (
        <div
          className={`${styles.rightSection} ${
            selectedOrder ? styles.visible : ""
          }`}
        >
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
