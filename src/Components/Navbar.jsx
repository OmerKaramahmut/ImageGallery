import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className="navbarPage">
      <div className={navbar ? "navbarContainer active" : "navbarContainer"}>
        <div className="logo">Karamahmutoğlu</div>
        <div className="list">
          <ul>
            <li>
              <a href="">Ana Sayfa</a>
            </li>
            <li>
              <a href="">Sergiler</a>
            </li>
            <li>
              <a href="">İletişim</a>
            </li>
          </ul>
        </div>
        <div className="socialNavbar">
          <IoLogoInstagram size={25} className="navbarIcon" />
          <BsTwitterX size={25} className="navbarIcon" />
          <FaFacebookF size={25} className="navbarIcon" />
          <IoMailOpenSharp size={25} className="navbarIcon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
