import React from "react";
import logo from "../../../../image/Home/icon.png";
import bg1 from "../../../../image/Home/bg1.png";

const Footer = () => {
  return (
    <footer
      className="bg-no-repeat py-10"
      style={{ backgroundColor: "#282932", backgroundImage: `url(${bg1})` }}
    >
      <div className="footer p-10 text-white container mx-auto">
        <div>
          <img src={logo} alt="" />
          <p>
            <span className="text-lg">FoodFly.</span>
            <br />
            Like-themes © All Rights Reserved - 2023 - Purchase
          </p>
        </div>
        <div>
          <span className="footer-title text-yellow-500">Our Menu</span>
          <a className="link link-hover">About Us </a>
          <a className="link link-hover">Menu</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-yellow-500">Our Foods</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-yellow-500">Others</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
