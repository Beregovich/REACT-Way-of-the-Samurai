import React from 'react';
import classes from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.active}>
                <a href='/Profile'>Profile</a>
            </div>
            <div>
                <a href='/Messages'>Messages</a>
            </div>
            <div>
                <a href='/News'>News</a>
            </div>
            <div>
                <a href='/Music'>Music</a>
            </div>
            <div>
                <a href='/Settings'>Settings</a>
            </div>
        </nav>
    )
}

export default NavBar;
