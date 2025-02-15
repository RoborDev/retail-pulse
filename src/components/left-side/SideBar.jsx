import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import styles from "./SideBar.module.css";
import logo from "../images/Logo.svg";
import compass from "../icons/compass.svg";
import cart from "../icons/cart.svg";
import tag from "../icons/tag.svg";
import user from "../icons/user.svg";
import analytics from "../icons/analytics.svg";
import store from "../icons/store.svg";
import sale from "../icons/sale.svg";
import settings from "../icons/settings.svg";
import logout from "../icons/logout.svg";

function SideBar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); // Initialize navigation function

  const handleItemClick = (index, route) => {
    setActiveIndex(index);
    navigate(route); // Navigate to the selected route
  };

  const menuItems = [
    { img: compass, menuName: "Overview", route: "/" },
    { img: cart, menuName: "Orders", route: "/orders" },
    { img: tag, menuName: "Products", route: "/products" },
    { img: user, menuName: "Customers", route: "/customers" },
    { img: analytics, menuName: "Analytics", route: "/analytics" },
  ];

  const sales = [
    { img: store, menuName: "Online Store", route: "/online-store" },
    { img: sale, menuName: "Point of Sale", route: "/point-of-sale" },
  ];

  const settingsMenu = [
    { img: settings, menuName: "Settings", route: "/settings" },
    { img: logout, menuName: "Log Out", route: "/logout" },
  ];

  return (
    <div className={styles.brand}>
      <div className={styles["sidebar-header"]}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles["logo-image"]} />
          <h2 className={styles["logo-text"]}>RETAILPULSE</h2>
        </div>
      </div>

      <div className={styles.navigation}>
        {/* Main Navigation */}
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${styles.navigation_item} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => handleItemClick(index, item.route)}
            >
              <img
                src={item.img}
                className={styles["side-bar-icon"]}
                alt={item.menuName}
              />
              <span>{item.menuName}</span>
            </li>
          ))}
        </ul>

        {/* Sales Channel Section */}
        <ul>
          <span className={styles.sales}>Sales Channel</span>
          {sales.map((item, index) => (
            <li
              key={index + menuItems.length} // Ensure unique key
              className={`${styles.navigation_item} ${
                activeIndex === index + menuItems.length ? styles.active : ""
              }`}
              onClick={() =>
                handleItemClick(index + menuItems.length, item.route)
              }
            >
              <img
                src={item.img}
                className={styles["side-bar-icon"]}
                alt={item.menuName}
              />
              <span>{item.menuName}</span>
            </li>
          ))}
        </ul>

        {/* Settings Section */}
        <ul>
          {settingsMenu.map((item, index) => (
            <li
              key={index + menuItems.length + sales.length} // Ensure unique key
              className={`${styles.navigation_item} ${
                activeIndex === index + menuItems.length + sales.length
                  ? styles.active
                  : ""
              }`}
              onClick={() =>
                handleItemClick(
                  index + menuItems.length + sales.length,
                  item.route
                )
              }
            >
              <img
                src={item.img}
                className={styles["side-bar-icon"]}
                alt={item.menuName}
              />
              <span>{item.menuName}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
