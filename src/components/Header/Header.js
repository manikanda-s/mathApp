import React from "react";
import "./Header.css";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";
import { Link } from "react-router-dom";
import ExtensionIcon from "@mui/icons-material/Extension";
import CalculateIcon from '@mui/icons-material/Calculate';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

function Header() {
  return (
    <div className="header">
      <TemporaryDrawer />
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">MathApp</Link>
        </div>
        <div className="header__menu">
          <div className="play">
            <Link to="/play">
              <ExtensionIcon className="header__menuicon"/>
              <div>Play</div>
            </Link>
          </div>
          <div className="problems">
            <Link to="/problems">
              <CalculateIcon className="header__menuicon"/>
              <div>Problems</div>
            </Link>
          </div>
          <div className="quiz">
            <Link to="/quiz">
              <FormatListNumberedIcon className="header__menuicon"/>
              <div>Quiz</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
