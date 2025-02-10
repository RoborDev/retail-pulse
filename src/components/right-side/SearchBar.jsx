import React from "react";
import styles from "./SearchBar.module.css";
import notification from "../icons/notification.svg";
import searchIcon from "../icons/searchIcon.svg";
import Avatar from "../icons/Avatar.svg";

function SearchBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <img src={searchIcon} alt="Search Icon" className={styles.searchIcon} />
        <input
          type="search"
          placeholder="Search for anything..."
          className={styles.searchBar}
        />
      </div>

      <div className="rightSection">
        <div className={styles.iconContainer}>
          <div className={styles.notificationIcon}>
            <img
              src={notification}
              alt="Notification Icon"
              className={styles.navbarIcon}
            />
          </div>

          <img src={Avatar} alt="User Avatar" className={styles.navbarAvatar} />

          <span className={styles.name}>Favour Dumnoi</span>
        </div>
      </div>
    </nav>
  );
}

export default SearchBar;
