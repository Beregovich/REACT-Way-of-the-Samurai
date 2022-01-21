import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

let messages = [
    { id: 1, message: "First" },
    { id: 2, message: "Second" },
    { id: 3, message: "Third" },
]

let dialogs = [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Petya" },
    { id: 3, name: "Kolya" },
    { id: 4, name: "Serezha" },
]

let messagesElements = messages.map(
    m => <DialogItem message={m.name} />
)

let dialogsElements = dialogs.map(
    d => <DialogItem id={d.id} name={d.name} />
)

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
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;
