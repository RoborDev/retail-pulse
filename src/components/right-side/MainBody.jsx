import React from "react";
import SearchBar from "./SearchBar";
import Overview from "./Overview";
import InnerBody from "./InnerBody";

function MainBody() {
  return (
    <div>
      <SearchBar />
      <Overview />
      <InnerBody />
    </div>
  );
}

export default MainBody;
