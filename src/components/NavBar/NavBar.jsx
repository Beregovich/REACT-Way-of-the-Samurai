import React from 'react';
import classes from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.active}>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default NavBar;
