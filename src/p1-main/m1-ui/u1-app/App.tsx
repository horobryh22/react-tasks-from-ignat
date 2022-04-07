import React from 'react'
import classes from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2';

function App() {
    return (
        <div className={classes.App}>
            <h1 className={classes.title}>React homeworks:</h1>
            <HW1/>
            <HW2/>
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            {/*<HW5/>*/}

        </div>
    )
}

export default App
