import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./TemporaryDrawer.css";
import MenuIcon from "@mui/icons-material/Menu";

import ExtensionIcon from "@mui/icons-material/Extension";
import CalculateIcon from "@mui/icons-material/Calculate";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="Drawer__links">
        <Link to="/play">
          <ExtensionIcon className="header__menuicon"/> 
          <div>Play</div>
        </Link>
        <Link to="/problems">
          <CalculateIcon className="header__menuicon" />
          <div>Problems</div>
        </Link>
        <Link to="/quiz">
          <FormatListNumberedIcon className="header__menuicon"/>
          <div>Quiz</div>
        </Link>
      </div>
    </Box>
  );

  return (
    <React.Fragment key={"left"}>
      <Button onClick={toggleDrawer("left", true)} className="drawer-btn">
        {<MenuIcon />}
      </Button>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </React.Fragment>
  );
}
