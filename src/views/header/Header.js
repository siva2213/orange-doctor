import React, { useState } from "react";
import "./Header.css";
import { CiSettings } from "react-icons/ci";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="hd-main">
      <img src={logo} alt="hfavire" className="logo" />

      <div className="hd-hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <CiSettings className="ham-cls" />
        ) : (
          <CiSettings className="ham-opn" />
        )}
      </div>
      <div className={`hd-menu ${isOpen ? "open" : "close"}`}>
        <button
          className={`hd-btn1 ${
            activeButton === "HOME" ? "active" : "inactive"
          }`}
          onClick={() => handleButtonClick("HOME")}
        >
          HOME
        </button>
        <button
          className={`hd-btn1 ${
            activeButton === "ABOUT" ? "active" : "inactive"
          }`}
          onClick={() => handleButtonClick("ABOUT")}
        >
          ABOUT
        </button>
        <button
          className={`hd-btn1 ${
            activeButton === "SERVICES" ? "active" : "inactive"
          }`}
          onClick={() => handleButtonClick("SERVICES")}
        >
          SERVICES
        </button>
        <button
          className={`hd-btn1 ${
            activeButton === "CONTACT US" ? "active" : "inactive"
          }`}
          onClick={() => handleButtonClick("CONTACT US")}
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Header;
