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
function Navbar() {
  const classes = useStyles();
  return (
    <>
       <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography  to="/" variant="h6" className={classes.title} color="inherit">
            <img src={icon} alt="commerce.js" height="25px" className={classes.image} /> Commerce.js
          </Typography>
          <div className={classes.grow} />
          
          <div className={classes.button}>
            <IconButton  to="/cart" aria-label="Show cart items" color="inherit">
              <Badge  color="secondary">
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
