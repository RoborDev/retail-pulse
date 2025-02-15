import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/left-side/SideBar";
import MainBody from "./components/right-side/Overview/MainBody";
import OrdersPage from "./components/pages/OrdersPage";
import OverViewPage from "./components/pages/OverViewPage";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <SideBar /> {/* Sidebar stays fixed */}
        </div>
        <div className="mainbody">
          <Routes>
            <Route path="/" element={<OverViewPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
