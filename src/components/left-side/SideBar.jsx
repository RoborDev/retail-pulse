import React, { Fragment } from "react";
// import Brand from "../images/Brand.jpg";
import logo from "../images/Logo.svg";
import compass from "../icons/compass.svg";
import cart from "../icons/cart.svg";
import Tag from "../icons/tag.svg";
import user from "../icons/user.svg";
import Analytics from "../icons/analytics.svg";
import styles from "./SideBar.module.css";

function SideBar() {
  const menuItems = [
    { img: compass, menuName: "Overview" },
    { img: cart, menuName: "Orders" },
    { img: Tag, menuName: "Products" },
    { img: user, menuName: "Customers" },
    { img: Analytics, menuName: "Analytics" },
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
              <li key={index} className={`${styles["navigation_item"]}`}>
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
    </Fragment>
  );
}

export default SideBar;
