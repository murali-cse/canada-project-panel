import React from "react";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="layout-wrapper">
        <Header />
        <SideBar />
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
