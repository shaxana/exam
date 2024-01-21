import React from "react";
import { FaFacebook } from "react-icons/fa";
import {Link} from 'react-router-dom'
import "./navbar.scss";

function Navbar() {
  return (
    <>
      <header>
        <div className="headerMain">
          <div className="linksForHeader">
            <FaFacebook />
            <FaFacebook />
            <FaFacebook />
            <FaFacebook />
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
            <Link>Add Page</Link>
            <Link>Basket</Link>
            <Link>Wishlist</Link>
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
