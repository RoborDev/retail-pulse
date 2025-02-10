import "./App.css";
import React, { Fragment } from "react";
import SideBar from "./components/left-side/SideBar";
import MainBody from "./components/right-side/MainBody";

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="mainbody">
        <MainBody />
      </div>
    </div>
  );
}

export default App;
