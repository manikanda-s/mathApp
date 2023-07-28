import React from "react";
import "./Header.css";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <TemporaryDrawer />
      <div className="header__container">
        <div className="header__logo"><Link to='/'>MathApp</Link></div>
        <div className="header__menu">
          <div className="play"><Link to='play'>Play</Link></div>
          <div className="problems"><Link to='problems'>Problems</Link></div>
          <div className="quiz"><Link to='quiz'>Quiz</Link></div>
        </div> 
      </div>
    </div>
  );
}

export default Header;
