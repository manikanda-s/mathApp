import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import './TemporaryDrawer.css'
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
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
        <Link to="/play">Play</Link>
        <Link to="/problems">Problems</Link>
        <Link to="/quiz">Quiz</Link>
      </div>
    </Box>
  );

  return (
    <React.Fragment key={"left"}>
      <Button onClick={toggleDrawer("left", true)} className="drawer-btn">{<MenuIcon />}</Button>
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
