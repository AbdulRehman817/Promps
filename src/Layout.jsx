import React from "react";
import Navbar from "./Components/navbar.jsx";
// import Card from "./card.jsx";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
