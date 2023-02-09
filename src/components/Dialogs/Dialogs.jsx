import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return(
    <div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props) => {
    return(
        <div>{props.message}</div>
    )
}
const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dmytro'},
        {id: 2, name: 'Olena'},
        {id: 3, name: 'Kurulo'},
        {id: 4, name: 'Julia'},
        {id: 5, name: 'Krystin'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>

            <div className={classes.messages}>
                <Message message='Also hope you will have a nice day)'/>
                <Message message='Hoping to get a job soon)))'/>
                <Message message='I am learning REACT'/>
                <Message message='How are you today?'/>
                <Message message='Hello)'/>
            </div>
        </div>
    );
}
export default Dialogs;