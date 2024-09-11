import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100  flex justify-center    ">
        <Link to="/" className="">
          <li className="list-none m-4	"> Home </li>
        </Link>
        <Link to="about">
          <li className="list-none"> About </li>
        </Link>
        <Link to="contact">
          <li className="list-none m-4"> Contact </li>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
