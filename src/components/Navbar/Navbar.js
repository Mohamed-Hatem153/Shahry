import React from "react";
import logo from "../../logo.svg";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.innerNav}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.userDetails}>
          <img
            src={`https://randomuser.me/api/portraits/men/1.jpg`}
            alt="userImage"
          />
          <div className={classes.userName}>
            <h4>Some One</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
