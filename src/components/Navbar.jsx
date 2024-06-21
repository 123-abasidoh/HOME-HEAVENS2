import React from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [navbardrawer, setnavbarDrawer] = useState(false);

  const toggleNav = () => {
    setnavbarDrawer(!navbardrawer);
  };

  return (
    <>
      <nav className=" py-3 px-4  fixed w-full z-40  backdrop-blur-lg  shadow-sm">
        <div className="container m-auto flex justify-between items-center relative  text-sm">
          <div className="flex  items-center">
            <img src={logo} alt="logo" className="w-10" />
          </div>
          <ul className="hidden lg:flex space-x-12 text-neutral-300">
            {navItems.map((items, index) => (
              <li key={index}>
                <Link to={items.href} >{items.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center space-x-8 text-neutral-300">
            <Link
              to="/signin"
              className="px-4 py-3 border border-nuetral-800 rounded-md  "
            >
              Create an account
            </Link>
            <Link
              to="/login"
              className="px-4 py-3 border border-nuetral-800 rounded-md   "
            >
              Login
            </Link>
          </div>
          <button onClick={toggleNav} className="lg:hidden">
            {navbardrawer ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <div className="">
        {navbardrawer && (
          <div className=" fixed z-10 flex w-full top-[60px] flex-col py-8 px-2  items-center  bg-neutral-300 lg:hidden">
            {
              <ul className=" lg:flex ">
                {navItems.map((items, index) => (
                  <li key={index} className="mt-12">
                    <Link to={items.href}>{items.label}</Link>
                  </li>
                ))}
              </ul>
            }

            <div className="lg:hidden flex items-center space-x-8 mt-6 mb-12 ">
              <Link
                to="/signup"
                className="px-4 py-3 border border-nuetral-800 rounded-md "
              >
                Create an account
              </Link>
              <Link
                to="/login"
                className="px-4 py-3 border border-nuetral-800 rounded-md   backdrop:blur-lg"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
