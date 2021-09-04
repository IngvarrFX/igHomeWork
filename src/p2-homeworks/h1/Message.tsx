import React from 'react'
import {messageDataType} from './HW1';
import s from './Message.module.css';

function Message(props: messageDataType) {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={props.avatar}/>
            <div className={s.angel}></div>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
)
}

export default Message
