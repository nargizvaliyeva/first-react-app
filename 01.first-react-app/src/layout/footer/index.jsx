import React from 'react'
import "./index.css"
import { IoAddCircleOutline } from "react-icons/io5";
import { IoAirplaneOutline } from "react-icons/io5";
import { AiFillIeCircle } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
            <div className="left-2">
                <h3><IoAddCircleOutline />Passages of Lorem Ipsum available</h3>
                <h3><IoAirplaneOutline />call:+012334567890</h3>
                <h3><AiFillIeCircle />demo@gamil.com</h3>
            </div>
            <div className="right-2">
              <div className="box">
              <input type="email" />
              <button className="submit">subscribe</button>
              </div>
              <div className="icon">
              <AiFillApple />
              <AiFillDollarCircle />
              <AiFillCopyrightCircle />

              </div>
            </div>
        </div>
        </div>  
    </footer>
    
  )
}

export default Footer
