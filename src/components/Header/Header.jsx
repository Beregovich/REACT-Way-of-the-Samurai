import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.loginBlock}>
                {!props.isAuth
                    ? <NavLink to={'/login'}>Log In</NavLink>
                    : props.login}
            </div>
        </header>
    )
}
export default Header;