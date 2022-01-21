import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

let dialogs = [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Petya" },
    { id: 3, name: "Kolya" },
    { id: 4, name: "Serezha" },
]

let messages = [
    { id: 1, message: "First" },
    { id: 2, message: "Second" },
    { id: 3, message: "Third" },
]

let dialogsElements = dialogs.map(
    d => <DialogItem id={d.id} name={d.name} />
)


let messagesElements = messages.map(
    m => <Message id={m.id} message={m.message} />
)

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <Message id='2' message='mesg' />
            </div>
        </div>
    )
}

export default Dialogs;
