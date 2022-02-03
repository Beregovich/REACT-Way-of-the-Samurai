import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    debugger
    return (
        <header className={classes.header}>
            <div className={classes.loginBlock}>
                {!props.isAuth ? <NavLink to={'/login'}>Log In</NavLink> : 'LogOut'}
            </div>
        </header>
    )
}
export default Header;