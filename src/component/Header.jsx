import React, { useState } from "react";
import "./../App.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openSideBar = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="header-container">
      <div className={clsx("overlay", { change: isOpen })}>
        <div className="overlay-content">
          <div className={clsx("sidebar-items")} onClick={openSideBar}>
            <NavLink to="/" className="sidebar-item link__HOME">
              Home
            </NavLink>
            <NavLink to="/Products" className="sidebar-item link__Products">
              Products
            </NavLink>
            <NavLink to="About" className="sidebar-item link__ABOUT">
              About
            </NavLink>
            <NavLink to="Contact" className="sidebar-item link__CONTACT">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header">
          <div className="menu">
            <NavLink to="/" className="menu-item ">
              Home
            </NavLink>
            <NavLink to="/Products" className="menu-item ">
              Products
            </NavLink>
            <NavLink to="About" className="menu-item">
              About
            </NavLink>
            <NavLink to="Contact" className="menu-item">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div className={`menu-hamburger`} onClick={openSideBar}>
        <div className={clsx("bar", "bar1", { change: isOpen })}></div>
        <div className={clsx("bar", "bar2", { change: isOpen })}></div>
        <div className={clsx("bar", "bar3", { change: isOpen })}></div>
      </div>
    </div>
  );
}
