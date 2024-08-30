import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <div className="navbar flex bg-slate-300 h-12 justify-between items-center">
        <div className="nav-sec-1 flex items-center">
          <button onClick={props.handleSidebar}>
            <FaBarsStaggered size={30} className="menu" />
          </button>
          <a
            href="/"
            className="ms-2 text-2xl font-bold border-4 border-violet-300 bg-violet-600 rounded-full text-white px-4 p-1 font-mono"
          >
            MyWeb
          </a>
          <a
            href="/"
            className="menu-items ms-5 h-12 p-2.5 hover:opacity-65 hover:border-b-2 border-b-slate-500"
          >
            Home
          </a>
          <a
            href="/"
            className="menu-items ms-5 h-12 p-2.5 hover:opacity-65 hover:border-b-2 border-b-slate-500"
          >
            Contact Us
          </a>
          <a
            href="/"
            className="menu-items ms-5 h-12 p-2.5 hover:opacity-65 hover:border-b-2 border-b-slate-500"
          >
            About
          </a>
        </div>
        <div className="nav-sec-2">
          <button className="me-5 bg-violet-500 px-5 py-2 rounded-md font-medium hover:opacity-50 text-white">
            Sign Up
          </button>
          <button className="me-5 bg-violet-500 px-5 py-2 rounded-md font-medium hover:opacity-50 text-white">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
