import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

let messagesData = [
    { id: 1, message: "First" },
    { id: 2, message: "Second" },
    { id: 3, message: "Third" },
]

let dialogsData = [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Petya" },
    { id: 3, name: "Kolya" },
    { id: 4, name: "Serezha" },
]

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
                <DialogItem id={dialogsData[0].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[3].name} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;
