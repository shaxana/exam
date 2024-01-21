import React from "react";
import { FaFacebook, FaInstagramSquare, FaLink } from "react-icons/fa";
import {Link} from 'react-router-dom'
import "./navbar.scss";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <header>
        <div className="headerMain">
          <div className="linksForHeader">
            <FaFacebook />
            <FaSquareInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>

          <div className="rightHeader">
            <span className="phone">(+1) 234 5678 9101</span>
            <span className="mail">shop@yourdomain.com</span>
          </div>
        </div>
      </header>


      <nav>
        <div className="navContainer">
          <div className="logo">Selling.</div>

          <div className="rightLinksForNavbar">
            <Link>Home</Link>
            <Link to="/add">Add Page</Link>
            <Link to="/cart">Basket</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link>Specials</Link>
            <Link>Specials</Link>
            <Link>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
