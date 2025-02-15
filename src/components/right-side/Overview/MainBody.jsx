import React from "react";
import SearchBar from "../SearchBar";
import Overview from "../../utitlities/Overview";
import plus from "../../icons/plus.svg";
import download from "../../icons/Download.svg";
import InnerBody from "../InnerBody";
import styles from "./MainBody.module.css";

function MainBody() {
  return (
    <div>
      <SearchBar />
      <Overview
        title="Overview"
        buttons={[
          { imgSrc: plus, title: "Add Item", className: styles.blue },
          { imgSrc: download, title: "Export Data", className: styles.white },
        ]}
      />
      <InnerBody />
    </div>
  );
}

export default MainBody;
