import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const sidebar = [
    {
      path: "/",
      icon: "bx bx-home-circle",
      title: "Dashboard",
    },
    {
      path: "/hospitals",
      icon: "bx bx-border-all",
      title: "Hospitals",
    },
    {
      path: "/insurance",
      icon: "bx bx-dish",
      title: "Insurance",
    },
    {
      path: "/users",
      icon: "bx bx-user",
      title: "Users",
    },
    {
      path: "/doctors",
      icon: "bx bx-sitemap",
      title: "Doctors",
    },
    {
      path: "/issues",
      icon: "bx bx-food-menu",
      title: "Issues",
    },
  ];

  return (
    <>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title" key="t-menu">
                Menu
              </li>
              {sidebar.map((v) => {
                return (
                  <li key={`t-${v.title}`}>
                    <Link
                      to={v.path}
                      onClick={() => {
                        var body = document.getElementsByTagName("body")[0];
                        body.setAttribute("class", "");
                      }}
                    >
                      <i className={v.icon}></i>
                      <span key={`t-${v.title}`}>{v.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
