import React from 'react'
import Clock from './Clock'
import {useTypedSelector} from '../h10/bll/store';
import themes from './../h12/HW12.module.css'

function HW9() {

    const theme = useTypedSelector(state => state.theme.currentTheme);

    return (
        <div>
            <hr/>
            <h3 className={themes[theme + '-text']}>Ninth Homework:</h3>
            <Clock/>
        </div>
    )
}

export default HW9
