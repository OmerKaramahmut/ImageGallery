import React from "react";
import "./Footer.css";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <h1>Karamahmutoğlu</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          maiores, delectus perspiciatis illo cum beatae, quam aut molestiae
          iure recusandae ipsam eveniet cupiditate praesentium maxime veritatis
          perferendis exercitationem! Tempore, quaerat.
        </p>
      </div>
      <div className="footerAdress">
        <h1>Adress</h1>
        <p>
          (603) 756-3276 387 <br /> Ramsay Hill Rd Walpole,
          <br /> New Hampshire(NH), 03608
          <hr />
          OmerKaramahmutoglu@outlook.com
        </p>
      </div>
      <div className="footerLinks">
        <h1>Linkler</h1>
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
      <div className="socialFooter">
        <IoLogoInstagram  size={30} className="socialIconFooter" />
        <BsTwitterX  size={30} className="socialIconFooter"/>
        <FaFacebookF size={30} className="socialIconFooter"/>
        <IoMailOpenSharp size={30}  className="socialIconFooter"/>
      </div>
    </div>
  );
};

export default Footer;
