import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "coral" }}>
        <Toolbar>
          <Grid container spacing={3} style={{ textAlign: "center" }}>
            <Grid item xs={4}>
              <Typography
                variant="h6"
                color="inherit"
                style={{ fontWeight: "bold" }}
              >
                THE OFFICE CLICKY GAME
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" color="inherit">
                {props.greetingMessage}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" color="inherit">
                Score: {props.score} | Top Score: {props.topScore}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
