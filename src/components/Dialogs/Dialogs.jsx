import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1'>Vasya</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Petya</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Kolya</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Some first message
                </div>
                <div className={classes.message}>
                    Some second message
                </div>
                <div className={classes.message}>
                    Some third message
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
