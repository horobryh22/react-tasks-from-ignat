import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {BrowserRouter} from 'react-router-dom';
import classes from '../../p1-main/m1-ui/u1-app/App.module.css';

function HW5() {
    return (
        <div>
            <BrowserRouter>

                <Header/>

                <h1 className={classes.title}>React homeworks:</h1>

                <Pages/>

            </BrowserRouter>
        </div>
    )
}

export default HW5
