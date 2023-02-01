import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
  return (
      <nav className={classes.nav}>
          <div className={classes.item}>
              <NavLink to="/profile" className = { status => status.isActive ? classes.active : classes.item }>Profile</NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to="/messages" className = { status => status.isActive ? classes.active : classes.item }>Messages</NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to="/news" className = { status => status.isActive ? classes.active : classes.item }>News</NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to="/music" className = { status => status.isActive ? classes.active : classes.item }>Music</NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to="/settings" className = { status => status.isActive ? classes.active : classes.item }>Settings</NavLink>
          </div>
      </nav>
  );
}

export default Navbar;