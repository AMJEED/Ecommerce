import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import icon from "../../assets/icon.png";
import useStyles from "../Styles";
import { Link } from 'react-router-dom';
function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={icon}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.loginSection}>
          <Typography
        component={Link} // Use Link component instead of 'to'
        to="/login" // Specify the path to the login page
        variant="h7"
        color="inherit"
        style={{ marginRight: "10px", display: "inline-block" }}
        className={classes.loginSection1}
      >
        LOGIN
      </Typography>
      <Typography
        component={Link} // Use Link component instead of 'to'
        to="/signup" // Specify the path to the login page
        variant="h7"
        color="inherit"
        style={{ marginRight: "10px", display: "inline-block" }}
        className={classes.loginSection1}
      >
        SIGNUP
      </Typography>
          </div>

          <div className={classes.button}>
            <IconButton to="/cart" aria-label="Show cart items" color="inherit">
              <Badge color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
