import React from 'react';
import classes from './Dialogs.module.css';
const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Friend 1
                </div>
                <div className={classes.dialog}>
                    Friend 2
                </div>
                <div className={classes.dialog}>
                    Friend 3
                </div>
                <div className={classes.dialog}>
                    Friend 4
                </div>
                <div className={classes.dialog}>
                    Friend 5
                </div>
            </div>

            <div className={classes.messages}>
                <div className='message'>Hi!</div>
                <div className='message'>How are you?</div>
                <div className='message'>How was your day?</div>
            </div>
        </div>
    );
}
export default Dialogs;