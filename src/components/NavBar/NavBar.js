import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "#252525", paddingBottom: "10px" }}
      >
        <Toolbar>
          <Grid container spacing={3} style={{ textAlign: "center" }}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                color="inherit"
                style={{
                  color: "coral",
                  paddingTop: "15px",
                  fontWeight: "bold",
                  fontSize: "20px"
                }}
              >
                THE OFFICE CLICKY GAME
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                color="inherit"
                style={{
                  color: "#0080FF",
                  fontWeight: "bold",
                  paddingBottom: "5px"
                }}
              >
                Score: {props.score}
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                style={{ color: "#0080FF", fontWeight: "bold" }}
              >
                Top Score: {props.topScore}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
