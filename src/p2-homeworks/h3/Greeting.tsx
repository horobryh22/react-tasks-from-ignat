import React, {ChangeEvent, KeyboardEvent} from 'react'
import classes from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    setError: (error: string) => void
    error: string
    totalUsers: number
}


const Greeting: React.FC<GreetingPropsType> = ({
                                                   name,
                                                   setNameCallback,
                                                   onEnter,
                                                   setError,
                                                   addUser,
                                                   error,
                                                   totalUsers
                                               }) => {

    const inputClass = (error.length > 0) ? classes.error : '';

    const onBlurInputHandler = () => {
        if (!name) setError('You try to enter the wrong name');
    }

    return (
        <>
            <div>
                <input onBlur={onBlurInputHandler} onKeyPress={onEnter} value={name} onChange={setNameCallback}
                       className={inputClass + ' ' + classes.input}/>
                <button className={classes.button} disabled={!name} onClick={addUser}>add</button>
                <span className={classes.count}>{totalUsers}</span>

            </div>
            <div className={classes.errorText}>{error}</div>
        </>
    )
}

export default Greeting
