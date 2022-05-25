import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import classes from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop();
        const id: number = +setInterval(() => {
            setDate(new Date());
        }, 1000)
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }

    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

    const stringTime = `${hours}:${minutes}:${seconds}`;
    const stringDate = `${day}.${month}.${date.getFullYear()}`;

    return (
        <div>
            <div
                className={classes.timer}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>


            <div className={classes.date}>
                {show && `Date: ${stringDate}`}
            </div>


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock;
