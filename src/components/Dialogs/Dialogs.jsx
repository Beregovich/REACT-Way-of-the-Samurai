import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem id='1' name='Vasya' />
                <DialogItem id='2' name='Petya' />
                <DialogItem id='3' name='Kolya' />
                <DialogItem id='4' name='Serezha' />
            </div>
            <div className={classes.messages}>
                <Message message="First" />
                <Message message="Secondt" />
                <Message message="Third" />
            </div>
        </div>
    )
}

export default Dialogs;
