import React from "react";
import { GiElectricalCrescent } from "react-icons/gi";
import "./index.css"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>
            <GiElectricalCrescent />
            Electrochip
          </h1>
        <nav>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">SERVICE</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
