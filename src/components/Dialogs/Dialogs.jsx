import React from 'react';
import classes from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Vasya
                </div>
                <div className={classes.dialog}>
                    Petya
                </div>
                <div className={classes.dialog}>
                    Kolya
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
