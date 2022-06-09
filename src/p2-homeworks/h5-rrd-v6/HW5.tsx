import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {BrowserRouter} from 'react-router-dom';
import classes from '../../p1-main/m1-ui/u1-app/App.module.css';
import {useTypedSelector} from '../h10/bll/store';
import themes from './../h12/HW12.module.css'

function HW5() {

    const theme = useTypedSelector(state => state.theme.currentTheme);

    return (
        <div>
            <BrowserRouter>

                <Header/>

                <h1 className={classes.title + ' ' + themes[theme + '-text']}>React homeworks:</h1>

                <Pages/>

            </BrowserRouter>
        </div>
    )
}

export default HW5
