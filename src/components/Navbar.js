import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_white.png";
function Navbar() {
  const handleNav = () => {
    const mobileNav = document.querySelector(".mobile_nav");
    mobileNav.classList.toggle("hidden");
  };
  return (
    <>
      <nav className="text-white  flex  justify-around items-center bg-gradient-to-r from-pink-300  to-purple-700  ">
        <Link to="/">
          <img src={logo} className="w-32" />
        </Link>
        <div class="px-4 cursor-pointer md:hidden " onClick={() => handleNav()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <Link to="/" className="p-4 hover:font-bold link_hover">
            Home
          </Link>

          <Link to="/portfolio" className="link_hover">
            Portfolio
          </Link>
        </div>
        <button
          style={{ fontSize: "10px" }}
          className="nav_btn md:block hidden font-bold  px-3 py-1.5"
        >
          HIRE ME
        </button>
      </nav>
      {/* mobile nav */}
      <div className="mobile_nav hidden md:hidden  pl-4 pt-4 flex flex-col text-white bg-gradient-to-r from-pink-300  to-purple-700">
        <Link to="/" className="hover:font-bold link_hover">
          Home
        </Link>

        <Link to="/portfolio" className=" link_hover pt-4">
          Portfolio
        </Link>
      </div>
    </>
  );
}

export default Navbar;
