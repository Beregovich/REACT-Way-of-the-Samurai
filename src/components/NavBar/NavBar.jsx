import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.navLink}>
                <NavLink to='/Profile' className={navData => navData.isActive ? classes.active : classes.navLink}>Profile</NavLink>
            </div>
            <div className={classes.navLink}>
                <NavLink to='/Dialogs' className={navData => navData.isActive ? classes.active : classes.navLink}>Messages</NavLink>
            </div>
            <div className={classes.navLink}>
                <NavLink to='/Users' className={navData => navData.isActive ? classes.active : classes.navLink}>Users</NavLink>
            </div>
            <div className={classes.navLink}>
                <NavLink to='/News' className={navData => navData.isActive ? classes.active : classes.navLink}>News</NavLink>
            </div>
            <div className={classes.navLink}>
                <NavLink to='/Music' className={navData => navData.isActive ? classes.active : classes.navLink}>Music</NavLink>
            </div>
            <div className={classes.navLink}>
                <NavLink to='/Settings' className={navData => navData.isActive ? classes.active : classes.navLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;
