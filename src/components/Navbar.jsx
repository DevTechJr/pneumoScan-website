import React from "react";
import { Link } from "react-router-dom";
import { FaLungsVirus, FaViruses } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { BiCategory, BiCog } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar bg-primary rounded-2xl p-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white text-2xl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"} className="hover:text-primary font-semibold">
                ABOUT
              </Link>
            </li>
            <li></li>
            <li>
              <Link to={"/hiw"} className="hover:text-primary font-semibold">
                HOW IT WORKS
              </Link>
            </li>
            <li></li>
            <li>
              <Link to={"/hiw"} className="hover:text-primary font-semibold">
                WHAT IS PNEUMONIA
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to={"/pneumoScan"}
          className="btn btn-ghost normal-case text-2xl font-bold text-white flex items-center"
        >
          <FaLungsVirus className="text-white text-3xl font-semibold mx-2" />{" "}
          PneumoScan™
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to={"/"}
              className="hover:text-white text-white font-bold btn btn-outline btn-white mx-2 flex items-center"
            >
              <BiCategory className="text-white text-xl font-semibold" /> ABOUT
            </Link>
          </li>

          <li>
            <Link
              to={"/hiw"}
              className="hover:text-white text-white font-bold btn btn-outline btn-white mx-2 flex items-center"
            >
              <BiCog className="text-white text-xl font-semibold" /> HOW IT
              WORKS
            </Link>
          </li>
          <li>
            <Link
              to={"/pneumonia"}
              className="hover:text-white text-white font-bold btn btn-outline btn-white mx-2 flex items-center"
            >
              <FaViruses className="text-white text-xl font-semibold" /> WHAT IS
              PNEUMONIA
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to={"/pneumoScan"}
          className="btn btn-accent font-bold text-md btn-outline "
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
