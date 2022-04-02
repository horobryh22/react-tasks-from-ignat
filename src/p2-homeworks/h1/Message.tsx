import React from 'react'
import classes from './Message.module.css';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message = ({avatar, name, message, time}: MessageType) => {

    return (
        <div className={classes.message}>
            <div className={classes.avatar}>
                <img src={`${avatar}`} alt="avatar"/>
            </div>
            <div className={classes.inner}>
                <div className={classes.inner__name}>{name}</div>
                <div className={classes.inner__wrapper}>
                    <div className={classes.inner__text}>{message}</div>
                    <div className={classes.inner__time}>{time}</div>
                </div>
            </div>
        </div>
    )
}




