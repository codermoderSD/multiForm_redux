import React from "react";
import "./Header.css";

const Header = ({ active }) => {
  return (
    <div className="header">
      <div className={`page ${active === 1 && "active"}`}>1</div>
      <div className={`page ${active === 2 && "active"}`}>2</div>
      <div className={`page ${active === 3 && "active"}`}>3</div>
    </div>
  );
};

export default Header;
