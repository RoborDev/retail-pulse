import React from "react";
import logout from "../icons/logout.svg";
import plus from "../icons/plus.svg";
import Overview from "../utitlities/Overview";
import SearchBar from "../right-side/SearchBar";
import OrdersTable from "../right-side/Orders/OrdersTable";
import styles from "./OrdersPage.module.css";

const OrdersPage = () => {
  return (
    <div>
      <SearchBar />
      <Overview
        title="Orders"
        buttons={[
          { imgSrc: logout, title: "Export", className: styles.white },
          { imgSrc: plus, title: "Create Order", className: styles.blue },
        ]}
      />
      <OrdersTable />
    </div>
  );
};

export default OrdersPage;
