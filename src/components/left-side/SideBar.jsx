import React, { Fragment, useState } from "react";
// import Brand from "../images/Brand.jpg";
import logo from "../images/Logo.svg";
import compass from "../icons/compass.svg";
import cart from "../icons/cart.svg";
import Tag from "../icons/tag.svg";
import user from "../icons/user.svg";
import Analytics from "../icons/analytics.svg";
import store from "../icons/store.svg";
import sale from "../icons/sale.svg";
import settings from "../icons/settings.svg";
import logout from "../icons/logout.svg";
import styles from "./SideBar.module.css";

function SideBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const menuItems = [
    { img: compass, menuName: "Overview" },
    { img: cart, menuName: "Orders" },
    { img: Tag, menuName: "Products" },
    { img: user, menuName: "Customers" },
    { img: Analytics, menuName: "Analytics" },
  ];

  const sales = [
    { img: store, menuName: "Online Store" },
    { img: sale, menuName: "Point of Sale" },
  ];

  const Settings = [
    { img: settings, menuName: "Settings" },
    { img: logout, menuName: "Log Out" },
  ];

  return (
    <Fragment>
      <div className={styles.brand}>
        <div className={styles["sidebar-header"]}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" className={styles["logo-image"]} />
            <h2 className={styles["logo-text"]}>RETAILPULSE</h2>
          </div>
        </div>

        <div className={styles.navigation}>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${styles.navigation_item} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => handleItemClick(index)}
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

          <ul>
            <span className={styles.sales}>Sales Channel</span>
            {sales.map((item, index) => {
              return (
                <li
                  key={index + menuItems.length} // Ensure unique key
                  className={`${styles.navigation_item} ${
                    activeIndex === index + menuItems.length
                      ? styles.active
                      : ""
                  }`}
                  onClick={() => handleItemClick(index + menuItems.length)}
                >
                  <img
                    src={item.img}
                    className={styles["side-bar-icon"]}
                    alt={item.menuName}
                  />
                  <span>{item.menuName}</span>
                </li>
              );
            })}
          </ul>

          <ul>
            {Settings.map((item, index) => {
              return (
                <li
                  key={index + menuItems.length + sales.length}
                  className={`${styles.navigation_item} ${
                    activeIndex === index + menuItems.length + sales.length
                      ? styles.active
                      : ""
                  }`}
                  onClick={() =>
                    handleItemClick(index + menuItems.length + sales.length)
                  }
                >
                  <img
                    src={item.img}
                    className={styles["side-bar-icon"]}
                    alt={item.menuName}
                  />
                  <span>{item.menuName}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
