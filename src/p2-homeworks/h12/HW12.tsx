import React from 'react';
import classes from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useAppDispatch, useTypedSelector} from '../h10/bll/store';
import {changeTheme} from '../h10/bll/reducers/themeReducer';

const themes = ['dark', 'red', 'green', 'yellow'];

function HW12() {

    const theme = useTypedSelector(state => state.theme.currentTheme);
    const dispatch = useAppDispatch();

    const onChangeHandler = (theme: string) => {
        dispatch(changeTheme(theme))
    }

    return (
        <div className={classes.main + ' ' + classes[theme]}>
            <span className={classes[theme + '-text']}>
            <h3>Twelfth Homework:</h3>
            </span>

            <SuperRadio
                value={theme}
                options={themes}
                onChangeOption={onChangeHandler}
            />
        </div>
    );
}

export default HW12;
