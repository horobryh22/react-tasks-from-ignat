import React, {ChangeEvent} from 'react'
import classes from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}


const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers}) => {

    const inputClass = (error.length > 0) ? classes.error : '';

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass + ' ' + classes.input}/>
            <button className={classes.button} onClick={addUser}>add</button>
            <span className={classes.count}>{totalUsers}</span>
            <span className={classes.errorText}>{error}</span>
        </div>
    )
}

export default Greeting
