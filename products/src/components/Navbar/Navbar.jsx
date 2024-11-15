import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {
  GlobalOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
const Navbar = () => {
  const colors = ["#e6e6e6", "#222222"];
  const texts = [
    "Enjoy $50 off your first order | Exclusive member offer | Sign up for complimentary membership",
    "Free shipping on orders over $200 | Plus free returns for 30 days",
  ];
  const [currentColor, setCurrentColor] = useState("#e6e6e6");
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor(currentColor === "#e6e6e6" ? "#222222" : "#e6e6e6");

      setCurrentText(currentText === texts[0] ? texts[1] : texts[0]);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentColor, currentText]);
  return (
    <div className="navbarContainer">
      <div
        className="navbarTopContainer"
        style={{
          backgroundColor: currentColor,

          transition: "background-color 0.5s ease",
        }}
      >
        <h1
          className="navTopH1"
          style={{ color: currentColor === "#e6e6e6" ? "#222222" : "#e6e6e6" }}
        >
          {currentText}
        </h1>
      </div>
      <div className="navCenterContainer">
        <div className="navbarRight">
          <div>
            <ShoppingOutlined />
          </div>
          <div>
            <HeartOutlined />
          </div>
          <div>
            <UserOutlined />
          </div>
          <div>
            <GlobalOutlined />
          </div>
        </div>
        <div className="navbarCenter">
            <h1 style={{fontSize:"40px"}}>FARFETCH</h1>
        </div>
        <div className="navbarLeft"></div>
      </div>
    </div>
  );
};

export default Navbar;
